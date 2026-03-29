import FadeSection from '../FadeSection';
import { portfolio } from '../../data/portfolio';
import './Contact.scss';

export function Contact() {
  const links = [
    { label: portfolio.email,  href: `mailto:${portfolio.email}`, primary: true },
    { label: portfolio.phone,  href: `tel:${portfolio.phone.replace(/\s/g, '')}` },
    { label: 'LinkedIn ↗',    href: portfolio.linkedin },
    { label: 'GitHub ↗',      href: portfolio.github },
  ];

  return (
    <section id="contact" className="contact">
      <FadeSection>
        <p className="contact__eyebrow">04 — Contact</p>
        <h2 className="contact__heading">
          Let's build something{' '}
          <span>great together.</span>
        </h2>
        <p className="contact__sub">
          Open to frontend, React, or full-stack opportunities.
          Whether it's a question or a role — reach out.
        </p>

        <div className="contact__links">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`contact__link${l.primary ? ' contact__link--primary' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="contact__location">
          Based in Nellore, Andhra Pradesh · India · Open to remote
        </p>
      </FadeSection>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Prem Sai</span>
      <span className="footer__mid">React · TypeScript · TCS</span>
      <span>Nellore, India</span>
    </footer>
  );
}
