import StorySlider from '../components/StorySlider';
import SectionIntro from '../components/SectionIntro';
import FloatingBubbles from '../components/FloatingBubbles';
import Reveal from '../components/Reveal';
import { storyValues } from '../data/storyValues.js';
import { storySlideImages } from '../data/storySlideImages.js';

const storyBubbleItems = [
  { w: 70, h: 70, top: "25%", left: "8%", delay: "1.2s" },
  { w: 55, h: 55, top: "55%", right: "18%", delay: "0.5s" },
  { w: 40, h: 40, bottom: "25%", left: "12%", delay: "2.8s" },
  { w: 30, h: 30, top: "10%", right: "30%", delay: "3.5s" },
  { w: 50, h: 50, bottom: "40%", right: "5%", delay: "1s" },
  { w: 25, h: 25, top: "75%", left: "25%", delay: "4s" },
];

const StorySection = () => {
  return (
    <section id="story" className="section">
      <FloatingBubbles items={storyBubbleItems} />
      <Reveal className="z-content section-center">
        <SectionIntro 
          eyebrow="Hikayemiz"
          title="Neden doğal? Neden el yapımı?"
        />
      </Reveal>
      <Reveal className="z-content">
        <div className="card" style={{
          background: "linear-gradient(135deg, #FDF0EC 0%, #FFF8F3 100%)",
          padding: "2rem 1.5rem",
          position: "relative", 
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", 
            top: "-0.5rem", 
            left: "0.5rem",
            fontFamily: "'Playfair Display', serif", 
            fontSize: "10rem",
            color: "rgba(232,115,90,0.06)", 
            lineHeight: 1, 
            pointerEvents: "none",
          }}>"</div>

          <p style={{
            fontFamily: "'Playfair Display', serif", 
            fontStyle: "italic",
            fontSize: "1.05rem", 
            color: "#5C3D2E", 
            lineHeight: 1.7,
            marginBottom: "1.5rem", 
            position: "relative", 
            textAlign: "center",
          }}>
            "Her bir sabunumuz, tıpkı bir meyve gibi büyür — özenle, sevgiyle, doğallıkla.
            Kimyasal katkı değil, el emeği var burada."
          </p>

          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "center", 
            gap: "1rem", 
            marginBottom: "2rem" 
          }}>
{storyValues.map((v) => (
              <div key={v.title} className="card" style={{
                display: "flex", 
                alignItems: "flex-start", 
                gap: "0.7rem", 
                flexDirection: "row",
                padding: "1rem 1.2rem",
              }}>
                <div style={{
                  width: 40, 
                  height: 40, 
                  borderRadius: 12,
                  background: v.bg, 
                  display: "flex", 
                  alignItems: "center",
                  justifyContent: "center", 
                  fontSize: "1.2rem",
                }}>
                  {v.emoji}
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#3D2B1F", marginBottom: "0.2rem" }}>
                    {v.title}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#8A6C60", lineHeight: 1.4 }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="story-slider-wrapper" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 32px rgba(93,61,46,0.15)" }}>
            <StorySlider images={storySlideImages} />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default StorySection;

