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
          {/* <h2 className="text-2xl font-heading font-medium text-foreground mb-2 tracking-wide">AAYUSH SINGH</h2>
          <p className="text-muted text-sm font-light">Building modern web experiences.</p> */}
          <h1 className="text-8xl font-heading font-medium text-foreground mb-2 tracking-wide">Let's Build together</h1>
          <p className="text-4xl font-heading font-medium text-foreground mb-2 tracking-wide">Connect with me!</p>
          {/* <ul className="list-[url('https://minhpham.design/assets/icons/ic-contact-link.svg')]">
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul> */}
          <ul className="mt-8 mb-8 space-y-6">
            <li>
              <a href="https://github.com/Aayush4518" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-muted hover:text-accent transition-colors duration-300 w-fit">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xl font-heading font-medium tracking-wide">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/aayush-singh-766a77290/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-muted hover:text-accent transition-colors duration-300 w-fit">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xl font-heading font-medium tracking-wide">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&to=aayushs290107@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-muted hover:text-accent transition-colors duration-300 w-fit">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xl font-heading font-medium tracking-wide">Email</span>
              </a>
            </li>
          </ul>
          <p className="text-muted text-xl font-light">I am always open to new opportunities and collaborations. Feel free to reach out if you have any questions or would like to discuss potential projects.</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        </motion.div>
      </div>
    </footer>
  );
}
