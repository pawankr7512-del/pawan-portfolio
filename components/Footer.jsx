"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  navLinks,
  getActiveNavLabel,
  HOME_SECTIONS,
  handleNavigation,
} from "@/lib/navigation";

const socials = [
  { icon: <FiMail size={16} />, href: "mailto:pawankr7512@gmail.com", label: "Email" },
  {
    icon: <FiLinkedin size={16} />,
    href: "https://linkedin.com/in/pawan-kumar-822021383",
    label: "LinkedIn",
  },
  { icon: <FiGithub size={16} />, href: "https://github.com/pawankr7512-del", label: "GitHub" },
  { icon: <FaWhatsapp size={16} />, href: "https://wa.me/919315571639", label: "WhatsApp" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const pageActive = getActiveNavLabel(pathname);
    if (pageActive) setActive(pageActive);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = HOME_SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible[0]) return;

        const match = navLinks.find(
          (link) => link.section === visible[0].target.id
        );
        if (match) setActive(match.label);
      },
      { threshold: [0.2, 0.45], rootMargin: "-15% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const onNavClick = (e, link) => {
    e.preventDefault();
    handleNavigation(link, { pathname, router });
    setActive(link.label);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.logo}
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(navLinks[0], { pathname, router });
            setActive("Home");
          }}
        >
          <Image
            src="/logo.jpg"
            alt="PK Developer Logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Pawan Kumar</span>
            <span className={styles.logoDev}>DEVELOPER</span>
          </div>
        </Link>

        <nav className={styles.nav} aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${active === link.label ? styles.navLinkActive : ""}`}
              onClick={(e) => onNavClick(e, link)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2026 Pawan Kumar. All Rights Reserved.</p>
        <p className={styles.built}>Built with Next.js & ♥</p>
      </div>
    </footer>
  );
}
