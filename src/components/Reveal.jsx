import { useReveal } from '../hooks/useReveal';

const Reveal = ({ children, style = {}, className = '' }) => {
  const ref = useReveal();
  return (
    <div 
      ref={ref} 
      className={`reveal ${className}`} 
      style={style}
    >
      {children}
    </div>
  );
};

export default Reveal;

