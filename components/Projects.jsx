"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import { FiArrowUpRight } from "react-icons/fi";
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
import { featuredProjects } from "@/data/projects";

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

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const nodes = projectRefs.current.filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const index = Number(visible[0].target.dataset.index);
          if (!Number.isNaN(index)) setActiveIndex(index);
        }
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-20% 0px -35% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <span className={styles.eyebrow}>Case Studies</span>
          <h2 className={styles.title}>
            Curated <span className={styles.titleAccent}>work</span>
          </h2>
        </div>

        <div className={styles.showcase}>
          <div className={styles.projectsColumn}>
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                data-index={index}
                className={`reveal ${styles.project} ${
                  index === activeIndex ? styles.projectActive : ""
                }`}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <div className={styles.projectMeta}>
                  <span className={styles.metaText}>
                    {String(index + 1).padStart(2, "0")} —— {project.category}
                  </span>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>

                <a
                  href={project.link}
                  className={styles.previewCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: project.cardGradient }}
                  id={`project-${project.title.toLowerCase().replace(/\s/g, "-")}-link`}
                >
                  <h4 className={styles.cardHeading}>{project.tagline}</h4>

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

                <div className={styles.mobileDetails}>
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

          <aside className={styles.detailPanel} aria-live="polite">
            <div className={styles.detailInner}>
              <span
                className={styles.detailAccent}
                style={{ background: activeProject.accentColor }}
              />
              <h3 className={styles.detailTitle}>{activeProject.title}</h3>
              <p className={styles.detailDesc}>{activeProject.description}</p>
              <ul className={styles.featureList}>
                {activeProject.highlights.map((item) => (
                  <li key={item} className={styles.featureItem}>
                    <span
                      className={styles.featureIcon}
                      style={{ color: activeProject.accentColor }}
                    >
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={activeProject.link}
                className={styles.detailLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: activeProject.accentColor }}
              >
                View project <FiArrowUpRight size={15} />
              </a>
            </div>
          </aside>
        </div>

        <div className={`reveal ${styles.viewMore}`}>
          <a href="/projects" className={styles.viewMoreBtn} id="view-more-projects-btn">
            See more projects <FiArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
