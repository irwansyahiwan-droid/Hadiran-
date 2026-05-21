import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  value,
  prefix = 'Rp',
  duration = 800,
  className = '',
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = startRef.current;
    const diff = value - start;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + diff * eased);
      setDisplay(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        startRef.current = value;
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration]);

  const formatted = display.toLocaleString('id-ID');

  return (
    <span className={`tabular-nums ${className}`}>
      {prefix} {formatted}
    </span>
  );
}
