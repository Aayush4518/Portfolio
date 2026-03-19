"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

function AnimatedLine({ 
  line, 
  progress, 
  index, 
  total,
  highlightColor,
  baseColor
}: { 
  line: ReactNode, 
  progress: MotionValue<number>, 
  index: number, 
  total: number,
  highlightColor: string,
  baseColor: string
}) {
  const step = 1 / total;
  // Overlap animations slightly for a more fluid feel across lines
  const start = index * step * 0.8;
  const end = Math.min(start + step * 2, 1);
  
  // Transform scroll progress to background position X
  const x = useTransform(progress, [start, end], [100, 0]);
  const backgroundPositionX = useTransform(x, (val) => `${val}%`);

  return (
    <motion.span
      className="inline-block w-fit"
      style={{
        backgroundImage:
          `linear-gradient(to right, ${highlightColor} 50%, ${baseColor} 50%, ${baseColor} 100%)`,
        backgroundSize: "200% 100%",
        backgroundPositionX,
        backgroundPositionY: "0%",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundRepeat: "no-repeat"
      }}
    >
      {line}
    </motion.span>
  );
}

export default function AnimatedText({ 
  children,
  highlightColor = "rgb(183, 171, 152)",
  baseColor = "rgb(47, 44, 40)",
  className = ""
}: { 
  children: ReactNode,
  highlightColor?: string,
  baseColor?: string,
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"], 
  });

  const lines =
    typeof children === "string" ? children.split("\n") : [children];

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          <AnimatedLine 
            line={line} 
            progress={scrollYProgress} 
            index={i} 
            total={lines.length} 
            highlightColor={highlightColor}
            baseColor={baseColor}
          />
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}