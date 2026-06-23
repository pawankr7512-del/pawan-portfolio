"use client";

import styles from "./Ticker.module.css";

const items = [
  "Web Development",
  "SEO Optimized",
  "AI Automation",
  "Mobile Responsiveness",
  "UI/UX Design",
  "Full Stack",
];

function TickerRow({ suffix = "" }) {
  return (
    <>
      {items.map((item) => (
        <span key={`${item}${suffix}`} className={styles.item}>
          <span className={styles.dot} aria-hidden="true">
            +
          </span>
          {item}
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-label="Skills ticker">
      <div className={styles.track}>
        <div className={styles.trackGroup}>
          <TickerRow suffix="-a" />
        </div>
        <div className={styles.trackGroup} aria-hidden="true">
          <TickerRow suffix="-b" />
        </div>
      </div>
    </div>
  );
}
