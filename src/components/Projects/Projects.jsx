import { useState } from "react";
import FadeSection from "../FadeSection";
import SectionHeader from "../SectionHeader";
import { portfolio } from "../../data/portfolio";
import "./Projects.scss";

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects">
      <FadeSection>
        <SectionHeader eyebrow="02 — Projects" title="Enterprise Work" />

        <div className="projects__list">
          {portfolio.projects.map((p, i) => (
            <FadeSection key={p.num} delay={i * 0.1}>
              <div
                className={`projects__card projects__card--${p.colorVar}`}
                style={{
                  borderColor: hovered === p.num ? "#252545" : undefined,
                  transform: hovered === p.num ? "translateX(6px)" : undefined,
                }}
                onMouseEnter={() => setHovered(p.num)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="projects__card-body">
                  <p className="projects__client" style={{ color: p.colorHex }}>
                    Client: {p.client}
                  </p>
                  <h3 className="projects__name">{p.name}</h3>
                  <p className="projects__period">{p.period}</p>
                  <p className="projects__desc">{p.desc}</p>

                  <ul className="projects__points">
                    {p.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>

                  <div className="projects__tech">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: `${p.colorHex}12`,
                          border: `1px solid ${p.colorHex}30`,
                          color: p.colorHex,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="projects__card-num"
                  style={{
                    color: hovered === p.num ? `${p.colorHex}20` : undefined,
                  }}
                >
                  {p.num}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </FadeSection>
    </section>
  );
}
