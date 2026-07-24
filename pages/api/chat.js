import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { buildSystemPrompt } from "@/lib/chat/systemPrompt"

export const config = {
  api: {
    bodyParser: true,
  },
}

const MAX_MESSAGES = 40
const MODEL = process.env.GOOGLE_GENERATIVE_AI_MODEL || "gemini-flash-latest"

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

  try {
    const google = createGoogleGenerativeAI({ apiKey })
    const result = streamText({
      model: google(MODEL),
      system: buildSystemPrompt(),
      messages: trimmed,
      temperature: 0.55,
      maxTokens: 900,
    })

    result.pipeDataStreamToResponse(res, {
      getErrorMessage: (error) => {
        const message = error?.message || "Chat failed. Please try again or book a consultation."
        console.error("[api/chat]", message)
        return message
      },
    })
  } catch (error) {
    console.error("[api/chat]", error)
    return res.status(500).json({
      error: error?.message || "Chat failed. Please try again or book a consultation.",
    })
  }
}
