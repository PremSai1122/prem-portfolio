import { useState } from 'react';
import './Navbar.scss';

const NAV_LINKS = ['about', 'projects', 'experience', 'contact'];

export default function Navbar({ scrolled, active }) {
  const [open, setOpen] = useState(false);

  const handleLink = () => setOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="navbar__logo">
          prem<span>.dev</span>
        </a>

        {/* Desktop */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={active === link ? 'active' : ''}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile backdrop */}
      <div
        className={`navbar__backdrop${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`navbar__drawer${open ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link}`}
            className={active === link ? 'active' : ''}
            onClick={handleLink}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
