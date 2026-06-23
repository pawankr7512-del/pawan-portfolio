"use client";

import styles from "./TechStack.module.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGitAlt,
  FaPython, FaJava, FaFigma, FaDocker,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiFramer, SiShadcnui, SiExpress, SiMongodb, SiPostgresql,
  SiMysql, SiGithub, SiVercel, SiPostman, SiFirebase, SiNpm,
} from "react-icons/si";

const techGroups = [
  [
    { name: "HTML", icon: <FaHtml5 color="#e34f26" />, },
    { name: "CSS", icon: <FaCss3Alt color="#2965f1" />, },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" />, },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" />, },
    { name: "React", icon: <FaReact color="#61dafb" />, },
    { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, },
  ],
  [
    { name: "PHP", icon: <FaPhp color="#8892bf" />, },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" />, },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" />, },
    { name: "Framer Motion", icon: <SiFramer color="#bb4bef" />, },
    { name: "shadcn/ui", icon: <SiShadcnui color="#ffffff" />, },
    { name: "Node.js", icon: <FaNodeJs color="#8cc84b" />, },
  ],
  [
    { name: "Express.js", icon: <SiExpress color="#ffffff" />, },
    { name: "MongoDB", icon: <SiMongodb color="#47a248" />, },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, },
    { name: "SQL", icon: <SiMysql color="#00758f" />, },
    { name: "GitHub", icon: <SiGithub color="#ffffff" />, },
    { name: "Vercel", icon: <SiVercel color="#ffffff" />, },
  ],
  [
    { name: "Postman", icon: <SiPostman color="#ff6c37" />, },
    { name: "Java", icon: <FaJava color="#f89820" />, },
    { name: "NPM", icon: <SiNpm color="#cb3837" />, },
    { name: "Figma", icon: <FaFigma color="#f24e1e" />, },
    { name: "Firebase", icon: <SiFirebase color="#ffca28" />, },
    { name: "Python", icon: <FaPython color="#3572a5" />, },
  ],
];

export default function TechStack() {
  return (
    <section id="skills" className={styles.techStack}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My Tech <span className="accent">Stack</span>
          </h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </div>

        <div className={styles.grid}>
          {techGroups.flat().map((tech, i) => (
            <div
              key={tech.name}
              className={`glass-card reveal ${styles.techCard}`}
              style={{ transitionDelay: `${(i % 6) * 0.06}s` }}
              title={tech.name}
            >
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
