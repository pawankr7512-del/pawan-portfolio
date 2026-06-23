"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiOpenai,
  SiWhatsapp,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";
import { useEffect } from "react";
import { projects } from "@/data/projects";

const TECH_ICONS = {
  "Next.js": <SiNextdotjs size={12} />,
  Tailwind: <SiTailwindcss size={12} />,
  Vercel: <SiVercel size={12} />,
  "Gemini AI": <SiOpenai size={12} />,
  "SERP API": null,
  "WhatsApp API": <SiWhatsapp size={12} />,
  "Node.js": <SiNodedotjs size={12} />,
  React: <SiReact size={12} />,
  TypeScript: <SiTypescript size={12} />,
  "Framer Motion": null,
};

export default function ProjectsPage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.projectsPage}>
      <Navbar />

      <section className={styles.header}>
        <div className="container">
          <div className={`reveal ${styles.headerContent}`}>
            <span className={styles.eyebrow}>All Projects</span>
            <h1 className={styles.title}>
              Curated <span className={styles.accent}>work</span>
            </h1>
            <p className={styles.subtitle}>
              A collection of my work spanning AI automation, web development,
              and full-stack applications.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.list}>
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`reveal ${styles.project}`}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <div className={styles.projectMeta}>
                  <span className={styles.metaText}>
                    {String(index + 1).padStart(2, "0")} —— {project.category}
                  </span>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>

                <h2 className={styles.projectTitle}>{project.title}</h2>

                <a
                  href={project.link}
                  className={styles.previewCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: project.cardGradient }}
                >
                  <h3 className={styles.cardHeading}>{project.tagline}</h3>

                  <div className={styles.previewFrame}>
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={1200}
                      height={720}
                      className={styles.previewImage}
                    />
                  </div>
                </a>

                <div className={styles.techGrid}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {TECH_ICONS[tech]}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.details}>
                  <p className={styles.detailDesc}>{project.description}</p>
                  <ul className={styles.featureList}>
                    {project.highlights.map((item) => (
                      <li key={item} className={styles.featureItem}>
                        <span
                          className={styles.featureIcon}
                          style={{ color: project.accentColor }}
                        >
                          ✦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={styles.ctaSection}>
        <div className="container">
          <div className={`glass-card reveal ${styles.ctaCard}`}>
            <h2 className={styles.ctaTitle}>Want to see more?</h2>
            <p className={styles.ctaText}>
              Check out my GitHub repository for more projects and source code.
            </p>
            <a
              href="https://github.com/pawankr7512"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FiExternalLink size={16} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
