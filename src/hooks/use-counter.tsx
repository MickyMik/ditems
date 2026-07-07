import { useState, useEffect } from "react";

const useCounter = (target: number, duration = 1800, trigger = false) => {
  const [count, setCount] = useState(0);
  const [latched, setLatched] = useState(false);

  useEffect(() => {
    if (trigger && !latched) setLatched(true);
  }, [trigger, latched]);

  useEffect(() => {
    if (!latched) return;
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, latched]);

  return count;
};

export default useCounter;
