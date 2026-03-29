import FadeSection from "../FadeSection";
import SectionHeader from "../SectionHeader";
import { portfolio } from "../../data/portfolio";
import "./Experience.scss";

export default function Experience() {
  const { experience: exp } = portfolio;

  return (
    <section id="experience" className="experience">
      <FadeSection>
        <SectionHeader eyebrow="03 — Experience" title="Where I've Worked" />

        <div className="experience__card">
          <div className="experience__header">
            <div>
              <div className="experience__company">
                Tata <span>Consultancy</span> Services
              </div>
              <div className="experience__role">{exp.role}</div>
            </div>
            <div className="experience__meta">
              <span className="experience__duration">{exp.duration}</span>
              <span className="experience__period">
                {exp.period} · {exp.location}
              </span>
            </div>
          </div>

          <ul className="experience__bullets">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </FadeSection>
    </section>
  );
}
