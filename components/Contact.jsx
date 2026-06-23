"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    id: "email",
    icon: <FiMail size={18} />,
    label: "EMAIL",
    value: "pawankr7512@gmail.com",
    href: "mailto:pawankr7512@gmail.com",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.1)",
  },
  {
    id: "linkedin",
    icon: <FiLinkedin size={18} />,
    label: "LINKEDIN",
    value: "linkedin.com/in/pawan-kumar-822021383",
    href: "https://www.linkedin.com/in/pawan-kumar-822021383/",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.1)",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp size={18} />,
    label: "WHATS APP",
    value: "+91 9315571639",
    href: "https://wa.me/919315571639",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
  },
  {
    id: "github",
    icon: <FiGithub size={18} />,
    label: "GITHUB",
    value: "github.com/pawankr7512",
    href: "https://github.com/pawankr7512-del",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.1)",
  },
  {
    id: "phone",
    icon: <FiPhone size={18} />,
    label: "PHONE",
    value: "+91 9315571639",
    href: "tel:+919315571639",
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s Work <span className="accent">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s build something extraordinary together.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Form */}
          <div className={`glass-card reveal-left ${styles.formCard}`}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  FULL NAME
                </label>
                <div className={styles.inputWrap}>
                  <FiUser className={styles.inputIcon} size={15} />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name..."
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  EMAIL ADDRESS
                </label>
                <div className={styles.inputWrap}>
                  <FiMail className={styles.inputIcon} size={15} />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  MESSAGE
                </label>
                <div className={styles.inputWrap}>
                  <FiMessageSquare className={styles.textareaIcon} size={15} />
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                id="contact-submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <span className={styles.spinner} />
                ) : status === "sent" ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    Send Message <FiSend size={15} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`${styles.infoColumn} reveal-right`}>
            {contactInfo.map((info, i) => (
              <a
                key={info.id}
                href={info.href}
                target={info.id !== "phone" && info.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`glass-card ${styles.infoCard}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
                id={`contact-${info.id}-link`}
              >
                <span
                  className={styles.infoIcon}
                  style={{ background: info.bg, color: info.color }}
                >
                  {info.icon}
                </span>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{info.label}</span>
                  <span className={styles.infoValue}>{info.value}</span>
                </div>
                <span className={styles.infoArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
