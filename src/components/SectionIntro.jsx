import Reveal from './Reveal';
import { theme } from '../theme.js';

const SectionIntro = ({ eyebrow, title, description, style = {} }) => {
  return (
    <Reveal style={{ textAlign: "center", marginBottom: "2.5rem", ...style }}>
      {eyebrow && (
        <p style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: theme.coral,
          marginBottom: "0.5rem",
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.5rem,5vw,2.1rem)",
        fontWeight: 700,
        lineHeight: 1.2,
        color: theme.text,
        marginBottom: description ? "0.6rem" : 0,
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontSize: "0.95rem",
          color: theme.textMuted,
          lineHeight: 1.6,
          maxWidth: 480,
          margin: "0 auto",
        }}>
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionIntro;

