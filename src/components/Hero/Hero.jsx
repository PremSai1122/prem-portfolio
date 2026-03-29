import { useState, useEffect } from "react";
import { useInView, useCounter } from "../../hooks";
import { portfolio } from "../../data/portfolio";
import "./Hero.scss";

function StatItem({ num, suffix, label }) {
  const [ref, visible] = useInView(0.3);
  const val = useCounter(num, visible);
  return (
    <div ref={ref}>
      <div className="hero__stat-num">
        {val}
        <span>{suffix}</span>
      </div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__inner">
        {/* Left: content */}
        <div
          className="hero__content"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s ease" }}
        >
          <div className="hero__status">
            <span className="hero__pulse" />
            Open to opportunities
          </div>

          <h1 className="hero__name">{portfolio.name}</h1>
          <h1 className="hero__name-outline">Frontend Dev</h1>

          <p className="hero__subtitle">React · TypeScript · Enterprise UI</p>
          <p className="hero__desc">{portfolio.summary}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href={`mailto:${portfolio.email}`} className="btn btn--ghost">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: stats card */}
        <div
          className="hero__card-wrap"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.4s 0.2s ease",
          }}
        >
          <div className="hero__stats-card">
            <div className="hero__stats-grid">
              {portfolio.stats.map((s) => (
                <StatItem
                  key={s.label}
                  num={s.num}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
            <div className="hero__stack">
              <div className="hero__stack-label">Core Stack</div>
              <div className="hero__stack-pills">
                {portfolio.coreStack.map((t) => (
                  <span key={t} className="hero__stack-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
