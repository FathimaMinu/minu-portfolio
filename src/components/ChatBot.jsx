import { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageSquare,
  Bot,
  X,
  Send,
  User,
  Zap,
  Rocket,
  Briefcase,
  Mail,
  Target,
  Sparkles,
} from "lucide-react";

// ─── Knowledge base ───────────────────────────────────────────────────────────

const KB = [
  {
    keywords: ["skill", "skills", "tech", "stack", "know", "technolog"],
    answer:
      "Minu works with Python, Machine Learning, TensorFlow, Scikit-Learn, and Pandas on the AI side. On the full-stack side she uses React, JavaScript, Spring Boot, Java, and MongoDB. She also knows Git, Figma, and Swagger for tooling.",
  },
  {
    keywords: ["project", "projects", "built", "portfolio", "work"],
    answer:
      "Minu has built 5 featured projects — including an Enterprise AI Assistant Platform (RAG-based), a Student Performance Prediction ML model, and RideLink Account Service (Spring Boot microservice). Scroll up to the Projects section for full details and GitHub links.",
  },
  {
    keywords: ["experience", "job", "worked", "background", "career"],
    answer:
      "Minu is an undergraduate at SLIIT specializing in AI/ML. She's built full-stack apps, AI/ML models, and backend microservices. She's actively looking for an AI/ML internship opportunity. Check the Experience section for the full timeline.",
  },
  {
    keywords: ["contact", "email", "reach", "linkedin", "github"],
    answer:
      "You can reach Minu at minufathima2004@gmail.com. She's also on LinkedIn at linkedin.com/in/fathima-minu-b510b4372 and GitHub at github.com/FathimaMinu. Or use the Contact form on this page.",
  },
  {
    keywords: ["hire", "available", "internship", "opportunity"],
    answer:
      "Yes! Minu is actively seeking AI/ML internship opportunities. She's based in Rajagiriya, Sri Lanka and open to remote or on-site roles. Drop a message via the Contact form or email minufathima2004@gmail.com.",
  },
  {
    keywords: ["hi", "hello", "hey", "sup", "yo"],
    answer:
      "Hey there! 👋 Ask me about Minu's skills, projects, experience, or how to contact her.",
  },
  {
    keywords: ["thanks", "thank", "bye", "cool", "great"],
    answer: "You're welcome! Feel free to explore the rest of the portfolio. 😊",
  },
  {
    keywords: ["certification", "certificate", "certifications"],
    answer:
      "Minu holds certifications in AI/ML (SLIIT Stages 1 & 2), Google Cloud Generative AI, Google Cloud LLMs, and the MongoDB Data Modeling Path. Check the Certifications section above.",
  },
];

const FALLBACK =
  "Hmm, I'm not sure about that one. Try asking about 'skills', 'projects', 'experience', 'certifications', 'contact', or 'hire'. Or scroll to the Contact section to reach Minu directly.";

const WELCOME = {
  id: "welcome",
  role: "bot",
  text: "Hi! 👋 I'm Minu's portfolio assistant. Ask me anything about her skills, projects, experience, or how to get in touch!",
};

// ─── Quick-reply chip definitions ─────────────────────────────────────────────

const CHIPS = [
  { label: "Skills",      icon: Zap,      query: "skills"      },
  { label: "Projects",    icon: Rocket,   query: "projects"    },
  { label: "Experience",  icon: Briefcase,query: "experience"  },
  { label: "Contact",     icon: Mail,     query: "contact"     },
  { label: "Hire Me",     icon: Target,   query: "hire"        },
];

// ─── Keyword matcher ──────────────────────────────────────────────────────────

function getReply(input) {
  const lower = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return FALLBACK;
}

// ─── Unique ID helper ─────────────────────────────────────────────────────────

let _id = 0;
const uid = () => `msg-${++_id}`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChatBot() {
  const [open, setOpen]           = useState(false);
  const [messages, setMessages]   = useState([WELCOME]);
  const [input, setInput]         = useState("");
  const [typing, setTyping]       = useState(false);

  const bottomRef  = useRef(null);
  const inputRef   = useRef(null);
  const windowRef  = useRef(null);

  // Auto-scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when window opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Esc key closes the chat
  const handleClose = useCallback(() => setOpen(false), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  // Send a user message and schedule the bot reply
  const send = useCallback((text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setInput("");
    setMessages((prev) => [...prev, { id: uid(), role: "user", text: trimmed }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "bot", text: getReply(trimmed) },
      ]);
    }, 700);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* ── Chat window ──────────────────────────────────────────────── */}
      {open && (
        <div
          className="chat-window"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio chat assistant"
          ref={windowRef}
        >
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-bot-avatar chat-bot-avatar--header">
                <Bot size={16} />
              </div>
              <div className="chat-header-info">
                <span className="chat-header-name">Minu's Assistant</span>
                <span className="chat-header-status">
                  <span className="chat-online-dot" aria-hidden="true" />
                  Online
                </span>
              </div>
            </div>
            <button
              className="chat-close-btn"
              onClick={handleClose}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message list */}
          <div className="chat-messages" role="log" aria-live="polite">
            {messages.map((msg) =>
              msg.role === "bot" ? (
                <div key={msg.id} className="chat-message chat-message--bot">
                  <div className="chat-bot-avatar" aria-hidden="true">
                    <Bot size={14} />
                  </div>
                  <div className="chat-bubble chat-bubble--bot">{msg.text}</div>
                </div>
              ) : (
                <div key={msg.id} className="chat-message chat-message--user">
                  <div className="chat-bubble chat-bubble--user">{msg.text}</div>
                  <div className="chat-user-avatar" aria-hidden="true">
                    <User size={14} />
                  </div>
                </div>
              )
            )}

            {/* Typing indicator */}
            {typing && (
              <div className="chat-message chat-message--bot" aria-label="Assistant is typing">
                <div className="chat-bot-avatar" aria-hidden="true">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble chat-bubble--bot chat-typing">
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick-reply chips */}
          <div className="chat-chips" role="group" aria-label="Quick questions">
            {CHIPS.map(({ label, icon: Icon, query }) => (
              <button
                key={label}
                className="chat-chip"
                onClick={() => send(query)}
                type="button"
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Type your message"
              autoComplete="off"
            />
            <button
              className="chat-send-btn"
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* ── Floating toggle button ────────────────────────────────────── */}
      <button
        className={`chat-fab${open ? " chat-fab--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
        {!open && <span className="chat-fab-sparkle" aria-hidden="true"><Sparkles size={12} /></span>}
      </button>
    </>
  );
}
