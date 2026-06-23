"use client";

import styles from "./About.module.css";
import { FiCode, FiZap, FiTrendingUp } from "react-icons/fi";

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB",
];

const stats = [
  { icon: <FiCode size={20} />, num: "20+", label: "Projects Completed" },
  { icon: <FiZap size={20} />, num: "25+", label: "Technologies Mastered" },
  { icon: <FiTrendingUp size={20} />, num: "11+", label: "Months Experience" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Who I <span className="accent">Am</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Bio Card */}
          <div className={`glass-card reveal-left ${styles.bioCard}`}>
            <div className={styles.bioAccent} aria-hidden="true" />
            <p className={styles.bioText}>
             Full Stack Developer with experience in building responsive websites, managing frontend and backend tasks, and improving website performance through SEO and workflow automation. Skilled in MERN stack, with experience in live projects, user-friendly interfaces, and AI-based processes that support business growth.
            </p>
            <p className={styles.bioText}>
              I&apos;m always eager to learn new technologies and build meaningful
              digital products. When I&apos;m not immersed in development work, I
              explore new ideas and stay curious about innovation. I believe in
              waking up each day eager to make a difference.
            </p>

            {/* Skill tags */}
            <div className={styles.skillTags}>
              {skills.map((s) => (
                <span key={s} className="tag tag-neutral">{s}</span>
              ))}
            </div>
          </div>

          {/* Stats Column */}
          <div className={styles.statsColumn}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`glass-card reveal ${styles.statCard}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className={styles.statIcon}>{stat.icon}</span>
                <div className={styles.statInfo}>
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
