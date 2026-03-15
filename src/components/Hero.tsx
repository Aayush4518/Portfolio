"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      
      {/* 3D Sphere Left */}
      <motion.div 
        className="absolute -left-20 top-32 w-64 h-64 rounded-full hidden md:block"
        style={{ 
          y: yLeft,
          rotate: rotateLeft,
          background: "radial-gradient(circle at 30% 30%, #2a2a2a, #050505)",
          boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), inset 10px 10px 20px rgba(255,255,255,0.05), 0 20px 40px rgba(235,89,57,0.15)"
        }}
      />

      {/* 3D Sphere Right */}
      <motion.div 
        className="absolute -right-32 bottom-20 w-80 h-80 rounded-[40%] hidden md:block"
        style={{ 
          y: yRight,
          rotate: rotateRight,
          background: "radial-gradient(circle at 70% 30%, #222222, #020202)",
          boxShadow: "inset 10px -10px 20px rgba(0,0,0,0.9), inset -10px 10px 20px rgba(255,255,255,0.03), 0 30px 60px rgba(235,89,57,0.1)"
        }}
      />

      <div className="max-w-6xl relative z-10">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[11rem] font-heading font-bold tracking-tighter leading-[0.85] text-foreground mb-8 text-shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          AAYUSH
          <br />
          SINGH
        </motion.h1>

        <motion.div 
          className="w-full max-w-2xl h-[1px] bg-muted/30 my-8 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-muted font-light tracking-wide max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Building modern web experiences and intelligent systems.
        </motion.p>
      </div>
    </section>
  );
}
