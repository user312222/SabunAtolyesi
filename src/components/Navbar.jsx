import { useState, useEffect } from 'react';
import { theme } from '../theme.js';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 1.5rem",
      background: scrolled ? "rgba(255,252,248,0.92)" : "rgba(255,252,248,0.70)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      borderBottom: `1px solid rgba(232,115,90,${scrolled ? "0.15" : "0.06"})`,
      transition: "all 0.3s ease",
      animation: "navIn 0.5s ease both",
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700,
        color: theme.coral, letterSpacing: "-0.02em",
      }}>
        Sabun <span style={{ color: theme.text }}>Atölyesi</span>
      </div>
      <ul className="nav-links" style={{
        display: "flex", gap: "1.5rem", listStyle: "none", padding: 0,
      }}>
        {[["#process", "Nasıl Yapılır?"], ["#story", "Hakkımızda"], ["#links", "İletişim"]].map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{
              fontSize: "0.85rem", fontWeight: 600, color: theme.textMuted,
              textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = theme.coral}
              onMouseLeave={e => e.target.style.color = theme.textMuted}
            >{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

