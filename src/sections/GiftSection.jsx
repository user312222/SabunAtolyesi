import { giftPills } from '../data/giftPills';
import SectionIntro from '../components/SectionIntro';
import FloatingBubbles from '../components/FloatingBubbles';
import Reveal from '../components/Reveal';

const giftBubbleItems = [
  { w: 80, h: 80, top: "20%", right: "10%", delay: "1s" },
  { w: 45, h: 45, top: "45%", left: "15%", delay: "2.5s" },
  { w: 60, h: 60, bottom: "30%", right: "25%", delay: "0.8s" },
  { w: 30, h: 30, top: "75%", right: "5%", delay: "3s" },
  { w: 55, h: 55, top: "35%", left: "5%", delay: "4.5s" },
  { w: 25, h: 25, bottom: "10%", left: "30%", delay: "2s" },
  { w: 40, h: 40, top: "80%", right: "20%", delay: "1.2s" },
];

const GiftSection = () => {
  return (
    <section id="gift" className="section" style={{
      background: "linear-gradient(135deg, #FDF0EC 0%, #F5E6FF 100%)",
      overflow: "hidden",
    }}>
      <FloatingBubbles items={giftBubbleItems} />
      <Reveal className="z-content section-center">
        <p style={{
          display: "inline-block",
          background: "rgba(155,126,200,0.15)", 
          color: "#9B7EC8",
          fontSize: "0.75rem", 
          fontWeight: 700, 
          letterSpacing: "0.08em", 
          textTransform: "uppercase",
          padding: "5px 14px", 
          borderRadius: 50, 
          marginBottom: "1rem",
        }}>
          ✦ Dekor &amp; Hediye
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", 
          fontSize: "clamp(1.5rem,5vw,2.1rem)", 
          fontWeight: 700, 
          color: "#3D2B1F", 
          lineHeight: 1.2, 
          marginBottom: "0.6rem" 
        }}>
          Sadece sabun değil.. <em style={{ fontStyle: "italic", color: "#E8735A" }}>dekor</em> ✨
        </h2>
        <p style={{ 
          fontSize: "0.95rem", 
          color: "#8A6C60", 
          lineHeight: 1.6, 
          marginBottom: "1.5rem" 
        }}>
          İster kullan istersen dekor sergile, sevdiklerine hediye et.
        </p>

        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "0.8rem", 
          flexWrap: "wrap", 
          marginBottom: "1.5rem" 
        }}>
          {giftPills.map(p => (
            <div key={p.label} className="gift-pill card" style={{
              display: "flex", 
              alignItems: "center", 
              gap: 8,
              padding: "1rem 1.5rem",
              borderRadius: "20px",
              minHeight: "48px",
            }}>
              <span style={{ fontSize: "1.1rem", minWidth: "28px" }}>{p.emoji}</span> 
              <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>{p.label}</span>
            </div>
          ))}
        </div>

        <a href="https://shopier.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Hediye Setlerini Gör
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
};

export default GiftSection;

