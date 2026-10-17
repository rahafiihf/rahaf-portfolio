import { useEffect, useRef, useState, ReactNode, RefObject } from "react";

type Variant = "up" | "left" | "right" | "scale" | "fade";

/**
 * Shows content when it scrolls into view, but never leaves it hidden:
 * reduced-motion users, browsers without IntersectionObserver, elements
 * already on screen, and blocked/slow scripts all fall back to visible.
 */
function useRevealVisible(
  ref: RefObject<HTMLElement | null>,
  { once = true, threshold = 0.15 }: { once?: boolean; threshold?: number } = {}
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const alreadyOnScreen = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (alreadyOnScreen) {
      setVisible(true);
      if (once) return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );
    obs.observe(el);

    // Safety net: nothing may stay invisible because a script never ran.
    const failsafe = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [ref, once, threshold]);

  return visible;
}

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useRevealVisible(ref, { once, threshold: 0.15 });

  const hidden: Record<Variant, string> = {
    up: "translateY(28px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    scale: "scale(0.92)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0) scale(1)" : hidden[variant],
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// Animated progress bar that fills when scrolled into view
export function RevealBar({ level, delay = 0 }: { level: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useRevealVisible(ref, { once: true, threshold: 0.3 });

  return (
    <div ref={ref} className="h-2 overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-full bg-gold-gradient shadow-gold"
        style={{
          width: visible ? `${level}%` : "0%",
          transition: `width 1.4s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        }}
      />
    </div>
  );
}
