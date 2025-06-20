"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

interface ScrambleTextEffectProps {
  text: string;
}

export default function ScrambleTextEffect({ text }: ScrambleTextEffectProps) {
  const pRef = useRef<HTMLParagraphElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!pRef.current) return;
    // Split text en chars y envolver en spans
    const split = new SplitText(pRef.current, { type: "chars" });
    charsRef.current = split.chars as HTMLSpanElement[];
    charsRef.current.forEach((char) => {
      char.classList.add("char");
      char.setAttribute("data-content", char.textContent || "");
    });

    // Handler de animación con ScrambleText
    const handlePointerMove = (e: PointerEvent) => {
      const rect = pRef.current!.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      charsRef.current.forEach((char) => {
        const cRect = char.getBoundingClientRect();
        const cx = cRect.left + cRect.width / 2 - rect.left;
        const cy = cRect.top + cRect.height / 2 - rect.top;
        const dist = Math.hypot(mouseX - cx, mouseY - cy);
        if (dist < 100) {
          gsap.to(char, {
            overwrite: true,
            duration: 1.2 - dist / 100,
            scrambleText: {
              text: char.dataset.content ?? "",
              chars: ".:",
              speed: 0.5,
            },
            ease: "none",
          });
        }
      });
    };

    pRef.current.addEventListener("pointermove", handlePointerMove);
    return () => {
      pRef.current?.removeEventListener("pointermove", handlePointerMove);
    };
  }, [text]);

  return (
    <p ref={pRef} className="scramble-text-effect text-lg text-center font-medium leading-relaxed select-none cursor-pointer">
      {text}
    </p>
  );
}
