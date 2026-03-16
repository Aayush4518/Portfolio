"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export default function AnimatedText({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Convert children to lines if it’s a string, otherwise wrap directly
  const lines =
    typeof children === "string" ? children.split("\n") : [children];

  return (
    <div ref={ref}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block"
          initial={{ backgroundSize: "0% 100%" }}
          animate={isInView ? { backgroundSize: "100% 100%" } : {}}
          transition={{ duration: 1.2, delay: i * 0.3 }}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(183,171,152) 50%, rgb(47,44,40) 50%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "left",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {line}
        </motion.span>
      ))}
    </div>
  );
}