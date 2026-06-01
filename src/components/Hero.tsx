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
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 pt-28 pb-12 md:px-12 md:pt-20 lg:px-24"
    >

      {/* 3D Sphere Left */}
      <motion.div
        className="absolute -left-12 bottom-12 w-32 h-32 md:left-auto md:bottom-auto md:-left-20 md:top-32 md:w-64 md:h-64 rounded-full opacity-60 md:opacity-100"
        style={{
          y: yLeft,
          rotate: rotateLeft,
          background: "radial-gradient(circle at 30% 30%, #2a2a2a, #050505)",
          boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), inset 10px 10px 20px rgba(255,255,255,0.05), 0 20px 40px rgba(235,89,57,0.15)"
        }}
      />

      
      <motion.div className="absolute inset-0 overflow-hidden lg:hidden">
        <motion.img
          className="absolute inset-0 h-full w-full object-cover opacity-85 blur-[1px]"
          src="/hero-img.jpeg"
          alt="img"
        />
        <div className="absolute inset-0 bg-slate-950/20" />
      </motion.div>

      <motion.div className="hidden lg:block">
        <motion.img
          className="absolute 
      right-3 top-6 w-52 h-52 md:opacity-100 
      md:right-15 md:top-auto md:bottom-10 md:w-140 md:h-140 rounded-[40%] 
      object-cover pointer-events-none
      "
          src="/hero-img.jpeg"
          alt="img"
        />
      </motion.div>


      <div className="relative z-10 max-w-6xl pr-24 sm:pr-32 md:pr-0 mt-12 md:mt-0">
        <motion.h1
          className="mb-6 max-w-[8ch] text-6xl font-heading font-bold leading-[0.85] tracking-tighter text-foreground text-shadow-lg sm:text-7xl md:mb-8 md:max-w-none md:text-8xl lg:text-[11rem]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          AAYUSH
          <br />
          SINGH
        </motion.h1>

        <motion.div
          className="my-6 h-[1px] w-full max-w-sm origin-left bg-muted/30 sm:max-w-md md:my-8 md:max-w-2xl"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="max-w-md text-base font-light tracking-wide text-muted sm:text-lg md:max-w-2xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent">
            Building 
          </span>
           <span> modern web experiences and intelligent systems.</span>
        </motion.p>
      </div>
    </section>
  );
}
