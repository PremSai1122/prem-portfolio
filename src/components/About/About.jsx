import { useState } from "react";
import FadeSection from "../FadeSection";
import SectionHeader from "../SectionHeader";
import { portfolio } from "../../data/portfolio";
import "./About.scss";

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" className="about">
      <FadeSection>
        <SectionHeader eyebrow="01 — About" title="Who I Am" />

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio">
            <p>
              I'm <strong>Prem Sai</strong>, a Frontend Developer based in{" "}
              {portfolio.location}. I specialize in building scalable React +
              TypeScript applications for enterprise environments.
            </p>
            <p>
              Over 4 years at <strong>Tata Consultancy Services (TCS)</strong>,
              I've shipped high-impact products for Merck KGaA, EY, and UIDAI —
              across pharma, consulting, and government sectors.
            </p>
            <p>
              I'm comfortable with complex state management, REST integrations,
              and Agile delivery. I care about writing code that is readable,
              testable, and built to last.
            </p>

            <div className="about__cert">
              <span className="about__cert-label">🎖 Certification</span>
              <p>
                Adobe Design Thinking Workshop — completed at Merck KGaA client
                site. Bridges engineering with user-centered product thinking.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="about__skills">
            {portfolio.skills.map((group) => (
              <div key={group.group} className="about__skill-group">
                <div className="about__skill-label">{group.group}</div>
                <div className="about__chips">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="about__chip"
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>
    </section>
  );
}
