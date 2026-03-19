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

      {/* 3D Sphere Right */}
      {/* <motion.div 
        className="absolute -right-32 bottom-20 w-80 h-80 rounded-[40%] hidden md:block"
        style={{ 
          y: yRight,
          rotate: rotateRight,
          background: "radial-gradient(circle at 70% 30%, #222222, #020202)",
          boxShadow: "inset 10px -10px 20px rgba(0,0,0,0.9), inset -10px 10px 20px rgba(255,255,255,0.03), 0 30px 60px rgba(235,89,57,0.1)"
        }}
      /> */}
      {/* <motion.div
        layoutId="3d"
        className="absolute -right-16 top-4 h-56 w-56 overflow-hidden opacity-90 pointer-events-none sm:-right-10 sm:top-6 sm:h-72 sm:w-72 md:pointer-events-auto md:right-0 md:bottom-0 md:top-auto md:h-[32rem] md:w-[32rem] md:opacity-100 lg:h-[44rem] lg:w-[44rem]"
        style={{ y: yRight, rotate: rotateRight }}
      >
        <iframe
          src="https://my.spline.design/genkubgreetingrobot1-2kZlrAOfRlnG6zBii8GK81RM/"
          className="h-full w-full border-0"
          title="Greeting robot 3D model"
        />
      </motion.div> */}

      {/* Current hero image kept for reference. */}
      <motion.div>
        <motion.img
          layoutId="3d"
          className="absolute 
      right-3 top-6 w-52 h-52 opacity-60 md:opacity-100 
      md:right-15 md:top-auto md:bottom-0 md:w-160 md:h-160 rounded-[40%] 
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
