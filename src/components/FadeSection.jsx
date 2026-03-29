import { useInView } from '../hooks';

export default function FadeSection({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`fade-in${visible ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
