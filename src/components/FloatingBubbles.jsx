import './FloatingBubbles.css';

const FloatingBubbles = ({ items, background = "rgba(232,115,90,0.10)" }) => {
  return (
    <div className="section-bubbles">
      {items.map((b, i) => (
        <div
          key={`bubble-${i}`}
          className="bubble-anim"
          style={{
            '--bubble-width': b.w,
            '--bubble-height': b.h,
            '--bubble-top': b.top || 'unset',
            '--bubble-bottom': b.bottom || 'unset',
            '--bubble-left': b.left || 'unset',
            '--bubble-right': b.right || 'unset',
            '--bubble-delay': b.delay,
            backgroundColor: background,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;

