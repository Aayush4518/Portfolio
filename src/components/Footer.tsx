"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["50%", "-10%"]);

  return (
    <footer ref={containerRef} className="relative py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 mt-10 overflow-hidden">
      
      {/* 3D Glowing Orb (Right Background) */}
      <motion.div
        className="absolute -right-20 bottom-0 w-64 h-64 rounded-full pointer-events-none hidden md:block"
        style={{
          y: yOrb,
          background: "radial-gradient(circle at top right, rgba(235,89,57,0.1), transparent 60%)",
          filter: "blur(40px)"
        }}
      />

      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-heading font-medium text-foreground mb-2 tracking-wide">AAYUSH SINGH</h2>
          <p className="text-muted text-sm font-light">Building modern web experiences.</p>
        </motion.div>

        <motion.div 
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors duration-300">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:hello@example.com" className="text-muted hover:text-accent transition-colors duration-300">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
