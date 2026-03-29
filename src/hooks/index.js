import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
}

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);
  const scrollY = useScrollY();

  useEffect(() => {
    const current = sectionIds.find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const { top, bottom } = el.getBoundingClientRect();
      return top <= 120 && bottom > 120;
    });
    if (current) setActive(current);
  }, [scrollY, sectionIds]);

  return active;
}

export function useCounter(target, enabled) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const n = parseInt(target);
    let current = 0;
    const step = Math.ceil(n / 30);
    const timer = setInterval(() => {
      current += step;
      if (current >= n) {
        setVal(n);
        clearInterval(timer);
      } else setVal(current);
    }, 40);
    return () => clearInterval(timer);
  }, [enabled, target]);

  return val;
}
