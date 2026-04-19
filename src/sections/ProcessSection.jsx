import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';
import FloatingBubbles from '../components/FloatingBubbles';
import { processSteps } from '../data/processSteps';

const processBubbleItems = [
  { w: 90, h: 90, top: "15%", left: "10%", delay: "0.5s" },
  { w: 50, h: 50, top: "50%", right: "12%", delay: "2s" },
  { w: 70, h: 70, bottom: "20%", left: "20%", delay: "1s" },
  { w: 35, h: 35, top: "70%", left: "5%", delay: "3.5s" },
  { w: 60, h: 60, top: "8%", right: "25%", delay: "4.2s" },
  { w: 45, h: 45, bottom: "45%", right: "8%", delay: "1.5s" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section">
      <FloatingBubbles items={processBubbleItems} />
      <div className="z-content">
        <SectionIntro 
          eyebrow="Üretim Süreci"
          title="Sabunları Nasıl Yapıyoruz?"
          description="Özenle hazırladığımız sabun bazlarıyla başlıyoruz."
        />
        <div className="process-grid card-hover">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="process-mini-card card" style={{
                background: step.cardBg,
                minHeight: "600px", // Taller for 500px images
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem 1.5rem",
                boxSizing: "border-box",
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: step.numColor,
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.8rem",
                }}>
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.2,
                  color: step.numColor,
                  fontWeight: 700,
                  marginBottom: "1rem",
                  whiteSpace: "pre-line",
                }}>
                  {step.title}
                </h3>
                <div style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  margin: "0 0 1.5rem 0",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  flexShrink: 0,
                }}>
                  <img
                    src={new URL(step.image, import.meta.url).href}
                    alt={step.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#5C3D2E",
                  fontWeight: 400,
                  whiteSpace: "pre-line",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

