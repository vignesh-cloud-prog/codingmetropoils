import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useChat } from "ai/react"
import { HiOutlineChatAlt2, HiOutlineX, HiOutlinePaperAirplane } from "react-icons/hi"
import { appointmentHref } from "@/assets/data/offers"

const GREETING =
  "Hi — I’m here to help you explore CodeMadeBiz services (software, AI, websites & CRM, MVPs). What’s your name, and what kind of business are you running?"

const QUICK_REPLIES = [
  { label: "AI services", text: "I’m interested in AI services for my business.", intent: "ai" },
  { label: "MVP", text: "I need to build a startup MVP.", intent: "mvp" },
  { label: "Website + CRM", text: "I need a website with a CRM dashboard.", intent: "webcrm" },
  { label: "Software plans", text: "Tell me about your software development plans.", intent: "software" },
  { label: "Talk to a human", text: "I’d like to talk to a human and book a consultation.", intent: "default" },
]

function detectIntent(text = "") {
  const match = text.match(/\/appointment\?intent=([a-z]+)/i)
  if (match?.[1]) return match[1]
  const lower = text.toLowerCase()
  if (/\bmvp\b|startup product/.test(lower)) return "mvp"
  if (/website\s*\+?\s*crm|crm dashboard|lead pipeline/.test(lower)) return "webcrm"
  if (/\benterprise\b|custom tools|internal platform/.test(lower)) return "enterprise"
  if (/\bai\b|growth stack|support agent|social media/.test(lower)) return "ai"
  if (/launch|growth|scale|software plan/.test(lower)) return "software"
  return null
}

function renderInline(text, keyPrefix) {
  if (!text) return null
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|__[^_]+__)/g)
  return tokens.map((token, i) => {
    const key = `${keyPrefix}-${i}`
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const [, label, href] = link
      if (href.startsWith("/")) {
        return (
          <Link key={key} href={href} className='chat-inline-link'>
            {label}
          </Link>
        )
      }
      return (
        <a key={key} href={href} target='_blank' rel='noopener noreferrer' className='chat-inline-link'>
          {label}
        </a>
      )
    }
    const bold = token.match(/^\*\*([^*]+)\*\*$/) || token.match(/^__([^_]+)__$/)
    if (bold) {
      return <strong key={key}>{bold[1]}</strong>
    }
    return <React.Fragment key={key}>{token}</React.Fragment>
  })
}

function renderMessageContent(content) {
  if (!content) return null
  const paragraphs = String(content).split(/\n{2,}/)
  return paragraphs.map((paragraph, pi) => {
    const lines = paragraph.split("\n")
    return (
      <p key={`p-${pi}`} className='chat-para'>
        {lines.map((line, li) => (
          <React.Fragment key={`l-${pi}-${li}`}>
            {li > 0 && <br />}
            {renderInline(line, `${pi}-${li}`)}
          </React.Fragment>
        ))}
      </p>
    )
  })
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  const [intent, setIntent] = useState(null)
  const listRef = useRef(null)

  const { messages, input, handleInputChange, handleSubmit, append, isLoading, error, setMessages } = useChat({
    api: "/api/chat",
    initialMessages: [{ id: "greeting", role: "assistant", content: GREETING }],
  })

  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, open, isLoading])

  useEffect(() => {
    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant")
    const found = detectIntent(lastAssistant?.content || "")
    if (found) setIntent(found)
  }, [messages])

  const bookHref = useMemo(() => appointmentHref(intent && intent !== "default" ? intent : null), [intent])

  const showTyping = useMemo(() => {
    if (!isLoading) return false
    const last = messages[messages.length - 1]
    return !(last?.role === "assistant" && last?.content)
  }, [isLoading, messages])

  const onQuickReply = async (reply) => {
    setIntent(reply.intent === "default" ? null : reply.intent)
    await append({ role: "user", content: reply.text })
  }

  const resetChat = () => {
    setIntent(null)
    setMessages([{ id: "greeting", role: "assistant", content: GREETING }])
  }

  return (
    <div className={`chat-widget${open ? " is-open" : ""}`}>
      {open && (
        <div className='chat-panel' role='dialog' aria-label='CodeMadeBiz chat assistant'>
          <div className='chat-panel-header'>
            <div>
              <p className='chat-eyebrow'>CodeMadeBiz</p>
              <strong>Help & guidance</strong>
            </div>
            <div className='chat-header-actions'>
              <button type='button' className='chat-icon-btn' onClick={resetChat} aria-label='Reset chat'>
                Reset
              </button>
              <button type='button' className='chat-icon-btn' onClick={() => setOpen(false)} aria-label='Close chat'>
                <HiOutlineX size={20} />
              </button>
            </div>
          </div>

          <div className='chat-messages' ref={listRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-bubble chat-${m.role}`}>
                {renderMessageContent(m.content)}
              </div>
            ))}
            {showTyping && <div className='chat-bubble chat-assistant chat-typing'>Thinking…</div>}
            {error && (
              <div className='chat-bubble chat-error'>
                {error.message?.includes("API key") || error.message?.includes("not configured")
                  ? "Chat isn’t configured yet. "
                  : "Sorry — chat hit a snag. "}
                You can still <Link href='/appointment'>book a consultation</Link>.
              </div>
            )}
          </div>

          {messages.length <= 2 && (
            <div className='chat-chips'>
              {QUICK_REPLIES.map((reply) => (
                <button key={reply.label} type='button' onClick={() => onQuickReply(reply)} disabled={isLoading}>
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          <div className='chat-cta-bar'>
            <Link href={bookHref} className='button-primary chat-book-btn'>
              Book consultation
            </Link>
          </div>

          <form className='chat-input-row' onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder='Type your message…'
              aria-label='Chat message'
              disabled={isLoading}
            />
            <button type='submit' className='button-primary chat-send-btn' disabled={isLoading || !input.trim()} aria-label='Send message'>
              <HiOutlinePaperAirplane size={16} />
              <span>Send</span>
            </button>
          </form>
          <p className='chat-disclaimer'>For quotes and project scoping, book a consultation.</p>
        </div>
      )}

      <button
        type='button'
        className='chat-launcher'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with CodeMadeBiz"}
      >
        {open ? <HiOutlineX size={26} /> : <HiOutlineChatAlt2 size={26} />}
        <span>{open ? "Close" : "Chat with us"}</span>
      </button>
    </div>
  )
}

export default ChatWidget
