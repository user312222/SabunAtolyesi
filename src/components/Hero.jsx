import { theme } from '../theme.js';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      backgroundImage: `url(${new URL('/assets/heroWP.png', import.meta.url).href})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: "flex", alignItems: "center",
      padding: "6rem 1.5rem 3rem",
      position: "relative", overflow: "hidden",
    }}>
      <div className="wave" style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 4,
        lineHeight: 0,
      }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: "block", width: "100%" }}>
          <path
            d="M0,50 C120,20 240,70 360,45 C480,20 600,65 720,40 C840,15 960,60 1080,40 C1200,20 1320,55 1440,40 L1440,80 L0,80 Z"
            fill={theme.cream}
          />
        </svg>
      </div>
      <div className="section-bubbles">
        {[
          { w: 140, h: 140, top: "5%", right: "2%", delay: "0s" },
          { w: 80, h: 80, top: "25%", right: "18%", delay: "1.2s" },
          { w: 110, h: 110, bottom: "35%", left: "3%", delay: "2.8s" },
          { w: 50, h: 50, top: "45%", right: "12%", delay: "0.8s" },
          { w: 90, h: 90, bottom: "5%", right: "8%", delay: "4s" },
          { w: 35, h: 35, top: "65%", left: "20%", delay: "3.2s" },
          { w: 70, h: 70, bottom: "18%", left: "25%", delay: "1.8s" },
        ].map((b, i) => (
          <div key={`hero-${i}`} className="bubble-anim" style={{
            position: "absolute", borderRadius: "50%",
            background: "rgba(232,115,90,0.12)",
            width: `${b.w}px`, height: `${b.h}px`,
            top: b.top, bottom: b.bottom, left: b.left, right: b.right,
            animationDelay: b.delay, pointerEvents: "none",
            zIndex: 2,
          }} />
        ))}
      </div>
      <div style={{ 
        maxWidth: 480, zIndex: 3, position: "relative", 
        animation: "fadeUp 0.8s ease both", 
        backdropFilter: "blur(15px)", 
        background: "rgba(255,252,248,0.85)", 
        padding: "2rem", 
        borderRadius: "24px", 
        border: "1px solid rgba(255,255,255,0.3)" 
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(232,115,90,0.12)", color: theme.coral,
          fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "5px 14px", borderRadius: 50, marginBottom: "1.2rem",
        }}>
          <span style={{ fontSize: "0.7rem" }}>✦</span> El Yapımı & Doğal
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 8vw, 3rem)", fontWeight: 700, lineHeight: 1.15,
          color: theme.text, marginBottom: "0.4rem",
        }}>
          <em style={{ fontStyle: "italic", color: theme.coral }}>Gerçek</em> sandın<br />değil mi? 🍓🍇
        </h1>
        <p style={{ fontSize: "1rem", color: theme.textMuted, marginBottom: "0.7rem", lineHeight: 1.6 }}>
          Hayır... el yapımı sabun 😊
        </p>
        <p style={{
          fontFamily: "'Playfair Display', serif", fontStyle: "italic",
          fontSize: "1.05rem", color: theme.brownLight, marginBottom: "2rem",
        }}>
          Meyve gibi görünen, dikkat çeken özel tasarımlar
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <a href="#process" className="btn-primary">
            Ürünleri Keşfet
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#links" className="btn-secondary">Satın Al</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

