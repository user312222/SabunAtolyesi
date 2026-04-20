import { giftPills } from '../data/giftPills';
import FloatingBubbles from '../components/FloatingBubbles';
import Reveal from '../components/Reveal';
import { theme } from '../theme.js';

const giftBubbleItems = [
  { w: 70, h: 70, top: "15%", right: "5%", delay: "1s" },
  { w: 40, h: 40, top: "60%", left: "3%", delay: "2.5s" },
  { w: 50, h: 50, bottom: "20%", right: "18%", delay: "0.8s" },
  { w: 28, h: 28, top: "80%", right: "8%", delay: "3s" },
  { w: 55, h: 55, top: "30%", left: "2%", delay: "4.5s" },
];

const slideImages = [
  "/assets/slidePic/slide0.jpg",
  "/assets/slidePic/slide2.jpeg",
  "/assets/slidePic/slide4.jpeg",
  "/assets/slidePic/slide7.jpeg",
  "/assets/slidePic/slide9.jpeg",
];

const GiftSection = () => {
  return (
    <section id="gift" className="section" style={{
      background: `linear-gradient(135deg, ${theme.coralPale} 0%, ${theme.purplePale} 100%)`,
      overflow: "hidden",
    }}>
      <FloatingBubbles items={giftBubbleItems} />

      <div className="z-content" style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "center",
      }}>

        {/* Sol: Metin */}
        <Reveal>
          <p style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: theme.coral,
            marginBottom: "0.6rem",
          }}>
            ✦ Hediye Setleri
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: theme.text,
            marginBottom: "0.8rem",
          }}>
            Sevdiklerine <em style={{ fontStyle: "italic", color: theme.coral }}>özel</em> bir<br />sürpriz yap ✨
          </h2>
          <p style={{
            fontSize: "0.95rem",
            color: theme.textMuted,
            lineHeight: 1.65,
            marginBottom: "2rem",
            maxWidth: 380,
          }}>
            El yapımı sabunlarımız; zarif ambalajıyla hediye kutusunda teslim edilir. Her biri bir kadının emeği ve tutkusuyla üretilmiştir.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}>
            {giftPills.map((p, i) => (
              <div key={p.label} className="card" style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.65rem",
                padding: "1rem 1.1rem",
              }}>
                <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>{p.emoji}</span>
                <div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: theme.text,
                    marginBottom: "0.2rem",
                  }}>
                    {p.label}
                  </div>
                  <div style={{
                    fontSize: "0.78rem",
                    color: theme.textMuted,
                    lineHeight: 1.45,
                  }}>
                    {p.desc}
                  </div>
                </div>
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

        {/* Sağ: Resim kolajı */}
        <Reveal style={{ animationDelay: "0.15s" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "220px 150px",
            gap: "10px",
          }}>
            {/* Büyük resim — sol üst, 2 satır kaplıyor */}
            <div style={{
              gridRow: "1 / 3",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
            }}>
              <img
                src={slideImages[0]}
                alt="Hediye set"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Sağ üst */}
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}>
              <img
                src={slideImages[1]}
                alt="Hediye set"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Sağ alt — 2 küçük yan yana */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}>
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
              }}>
                <img
                  src={slideImages[2]}
                  alt="Hediye set"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
              }}>
                <img
                  src={slideImages[3]}
                  alt="Hediye set"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Mobil için tek sütun */}
      <style>{`
        @media (max-width: 768px) {
          #gift .z-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GiftSection;
