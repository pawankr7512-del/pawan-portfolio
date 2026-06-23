import "./globals.css";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata = {
  title: "Pawan Kumar — Full-Stack Developer & AI Automation",
  description:
    "Pawan Kumar is a proactive full-stack developer passionate about creating dynamic web experiences. Expert in React, Next.js, Node.js, and SEO.",
  keywords: [
    "Pawan Kumar",
    "Full Stack Developer",
    "AI Automation",
    "React Developer",
    "Next.js",
    "Web Development",
    "SEO",
  ],
  authors: [{ name: "Pawan Kumar" }],
  openGraph: {
    title: "Pawan Kumar — Full-Stack Developer & AI Automation",
    description:
      "Crafting high-performance web applications from frontend to backend.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
