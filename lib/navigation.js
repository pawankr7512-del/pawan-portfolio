export const navLinks = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Projects", href: "/projects", section: "projects", isPage: true },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export const HOME_SECTIONS = [
  "home",
  "about",
  "projects",
  "experience",
  "contact",
];

export function getActiveNavLabel(pathname) {
  if (pathname === "/projects") return "Projects";
  return null;
}

export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const offset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.replaceState(null, "", `#${sectionId}`);
  return true;
}

export function handleNavigation(link, { pathname, router, onNavigate }) {
  onNavigate?.(link.label);

  if (link.isPage) {
    router.push(link.href);
    return;
  }

  if (pathname === "/") {
    scrollToSection(link.section);
    return;
  }

  sessionStorage.setItem("scrollTo", link.section);
  router.push("/");
}
