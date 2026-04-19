import Reveal from '../components/Reveal';
import FloatingBubbles from '../components/FloatingBubbles';
import { links } from '../data/links';
import { theme } from '../theme';

const linksBubbleItems = [
  { w: 65, h: 65, top: "10%", left: "15%", delay: "0.3s" },
  { w: 40, h: 40, top: "60%", right: "10%", delay: "1.8s" },
  { w: 50, h: 50, bottom: "15%", left: "8%", delay: "2.2s" },
  { w: 75, h: 75, top: "40%", right: "22%", delay: "3.8s" },
  { w: 35, h: 35, bottom: "35%", right: "5%", delay: "0.9s" },
  { w: 55, h: 55, top: "80%", left: "10%", delay: "2.5s" },
];

const LinksSection = () => {
  return (
    <section id="links" className="section">
      <FloatingBubbles items={linksBubbleItems} />
      <div className="z-content">
        <Reveal style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ 
            fontSize: "0.72rem", 
            fontWeight: 700, 
            letterSpacing: "0.12em", 
            textTransform: "uppercase", 
            color: theme.coral, 
            marginBottom: "0.5rem" 
          }}>
            Bize Ulaşın
          </p>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "clamp(1.5rem,5vw,2.1rem)", 
            fontWeight: 700, 
            color: theme.text, 
            marginBottom: "0.6rem" 
          }}>
            Sipariş &amp; İletişim
          </h2>
          <p style={{ 
            fontSize: "0.95rem", 
            color: theme.textMuted, 
            lineHeight: 1.6 
          }}>
            Satın almak veya sormak için aşağıdaki kanalları kullanın.
          </p>
        </Reveal>

        <Reveal>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            {links.map(l => (
              <a 
                key={l.name} 
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                aria-label={l.label}
                className="link-card card-hover"
                style={{
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1rem",
                  textDecoration: "none",
                }}
              >
                <div style={{
                  width: 44, 
                  height: 44, 
                  borderRadius: 14, 
                  flexShrink: 0,
                  background: l.iconBg, 
                  display: "flex", 
                  alignItems: "center",
                  justifyContent: "center", 
                  fontSize: "1.3rem",
                }}>
                  {l.icon}
                </div>
                <div style={{ textAlign: "left", flex: 1 }}>
                  <p style={{ fontSize: "0.9rem", fontWeight: 700, color: theme.text, margin: 0 }}>
                    {l.name}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: theme.textMuted, margin: 0 }}>
                    {l.handle}
                  </p>
                </div>
                <span style={{ fontSize: "1rem", color: theme.textMuted }}>→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LinksSection;

