"use client";

import React, { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";

/**
 * ============================================================================
 * CONFIGURATION
 * Replace these placeholder/demo values with your actual credentials and links.
 * ============================================================================
 */
export const CONTACT_CONFIG = {
  EMAIL: "collab@theaoren.com",
  INSTAGRAM_URL: "https://www.instagram.com/aoren001/",
  INSTAGRAM_HANDLE: "@aoren001",
  LINKEDIN_URL: "https://www.linkedin.com/in/aorèn-001s/",
  LINKEDIN_LABEL: "AORÈN",
  WHATSAPP_NUMBER: "8801407002630", // Country code + phone number (no +, spaces, or dashes)
  WHATSAPP_MESSAGE: "Hi AORÈN, I'd like to discuss an ad project with your company..",
  EMAILJS_SERVICE_ID: "service_nkxcfbe",
  EMAILJS_TEMPLATE_ID: "template_5lf8g1n",
  EMAILJS_PUBLIC_KEY: "GugZCWy5gQvq6Vfm-",
};

interface FormState {
  name: string;
  email: string;
  brand: string;
  message: string;
  _gotcha: string; // honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    brand: "",
    message: "",
    _gotcha: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [cooldown, setCooldown] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  // Check if EmailJS is still running on demo values
  const isDemoConfig =
    CONTACT_CONFIG.EMAILJS_SERVICE_ID === "service_demo" ||
    CONTACT_CONFIG.EMAILJS_TEMPLATE_ID === "template_demo" ||
    CONTACT_CONFIG.EMAILJS_PUBLIC_KEY === "public_key_demo" ||
    !CONTACT_CONFIG.EMAILJS_PUBLIC_KEY;

  // Handle 30s Cooldown Timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Load EmailJS SDK dynamically via CDN (@emailjs/browser) without bundling heavy packages
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!(window as unknown as { emailjs?: unknown }).emailjs) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // IntersectionObserver for subtle scroll fade-up reveal (respecting prefers-reduced-motion)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aoren-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = [leftColRef.current, rightColRef.current].filter(Boolean) as HTMLElement[];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Validation function
  const validateField = (name: string, value: string): string | undefined => {
    if (name === "name") {
      if (!value.trim()) return "Please enter your name.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }
    if (name === "email") {
      if (!value.trim()) return "Please enter your email.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
    }
    if (name === "message") {
      if (!value.trim()) return "Please enter a message about your project.";
      if (value.trim().length < 10) return "Please provide a little more detail (at least 10 characters).";
    }
    return undefined;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam honeypot check: silently drop bots
    if (formData._gotcha) {
      console.warn("[Spam Protection] Bot submission intercepted.");
      setStatus("success");
      setStatusMessage("Your message has been sent successfully.");
      return;
    }

    // Cooldown check
    if (cooldown > 0) {
      setStatus("error");
      setStatusMessage(`Please wait ${cooldown}s before sending another message.`);
      return;
    }

    // Full validation
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const msgErr = validateField("message", formData.message);

    const newErrors: FormErrors = {
      name: nameErr,
      email: emailErr,
      message: msgErr,
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, brand: true, message: true });

    if (nameErr || emailErr || msgErr) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields above.");
      return;
    }

    // If still in demo mode, do not send; show friendly notice & log console warning
    if (isDemoConfig) {
      console.warn(
        "%c[AORÈN Studio] EmailJS is not configured yet!%c\nPlease update CONTACT_CONFIG with your valid EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.",
        "color: #8BC9F7; font-weight: bold; font-size: 13px;",
        "color: #C8E9FF;"
      );
      setStatus("unconfigured");
      setStatusMessage("Form not connected yet. (EmailJS credentials are still using demo values).");
      return;
    }

    // Send through EmailJS
    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      type EmailJsWindow = {
        emailjs?: {
          send: (
            serviceId: string,
            templateId: string,
            templateParams: Record<string, string>,
            publicKey: string
          ) => Promise<{ status: number; text: string }>;
        };
      };

      const emailjs = (window as unknown as EmailJsWindow).emailjs;

      if (!emailjs) {
        throw new Error("EmailJS SDK failed to initialize. Please check your internet connection.");
      }

      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        brand: formData.brand.trim() || "Not specified",
        message: formData.message.trim(),
        reply_to: formData.email.trim(),
      };

      const response = await emailjs.send(
        CONTACT_CONFIG.EMAILJS_SERVICE_ID,
        CONTACT_CONFIG.EMAILJS_TEMPLATE_ID,
        templateParams,
        CONTACT_CONFIG.EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200 || response.text === "OK") {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent. We'll reply within 24 hours.");
        setFormData({ name: "", email: "", brand: "", message: "", _gotcha: "" });
        setErrors({});
        setTouched({});
        setCooldown(30); // 30-second cooldown
      } else {
        throw new Error(`Unexpected EmailJS status: ${response.status}`);
      }
    } catch (err: unknown) {
      console.error("[EmailJS Submission Error]:", err);
      setStatus("error");
      setStatusMessage("Unable to send your message right now. Please reach out to us directly via email.");
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    CONTACT_CONFIG.WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <style>{`
        /* Self-contained theme variables & motion rules */
        :root {
          --midnight: #030407;
          --navy: #050B2B;
          --deep-blue: #071F78;
          --blue: #0868DB;
          --sky: #8BC9F7;
          --ice: #C8E9FF;
        }

        #contact {
          background-color: var(--midnight);
          position: relative;
          overflow: hidden;
        }

        /* Subtle radial ambient glow */
        .aoren-contact-ambient-glow {
          position: absolute;
          width: 720px;
          height: 720px;
          right: -100px;
          bottom: -150px;
          background: radial-gradient(circle, rgba(7, 31, 120, 0.28) 0%, rgba(5, 11, 43, 0.12) 45%, rgba(3, 4, 7, 0) 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(40px);
        }

        /* Ambient subtle grain overlay */
        .aoren-contact-grain {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          pointer-events: none;
          background-image: radial-gradient(#C8E9FF 0.75px, transparent 0.75px);
          background-size: 16px 16px;
          z-index: 0;
        }

        /* Detail Glass Cards */
        .aoren-detail-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(139, 201, 247, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 16px;
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease, background 260ms ease;
        }
        .aoren-detail-card:hover {
          transform: translateY(-2px);
          border-color: rgba(139, 201, 247, 0.35);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 8px 30px -4px rgba(8, 104, 219, 0.22);
        }
        .aoren-detail-card:hover .aoren-card-icon {
          color: #C8E9FF;
          filter: drop-shadow(0 0 8px rgba(139, 201, 247, 0.7));
          transform: scale(1.04);
        }

        /* WhatsApp Button */
        .aoren-whatsapp-btn {
          background: linear-gradient(135deg, rgba(8, 104, 219, 0.95), rgba(139, 201, 247, 0.85));
          color: #030407;
          border: 1px solid rgba(200, 233, 255, 0.4);
          box-shadow: 0 4px 24px rgba(8, 104, 219, 0.35);
          transition: transform 240ms ease, box-shadow 240ms ease, filter 240ms ease;
        }
        .aoren-whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(8, 104, 219, 0.55);
          filter: brightness(1.06);
        }

        /* Form Glass Container */
        .aoren-form-glass {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(139, 201, 247, 0.12);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        /* Custom Inputs */
        .aoren-input-field {
          background: rgba(5, 11, 43, 0.45);
          border: 1px solid rgba(139, 201, 247, 0.14);
          border-radius: 12px;
          color: #C8E9FF;
          transition: border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }
        .aoren-input-field:focus {
          outline: none;
          background: rgba(7, 31, 120, 0.22);
          border-color: #8BC9F7;
          box-shadow: 0 0 0 3px rgba(8, 104, 219, 0.25), 0 0 20px rgba(139, 201, 247, 0.2);
        }
        .aoren-input-field::placeholder {
          color: rgba(200, 233, 255, 0.3);
        }
        .aoren-input-field.has-error {
          border-color: rgba(248, 113, 113, 0.8);
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }

        /* Submit Button */
        .aoren-submit-btn {
          background: linear-gradient(135deg, #0868DB 0%, #8BC9F7 100%);
          color: #030407;
          font-weight: 600;
          transition: transform 220ms ease, box-shadow 220ms ease, opacity 220ms ease, filter 220ms ease;
        }
        .aoren-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(8, 104, 219, 0.45);
          filter: brightness(1.06);
        }
        .aoren-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* Fade-up scroll transitions */
        .aoren-fade-init {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aoren-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .aoren-fade-init {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .aoren-detail-card:hover,
          .aoren-whatsapp-btn:hover,
          .aoren-submit-btn:hover:not(:disabled) {
            transform: none;
          }
        }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        aria-labelledby="contact-heading"
        className="w-full py-20 sm:py-28 lg:py-36"
      >
        {/* Ambient atmospheric layers */}
        <div className="aoren-contact-ambient-glow" aria-hidden="true" />
        <div className="aoren-contact-grain" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          {/* Section Header */}
          <div className="mb-14 text-center sm:mb-20">
            <p className="mb-3.5 inline-block text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8BC9F7]">
              CONTACT
            </p>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-normal tracking-tight text-[#C8E9FF] sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let’s create something unforgettable.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#C8E9FF]/65 sm:text-lg">
              Tell us about your brand and your vision. We’ll reply within 24 hours.
            </p>
          </div>

          {/* Two-Column Grid: Stacks on mobile (Form first), Side-by-side on desktop */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* RIGHT COLUMN: Contact Form (order-1 on mobile, order-2 on lg desktop) */}
            <div
              ref={rightColRef}
              className="aoren-fade-init order-1 lg:order-2 lg:col-span-7"
              style={{ transitionDelay: "120ms" }}
            >
              <div className="aoren-form-glass p-6 sm:p-8 md:p-10">
                <form onSubmit={handleSubmit} noValidate>
                  {/* Honeypot Spam Protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_gotcha">Leave this field empty</label>
                    <input
                      type="text"
                      id="_gotcha"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#C8E9FF]/80">
                        Name <span className="text-[#8BC9F7]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`aoren-input-field w-full px-4 py-3 text-sm placeholder-[#C8E9FF]/30 ${
                          errors.name ? "has-error" : ""
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-rose-300">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#C8E9FF]/80">
                        Email <span className="text-[#8BC9F7]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`aoren-input-field w-full px-4 py-3 text-sm placeholder-[#C8E9FF]/30 ${
                          errors.email ? "has-error" : ""
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-rose-300">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Brand/Company (Optional) */}
                  <div className="mt-6">
                    <label htmlFor="contact-brand" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#C8E9FF]/80">
                      Brand / Company <span className="text-xs normal-case text-[#C8E9FF]/40">(Optional)</span>
                    </label>
                    <input
                      id="contact-brand"
                      type="text"
                      name="brand"
                      placeholder="e.g. Acme Studio"
                      value={formData.brand}
                      onChange={handleChange}
                      className="aoren-input-field w-full px-4 py-3 text-sm placeholder-[#C8E9FF]/30"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mt-6">
                    <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#C8E9FF]/80">
                      Message <span className="text-[#8BC9F7]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`aoren-input-field w-full resize-y px-4 py-3 text-sm placeholder-[#C8E9FF]/30 ${
                        errors.message ? "has-error" : ""
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-300">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Accessible Live Region for Status & Feedback */}
                  <div aria-live="polite" className="mt-4">
                    {statusMessage && (
                      <div
                        className={`flex items-start gap-2.5 rounded-lg p-3 text-xs leading-relaxed ${
                          status === "success"
                            ? "border border-[#8BC9F7]/30 bg-[#0868DB]/15 text-[#C8E9FF]"
                            : status === "unconfigured"
                            ? "border border-amber-400/30 bg-amber-500/10 text-amber-200"
                            : "border border-rose-500/30 bg-rose-500/10 text-rose-200"
                        }`}
                      >
                        {status === "success" && (
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#8BC9F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {status === "unconfigured" && (
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {status === "error" && (
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        )}
                        <span>{statusMessage}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <ShinyButton
                      type="submit"
                      disabled={status === "sending" || cooldown > 0}
                      className="w-full text-sm font-semibold"
                      fillColor="#0868DB"
                      accentColor="#8BC9F7"
                      accentSoftColor="#C8E9FF"
                      labelColor="#030407"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {status === "sending" ? (
                          <>
                            <svg className="h-4 w-4 animate-spin text-[#030407]" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : cooldown > 0 ? (
                          <span>Sent (Cooldown {cooldown}s)</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg className="h-4 w-4 text-[#030407]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </span>
                    </ShinyButton>
                  </div>
                </form>
              </div>
            </div>

            {/* LEFT COLUMN: Contact Details & CTAs (order-2 on mobile, order-1 on lg desktop) */}
            <div
              ref={leftColRef}
              className="aoren-fade-init order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 1. Email Card */}
                <a
                  href={`mailto:${CONTACT_CONFIG.EMAIL}`}
                  className="aoren-detail-card group flex items-center gap-4 p-4 sm:p-5"
                >
                  <div className="aoren-card-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0868DB]/15 text-[#8BC9F7] transition duration-200">
                    {/* Mail SVG */}
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8BC9F7]/70">Email</p>
                    <p className="truncate text-sm font-medium text-[#C8E9FF] group-hover:text-white sm:text-base">
                      {CONTACT_CONFIG.EMAIL}
                    </p>
                  </div>
                  <svg className="h-4 w-4 shrink-0 text-[#8BC9F7]/40 transition group-hover:translate-x-0.5 group-hover:text-[#8BC9F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* 2. Instagram Card */}
                <a
                  href={CONTACT_CONFIG.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aoren-detail-card group flex items-center gap-4 p-4 sm:p-5"
                >
                  <div className="aoren-card-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0868DB]/15 text-[#8BC9F7] transition duration-200">
                    {/* Instagram SVG */}
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8BC9F7]/70">Instagram</p>
                    <p className="truncate text-sm font-medium text-[#C8E9FF] group-hover:text-white sm:text-base">
                      {CONTACT_CONFIG.INSTAGRAM_HANDLE}
                    </p>
                  </div>
                  <svg className="h-4 w-4 shrink-0 text-[#8BC9F7]/40 transition group-hover:translate-x-0.5 group-hover:text-[#8BC9F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* 3. LinkedIn Card */}
                <a
                  href={CONTACT_CONFIG.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aoren-detail-card group flex items-center gap-4 p-4 sm:p-5"
                >
                  <div className="aoren-card-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0868DB]/15 text-[#8BC9F7] transition duration-200">
                    {/* LinkedIn SVG */}
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8BC9F7]/70">LinkedIn</p>
                    <p className="truncate text-sm font-medium text-[#C8E9FF] group-hover:text-white sm:text-base">
                      {CONTACT_CONFIG.LINKEDIN_LABEL}
                    </p>
                  </div>
                  <svg className="h-4 w-4 shrink-0 text-[#8BC9F7]/40 transition group-hover:translate-x-0.5 group-hover:text-[#8BC9F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* 4. WhatsApp Direct CTA Button */}
              <div className="pt-2">
                <ShinyButton
                  href={whatsappUrl}
                  className="w-full text-sm font-semibold"
                  fillColor="#050B2B"
                  accentColor="#25D366"
                  accentSoftColor="#86efac"
                  labelColor="#ffffff"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="h-5 w-5 shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </span>
                </ShinyButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
