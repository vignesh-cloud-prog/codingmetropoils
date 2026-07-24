import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useChat } from "ai/react"
import { HiOutlineChatAlt2, HiOutlineX, HiOutlinePaperAirplane, HiOutlineMail, HiOutlineClipboardCopy } from "react-icons/hi"
import { FaWhatsapp } from "react-icons/fa"
import { appointmentHref } from "@/assets/data/offers"
import BrandName from "@/components/common/BrandName"

const CONTACT_PHONE = "+918762363186"
const CONTACT_PHONE_DISPLAY = "+91 8762363186"
const CONTACT_EMAIL = "contact@codemadebiz.com"
const WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE.replace("+", "")}`
const MAIL_HREF = `mailto:${CONTACT_EMAIL}`

const GREETING =
  "Hi — I’m here to help you explore CodeMadeBiz services (software, AI, websites & CRM, MVPs). What’s your name, and what kind of business are you running?"

const QUICK_REPLIES = [
  { label: "AI services", text: "I’m interested in AI services for my business.", intent: "ai" },
  { label: "MVP", text: "I need to build a startup MVP.", intent: "mvp" },
  { label: "Website + CRM", text: "I need a website with a CRM dashboard.", intent: "webcrm" },
  { label: "Software plans", text: "Tell me about your software development plans.", intent: "software" },
  { label: "Talk to a human", text: "I’d like to talk to a human and book a consultation.", intent: "default" },
]

function detectAppointmentIntent(text = "") {
  const match = text.match(/\/appointment\?intent=([a-z]+)/i)
  return match?.[1] || null
}

function recommendsHumanContact(text = "") {
  if (!text) return false
  const lower = text.toLowerCase()
  return (
    /\/appointment/i.test(text) ||
    /wa\.me\//i.test(text) ||
    /mailto:/i.test(text) ||
    /book a consultation/i.test(lower) ||
    /book consultation/i.test(lower) ||
    /talk to (a |our )?human/i.test(lower) ||
    /speak (with|to) (our|a|the) (team|human)/i.test(lower) ||
    /reach (us|our team)/i.test(lower) ||
    /whatsapp/i.test(lower) ||
    /contact@codemadebiz\.com/i.test(lower) ||
    /\+91\s*8762363186/i.test(text)
  )
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
  const [showContactCta, setShowContactCta] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const listRef = useRef(null)

  const { messages, input, handleInputChange, handleSubmit, append, isLoading, error, setMessages } = useChat({
    api: "/api/chat",
    initialMessages: [{ id: "greeting", role: "assistant", content: GREETING }],
  })

  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, open, isLoading, showContactCta])

  useEffect(() => {
    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant")
    const content = lastAssistant?.content || ""
    const foundIntent = detectAppointmentIntent(content)
    if (foundIntent) setIntent(foundIntent)
    if (recommendsHumanContact(content)) setShowContactCta(true)
  }, [messages])

  const bookHref = useMemo(() => appointmentHref(intent && intent !== "default" ? intent : null), [intent])

  const showTyping = useMemo(() => {
    if (!isLoading) return false
    const last = messages[messages.length - 1]
    return !(last?.role === "assistant" && last?.content)
  }, [isLoading, messages])

  const onQuickReply = async (reply) => {
    if (reply.intent === "default") {
      setShowContactCta(true)
      setIntent(null)
    } else {
      setIntent(reply.intent)
    }
    await append({ role: "user", content: reply.text })
  }

  const resetChat = () => {
    setIntent(null)
    setShowContactCta(false)
    setPhoneCopied(false)
    setEmailCopied(false)
    setMessages([{ id: "greeting", role: "assistant", content: GREETING }])
  }

  const copyContact = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "phone") {
        setPhoneCopied(true)
        setTimeout(() => setPhoneCopied(false), 2000)
      } else {
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
      }
    } catch {
      // Clipboard may be blocked; ignore quietly
    }
  }

  return (
    <div className={`chat-widget${open ? " is-open" : ""}`}>
      {open && (
        <div className='chat-panel' role='dialog' aria-label='CodeMadeBiz chat assistant'>
          <div className='chat-panel-header'>
            <div>
              <p className='chat-eyebrow'>
                <BrandName />
              </p>
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
                {/rate-limited|quota|429/i.test(error.message || "")
                  ? "Chat is busy right now (free AI limit). Wait about a minute and try again — or "
                  : error.message?.includes("API key") || error.message?.includes("not configured")
                    ? "Chat isn’t configured yet. "
                    : "Sorry — chat hit a snag. "}
                <Link href='/appointment'>book a consultation</Link>
                {", "}
                <a href={WHATSAPP_HREF} target='_blank' rel='noopener noreferrer'>
                  WhatsApp
                </a>
                {", or "}
                <a href={MAIL_HREF}>{CONTACT_EMAIL}</a>.
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

          {showContactCta && (
            <div className='chat-cta-bar'>
              <Link href={bookHref} className='button-primary chat-book-btn'>
                Book consultation
              </Link>
              <div className='chat-contact-links'>
                <div className='chat-contact-item'>
                  <a href={WHATSAPP_HREF} target='_blank' rel='noopener noreferrer' className='chat-contact-link'>
                    <FaWhatsapp size={14} aria-hidden />
                    <span>WhatsApp {CONTACT_PHONE_DISPLAY}</span>
                  </a>
                  <button
                    type='button'
                    className='chat-copy-btn'
                    onClick={() => copyContact(CONTACT_PHONE_DISPLAY, "phone")}
                    aria-label='Copy phone number'
                    title='Copy phone number'
                  >
                    <HiOutlineClipboardCopy size={15} />
                    {phoneCopied && <span className='chat-copied-tip'>Copied!</span>}
                  </button>
                </div>
                <div className='chat-contact-item'>
                  <a href={MAIL_HREF} className='chat-contact-link'>
                    <HiOutlineMail size={14} aria-hidden />
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                  <button
                    type='button'
                    className='chat-copy-btn'
                    onClick={() => copyContact(CONTACT_EMAIL, "email")}
                    aria-label='Copy email'
                    title='Copy email'
                  >
                    <HiOutlineClipboardCopy size={15} />
                    {emailCopied && <span className='chat-copied-tip'>Copied!</span>}
                  </button>
                </div>
              </div>
            </div>
          )}

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
          {showContactCta && <p className='chat-disclaimer'>Pick a channel above to reach the team.</p>}
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
