"use client";

import styles from "./Experience.module.css";

const experiences = [
  {
    id: "01",
    type: "SEO",
    title: "Search Engine Optimisation Intern",
    company: "Glee Impex Pvt Ltd",
    duration: "3 Months",
    period: "March 2026 – June 2026",
    location: "Noida",
    bullets: [
       "Improved organic search traffic by optimising content",
      "Executed comprehensive meta tags and schema markups",
      "Built quality backlink profiles through outreach",
      "Delivered measurable SEO performance improvements",
    ],
    tags: ["On-page SEO", "Off-page SEO", "Technical SEO", "Keyword Research", "Google Analytics"],
    color: "#8b5cf6",
  },
  {
    id: "02",
    type: "Web Development",
    title: "Front-End Developer Intern",
    company: "Connective9 Media Labs Pvt Ltd",
    duration: "5 Months",
    period: "April 2025 – August 2025",
    location: "Gurugaon",
    bullets: [
        "Built pixel-perfect responsive UIs from Figma designs",
      "Solved complex frontend performance bottlenecks",
      "Collaborated in agile sprints with senior developers",
      "Gained hands-on real-world development experience",
    ],
    tags: ["React", "JavaScript", "MongoDB", "Git", "Bootstrap"],
    color: "#f97316",
  },
  {
    id: "03",
    type: "Operations",
    title: "NCMC Promoter",
    company: "CSC E-Governce Pvt Ltd",
    duration: "3 Months",
    period: "2024",
    location: "India",
    bullets: [
      "Promoted NCMC services to citizens effectively",
      "Coordinated with government bodies and citizens",
      "Enhanced operational efficiency and service delivery",
      "Built strong interpersonal communication skills",
    ],
    tags: ["Customer Action", "Community Engagement", "Operations Coordination", "Public Outreach"],
    color: "#22c55e",
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Journey</span>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {/* Vertical line */}
          <div className={styles.timelineTrack} aria-hidden="true" />

          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`reveal ${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Node dot */}
              <div
                className={styles.timelineDot}
                style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}44` }}
                aria-hidden="true"
              >
                <span style={{ background: exp.color }} />
              </div>

              {/* Card */}
              <div className={`glass-card ${styles.expCard}`}>
                <div className={styles.expCardTop}>
                  <span className={styles.expBadge}>{exp.type}</span>
                  <span className={styles.expId}>{exp.id}</span>
                </div>

                <h3 className={styles.expTitle}>{exp.title}</h3>
                <p className={styles.expCompany} style={{ color: exp.color }}>
                  {exp.company}
                </p>

                <div className={styles.expMeta}>
                  <span>⏱ {exp.duration}</span>
                  <span>{exp.period}</span>
                  <span>📍 {exp.location}</span>
                </div>

                <ul className={styles.expBullets}>
                  {exp.bullets.map((b) => (
                    <li key={b} className={styles.expBullet}>
                      <span className={styles.bulletDot} style={{ background: exp.color }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className={styles.expTags}>
                  {exp.tags.map((t) => (
                    <span key={t} className="tag tag-neutral">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
