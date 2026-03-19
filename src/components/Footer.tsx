"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { File, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["50%", "-10%"]);

  return (
    <footer
      ref={containerRef}
      className="relative mt-10 overflow-hidden border-t border-white/5 px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24"
    >

      {/* 3D Glowing Orb (Right Background) */}
      <motion.div
        className="absolute -right-20 bottom-0 w-64 h-64 rounded-full pointer-events-none hidden md:block"
        style={{
          y: yOrb,
          background: "radial-gradient(circle at top right, rgba(235,89,57,0.1), transparent 60%)",
          filter: "blur(40px)"
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-8 md:flex-row">
        <motion.div
          className="w-full max-w-full text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <h2 className="text-2xl font-heading font-medium text-foreground mb-2 tracking-wide">AAYUSH SINGH</h2>
          <p className="text-muted text-sm font-light">Building modern web experiences.</p> */}
          <h1 className="mb-3 max-w-full text-4xl font-heading font-medium tracking-tight text-foreground sm:text-5xl md:mb-2 md:text-7xl lg:text-8xl">
            <AnimatedText>Let&apos;s Build together</AnimatedText>
          </h1>
          <p className="mb-2 text-2xl font-heading font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
            <AnimatedText highlightColor="rgb(235, 89, 57)">Connect with me!</AnimatedText>
          </p>
          {/* <ul className="list-[url('https://minhpham.design/assets/icons/ic-contact-link.svg')]">
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul> */}
          <ul className="my-8 space-y-5 w-fit mx-auto md:mx-0">
            <li>
              <a href="https://github.com/Aayush4518" target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center gap-4 text-muted transition-colors duration-300 hover:text-accent">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-lg font-heading font-medium tracking-wide sm:text-xl">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/aayush-singh-766a77290/" target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center gap-4 text-muted transition-colors duration-300 hover:text-accent">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-lg font-heading font-medium tracking-wide sm:text-xl">LinkedIn</span>
              </a>
            </li>
            <li>
              {/* Mobile: mailto link */}
              <a href="mailto:aayushs290107@gmail.com" className="group flex md:hidden w-fit items-center gap-4 text-muted transition-colors duration-300 hover:text-accent">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-heading font-medium tracking-wide sm:text-xl">Email</span>
              </a>
              {/* Desktop: Gmail web link */}
              <a href="https://mail.google.com/mail/?view=cm&to=aayushs290107@gmail.com" target="_blank" rel="noopener noreferrer" className="group hidden md:flex w-fit items-center gap-4 text-muted transition-colors duration-300 hover:text-accent">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-heading font-medium tracking-wide sm:text-xl">Email</span>
              </a>
            </li>
            <li>
              <a href="/Aayush_Singh_Resume.pdf" download="Aayush_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center gap-4 text-muted transition-colors duration-300 hover:text-accent">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                  <File className="w-6 h-6" />
                </div>
                <span className="text-lg font-heading font-medium tracking-wide sm:text-xl">Resume</span>
              </a>
            </li>
          </ul>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted sm:text-lg md:mx-0 md:text-xl">
            I am always open to new opportunities and collaborations. Feel free to reach out if you have any questions or would like to discuss potential projects.
          </p>
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
