"use client";
import { useEffect, useRef, useState } from "react";

export const useObserver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const current = ref.current;

    if (current) {
      observer.observe(current);

      // Немедленная проверка видимости
      const rect = current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * (1 - 0.3) &&
        rect.bottom > window.innerHeight * 0.3;

      setIsActive(inView);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return { isActive, ref };
};
