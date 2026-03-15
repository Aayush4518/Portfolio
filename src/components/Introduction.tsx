"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../app/globals.css"

export default function Introduction() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTorus = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  const yPill = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const rotateTorus = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12 lg:px-24 flex items-center min-h-[70vh] overflow-hidden">
      
      {/* 3D Torus (Right) */}
      <motion.div
        className="absolute -right-10 top-20 w-48 h-48 rounded-full border-[24px] border-[#0a0a0a] hidden md:block"
        style={{
          y: yTorus,
          rotate: rotateTorus,
          boxShadow: `
            inset 5px 5px 15px rgba(255,255,255,0.05),
            inset -5px -5px 15px rgba(0,0,0,0.8),
            10px 10px 20px rgba(0,0,0,0.6),
            -2px -2px 10px rgba(235,89,57,0.1)
          `
        }}
      />

      {/* 3D Floating Pill (Left) */}
      <motion.div
        className="absolute -left-16 bottom-20 w-16 h-40 rounded-full hidden md:block"
        style={{
          y: yPill,
          background: "linear-gradient(145deg, #1f1f1f, #070707)",
          boxShadow: `
            inset 4px 4px 10px rgba(255,255,255,0.03),
            inset -4px -4px 10px rgba(0,0,0,0.9),
            15px 15px 30px rgba(0,0,0,0.7),
            -10px -10px 30px rgba(235,89,57,0.05)
          `
        }}
      />

      <motion.div 
        className="max-w-5xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight leading-[1.2] text-foreground/90">
          I am a 
           <span className="text-[rgb(235,89,57)]"> Developer </span>
            based in Bangalore, interested in modern web technologies. 
          <span className="text-muted block mt-4 lg:mt-6">I build tools, platforms, and intelligent systems with a focus on real-world impactful products.</span>
        </h2>
        <div></div>
      </motion.div>
    </section>
  );
}
