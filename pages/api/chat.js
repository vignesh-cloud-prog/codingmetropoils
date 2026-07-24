import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { buildSystemPrompt } from "@/lib/chat/systemPrompt"

export const config = {
  api: {
    bodyParser: true,
  },
}

const MAX_MESSAGES = 40
// Prefer flash-lite for free-tier RPM/RPD headroom; override via env if needed.
const MODEL = process.env.GOOGLE_GENERATIVE_AI_MODEL || "gemini-flash-lite-latest"
const FALLBACK_MODELS = ["gemini-2.5-flash-lite", "gemini-flash-latest"]

function isQuotaError(error) {
  const message = String(error?.message || error || "")
  return /quota|rate.?limit|429|resource.?exhausted/i.test(message)
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY?.trim()
  if (!apiKey) {
    return res.status(503).json({
      error: "Chat is not configured. Missing GOOGLE_GENERATIVE_AI_API_KEY.",
    })
  }

  const messages = Array.isArray(req.body?.messages) ? req.body.messages : []
  if (!messages.length) {
    return res.status(400).json({ error: "messages are required." })
  }

  const trimmed = messages.slice(-MAX_MESSAGES).map((m) => ({
    role: m.role,
    content: typeof m.content === "string" ? m.content.slice(0, 4000) : "",
  }))

  const lastUser = [...trimmed].reverse().find((m) => m.role === "user")
  if (!lastUser?.content?.trim()) {
    return res.status(400).json({ error: "Empty message." })
  }

  const google = createGoogleGenerativeAI({ apiKey })
  const models = [MODEL, ...FALLBACK_MODELS.filter((m) => m !== MODEL)]

  try {
    let lastError = null

    for (const modelName of models) {
      try {
        const result = streamText({
          model: google(modelName),
          system: buildSystemPrompt(),
          messages: trimmed,
          temperature: 0.55,
          maxTokens: 700,
          maxRetries: 0,
        })

        return result.pipeDataStreamToResponse(res, {
          getErrorMessage: (error) => {
            const message = error?.message || "Chat failed. Please try again or book a consultation."
            console.error("[api/chat]", modelName, message)
            if (isQuotaError(error)) {
              return "Chat is temporarily rate-limited. Please wait about a minute, or book a consultation / WhatsApp us."
            }
            return message
          },
        })
      } catch (error) {
        lastError = error
        console.error("[api/chat] model failed", modelName, error?.message || error)
        if (!isQuotaError(error)) break
      }
    }

    if (isQuotaError(lastError)) {
      return res.status(429).json({
        error: "Chat is temporarily rate-limited. Please wait about a minute, or book a consultation / WhatsApp us.",
      })
    }

    return res.status(500).json({
      error: lastError?.message || "Chat failed. Please try again or book a consultation.",
    })
  } catch (error) {
    console.error("[api/chat]", error)
    return res.status(500).json({
      error: error?.message || "Chat failed. Please try again or book a consultation.",
    })
  }
}
