import { theme } from '../theme.js';

const Footer = () => {
  return (
    <footer style={{
      background: theme.text, color: "rgba(255,255,255,0.7)",
      textAlign: "center", padding: "2rem 1.5rem", fontSize: "0.8rem",
    }}>
      <span style={{
        fontFamily: "'Playfair Display', serif", fontStyle: "italic",
        fontSize: "1.4rem", color: theme.coralLight, display: "block", marginBottom: "0.5rem",
      }}>Sabun Atölyesi</span>
      <p>El yapımı & doğal sabunlar · <strong style={{ color: "rgba(255,255,255,0.95)" }}>Tüm hakları saklıdır © 2025</strong></p>
    </footer>
  );
};

export default Footer;

