export const projects = [

  // VELORA STUDIO WEB APP

  {
    title: "Velora Studio",
    tagline:
      "AI-powered SEO audits that uncover hidden issues and boost search rankings instantly",
    description:
      "An AI-powered SEO analysis platform that instantly audits any website, uncovers hidden issues, and boosts search rankings using SERP AI & Gemini AI.",
    highlights: [
      "Instant AI-powered SEO audits",
      "Powered by SERP AI & Gemini AI",
      "Core Web Vitals analysis",
      "Free tier — 5 analyses per day",
    ],
    tech: ["Next.js", "Gemini AI", "SERP API", "Tailwind", "Vercel"],
    link: "https://ai-saas-website-ebon.vercel.app/",
    image: "/velora-preview.jpg",
    accentColor: "#f97316",
    cardGradient:
      "linear-gradient(155deg, #2a1004 0%, #9a3412 42%, #ea580c 72%, #fdba74 100%)",
    category: "Web App",
    date: "Q5 2026",
  },


  // NAVURA WEB APP

  {
    title: "Navura",
    tagline:
      "An AI agency site showcasing intelligent automation — websites, chatbots, and agents that ship fast",
    description:
      "A modern AI agency website showcasing intelligent automation systems — AI websites, chatbots, and agents that help businesses build smarter and ship faster.",
    highlights: [
      "AI website & chatbot delivery in 2–6 weeks",
      "100+ projects delivered",
      "24/7 AI system uptime",
      "Custom AI agent integrations",
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel", "TypeScript"],
    link: "https://ai-agency-website-woad.vercel.app/",
    image: "/navura-preview.jpg",
    accentColor: "#8b5cf6",
    cardGradient:
      "linear-gradient(155deg, #1e0a3c 0%, #5b21b6 42%, #7c3aed 72%, #c4b5fd 100%)",
    category: "Web App",
    date: "Q4 2025",
  },

    // AERO DENT WEB APP

  {
    title: "AeroDent",
    tagline:
      "WhatsApp automation for cloud kitchens — instant order updates, zero missed leads, 24/7 support",
    description:
      "An AI-powered WhatsApp automation platform for cloud kitchens, caterers, and restaurants — instant order updates, 0% missed leads, and 24/7 support.",
    highlights: [
      "AI WhatsApp order automation",
      "100+ businesses automated",
      "Multi-language support",
      "2× faster response times",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "Vercel", "Javascript", "php"],
    link: "#",
    image: "/aerodent-preview.jpg",
    accentColor: "#124e66",
    cardGradient:
      "linear-gradient(155deg, #0c1445 0%, #124e66 42%, #748d92 72%, #a5b4fc 100%)",
    category: "Web App",
    date: "Q4 2026",
  },



// SHIFTKITCHEN WEB APP

  {
    title: "ShiftKitchen",
    tagline:
      "WhatsApp automation for cloud kitchens — instant order updates, zero missed leads, 24/7 support",
    description:
      "An AI-powered WhatsApp automation platform for cloud kitchens, caterers, and restaurants — instant order updates, 0% missed leads, and 24/7 support.",
    highlights: [
      "AI WhatsApp order automation",
      "100+ businesses automated",
      "Multi-language support",
      "2× faster response times",
    ],
    tech: ["Next.js", "WhatsApp API", "Tailwind", "Vercel", "Node.js"],
    link: "https://shiftkitchen-ai-git-main-pawanproject21.vercel.app/",
    image: "/shiftkitchen-preview.jpg",
    accentColor: "#6366f1",
    cardGradient:
      "linear-gradient(155deg, #0c1445 0%, #312e81 42%, #4f46e5 72%, #a5b4fc 100%)",
    category: "Web App",
    date: "Q3 2025",
  },

  // PORTFOLIO WEBSITE

  {
    title: "Portfolio",
    tagline:
      "A modern, responsive portfolio with smooth animations, dark theme, and optimized performance",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark theme, and optimized performance.",
    highlights: [
      "Built with Next.js and React",
      "Tailwind CSS for styling",
      "Smooth scroll animations",
      "Fully responsive design",
    ],
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    link: "https://pawan-portfolio-flax.vercel.app/",
    image: "/portfolio-website.jpg",
    accentColor: "#9165f7",
    cardGradient:
      "linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(15, 15, 26, 0.95) 55%, rgba(9, 9, 15, 1) 100%)",
    category: "Web App",
    date: "Q2 2026",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured !== false).slice(0, 3);
