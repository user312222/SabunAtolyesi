import Reveal from '../components/Reveal';
import FloatingBubbles from '../components/FloatingBubbles';
import SectionIntro from '../components/SectionIntro';
import { links } from '../data/links';
import { theme } from '../theme';

const linksBubbleItems = [
  { w: 65, h: 65, top: "10%", left: "15%", delay: "0.3s" },
  { w: 40, h: 40, top: "60%", right: "10%", delay: "1.8s" },
  { w: 50, h: 50, bottom: "15%", left: "8%", delay: "2.2s" },
  { w: 75, h: 75, top: "40%", right: "22%", delay: "3.8s" },
  { w: 35, h: 35, bottom: "35%", right: "5%", delay: "0.9s" },
];

const orderLinks  = links.filter(l => l.type === "order");
const contactLinks = links.filter(l => l.type === "contact");

const LinkCard = ({ l }) => (
  <a
    href={l.href}
    target={l.external ? "_blank" : undefined}
    rel={l.external ? "noopener noreferrer" : undefined}
    aria-label={l.label}
    className="card card-hover"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1.2rem 1.4rem",
      textDecoration: "none",
    }}
  >
    <div style={{
      width: 52,
      height: 52,
      borderRadius: 16,
      flexShrink: 0,
      background: l.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
    }}>
      {l.icon}
    </div>
    <div style={{ flex: 1, textAlign: "left" }}>
      <p style={{ fontSize: "0.95rem", fontWeight: 700, color: theme.text, margin: 0 }}>
        {l.name}
      </p>
      <p style={{ fontSize: "0.8rem", color: theme.textMuted, margin: "0.1rem 0 0" }}>
        {l.handle}
      </p>
    </div>
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={theme.textMuted} strokeWidth="2.5" style={{ flexShrink: 0 }}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </a>
);

const GroupLabel = ({ children }) => (
  <p style={{
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: theme.coral,
    marginBottom: "0.75rem",
  }}>
    {children}
  </p>
);

const LinksSection = () => {
  return (
    <section id="links" className="section" style={{ background: theme.warmWhite }}>
      <FloatingBubbles items={linksBubbleItems} />
      <div className="z-content" style={{ maxWidth: 720, margin: "0 auto" }}>
        <SectionIntro
          eyebrow="✦ Sipariş & İletişim"
          title="Hemen ulaş, kolayca sipariş ver"
          description="Sorularınız için veya sipariş vermek için aşağıdaki kanalları kullanabilirsiniz."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
        }}>
          <Reveal>
            <GroupLabel>🛒 Sipariş Ver</GroupLabel>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {orderLinks.map(l => <LinkCard key={l.name} l={l} />)}
            </div>
          </Reveal>

          <Reveal style={{ animationDelay: "0.12s" }}>
            <GroupLabel>💬 İletişim</GroupLabel>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {contactLinks.map(l => <LinkCard key={l.name} l={l} />)}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #links .z-content > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LinksSection;
