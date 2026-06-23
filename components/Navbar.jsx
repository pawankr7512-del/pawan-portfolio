"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import {
  navLinks,
  getActiveNavLabel,
  HOME_SECTIONS,
  handleNavigation,
} from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const pageActive = getActiveNavLabel(pathname);
    if (pageActive) setActive(pageActive);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      { threshold: [0.25, 0.5], rootMargin: "-25% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const onNavigate = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  const onNavClick = (e, link) => {
    e.preventDefault();
    handleNavigation(link, { pathname, router, onNavigate });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.logo}
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(navLinks[0], { pathname, router, onNavigate });
          }}
        >
          <Image
            src="/logo.jpg"
            alt="PK Developer Logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Pawan Kumar</span>
            <span className={styles.logoDev}>DEVELOPER</span>
          </div>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
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

        <Link
          href="/#contact"
          className={styles.cta}
          aria-label="Book a Call"
          onClick={(e) =>
            onNavClick(e, navLinks.find((link) => link.label === "Contact"))
          }
        >
          <span className={styles.ctaDot} aria-hidden="true" />
          Book a Call
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${styles.mobileNavLink} ${active === link.label ? styles.navLinkActive : ""}`}
            onClick={(e) => onNavClick(e, link)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className={styles.mobileCta}
          onClick={(e) =>
            onNavClick(e, navLinks.find((link) => link.label === "Contact"))
          }
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
