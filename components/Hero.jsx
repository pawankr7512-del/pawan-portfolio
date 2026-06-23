"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { FiMail, FiGithub, FiArrowRight } from "react-icons/fi";

const TYPING_WORDS = [
  "AI Automation",
  "Full-Stack Dev",
  "Web Developer",
  "SEO Expert",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout;

    if (!deleting && charIndex <= word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 90);
    } else if (!deleting && charIndex > word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 50);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % TYPING_WORDS.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Background orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.availableBadge}>
            <span className={styles.availableDot} aria-hidden="true" />
            Available for Work
          </div>

          <h1 className={styles.heading}>
            Hi, I&apos;m
            <br />
            <span className={styles.name}>Pawan Kumar</span>
          </h1>

          <div className={styles.typewriter}>
            <span className={styles.typeText}>{displayText}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </div>

          <p className={styles.bio}>
            I craft high-performance web applications from frontend to backend
            — blending clean code with intuitive design to build experiences
            that leave a lasting impression.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>20+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>11+</span>
              <span className={styles.statLabel}>Months Exp.</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <button
              className={styles.ctaPrimary}
              onClick={() => scrollTo("#contact")}
              id="hero-connect-btn"
            >
              Let&apos;s Connect
              <FiArrowRight className={styles.ctaIcon} />
            </button>
            <a
              href="mailto:pawankr7512@gmail.com"
              className={styles.ctaSecondary}
              id="hero-email-btn"
            >
              <FiMail />
              pawankr7512@gmail.com
            </a>
            <a
              href="https://github.com/pawankr7512"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaIcon2}
              aria-label="GitHub"
              id="hero-github-btn"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="/pawan-resume.pdf"
              download="Pawan-Kumar-Resume.pdf"
              className={styles.ctaResume}
              id="hero-resume-btn"
            >
              ↗ Resume
            </a>
          </div>
        </div>

        {/* Right — Profile Card */}
        <div className={styles.profileWrapper}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrap}>
              <Image
                src="/pawan.jpg"
                alt="Pawan Kumar — Full-Stack Developer"
                width={400}
                height={500}
                className={styles.profileImage}
                priority
              />
              <div className={styles.profileOverlay} aria-hidden="true" />
            </div>

            {/* Name tag */}
            <div className={styles.profileNameTag}>
              <span className={styles.profileNameTagDot} />
              <div>
                <p className={styles.profileTagName}>Pawan Kumar</p>
                <p className={styles.profileTagRole}>Full-Stack Developer</p>
              </div>
              <span className={styles.profileAvailable}>
                <span className={styles.profileAvailDot} />
                Open to work
              </span>
            </div>

            {/* Floating Tags */}
            <div className={`${styles.floatTag} ${styles.floatTagAbout}`} aria-hidden="true">
              About ↗
            </div>
            <div className={`${styles.floatTag} ${styles.floatTagNode}`} aria-hidden="true">
              Node.js ↗
            </div>
            <div className={`${styles.floatTag} ${styles.floatTagAI}`} aria-hidden="true">
              DEEP AI
            </div>
          </div>

          {/* Glow ring */}
          <div className={styles.glowRing} aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
