"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "RaiseIN",
    description: "A platform focused on fundraising, tuned for Indian market.",
    stack: ["Next.js", "Next Auth", "Redis Rate limiting", "Node.js", "Tailwind CSS", "MongoDB", "Razorpay API", ],
    link: "https://raisein.vercel.app"
  },
  {
    title: "YouTube Focus Extension",
    description: "A browser extension that helps maintain focus by hiding distractions and restoring them after a timer.",
    stack: ["JavaScript", "Browser API", "Chrome Extension (Manifest V3)"],
    link: "https://github.com/Aayush4518/yt-focus-mode-extension"
  },
  {
    title: "Travel Guardian",
    description: "A tourist safety system designed for travelers. It includes an SOS safety feature and displays risk or danger zones on an interactive map using Leaflet.",
    stack: ["React", "Leaflet.js", "WebSockets", "Machine Learning Models", "Node.js", "Authentication", "React Native", "Expo"],
    note: "Currently under development as a collaborative project.",
    link: "https://github.com/Aayush4518/GDG-Project"
  },
  {
    title: "Spotify Clone",
    description: "Frontend recreation of Spotify UI.",
    stack: ["React", "Tailwind CSS", "Dynamic Album loading"],
    link: "https://aayush-spotify-omega.vercel.app/"
  },
  {
    title: "X-Clone",
    description: "Responsive UI recreation.",
    stack: ["TailwindCSS", "JavaScript"],
    link: "https://github.com/Aayush4518/x-clone"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yDiamond = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const rotateDiamond = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 3D Floating Diamond (Left) */}
      <motion.div
        className="absolute -left-12 top-[30%] w-48 h-48 hidden md:block"
        style={{
          y: yDiamond,
          rotate: rotateDiamond,
          background: "linear-gradient(135deg, #2a2a2a 0%, #050505 100%)",
          borderRadius: "30px",
          boxShadow: `
            inset 8px 8px 15px rgba(255,255,255,0.05),
            inset -8px -8px 20px rgba(0,0,0,0.8),
            20px 20px 40px rgba(0,0,0,0.6),
            -10px -10px 30px rgba(235,89,57,0.05)
          `,
          transformOrigin: "center center"
        }}
      />

      <div className="max-w-[85rem] mx-auto relative z-10">
        <motion.h2 
          className="text-2xl md:text-4xl font-heading mb-16 text-muted font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="pb-2 border-b border-[rgb(183, 171, 152)]">
          Selected Works
          </span>
        </motion.h2>

        <div className="flex flex-col gap-6 md:gap-10">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link !== "#" ? project.link : undefined}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              className="group relative border border-white/5 bg-white/[0.015] p-8 md:p-14 rounded-[2rem] overflow-hidden hover:bg-white/[0.03] transition-colors duration-500 cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-8 focus:outline-none focus:ring-2 focus:ring-accent/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-w-4xl">
                <h3 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6 group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-lg md:text-2xl text-muted font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {project.note && (
                  <div className="inline-block mb-8 px-5 py-2.5 border border-accent/20 bg-accent/[0.03] text-accent rounded-full text-sm md:text-base tracking-wide">
                    {project.note}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-sm px-5 py-2 rounded-full border border-white/10 text-muted/70 tracking-wide font-medium bg-black/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-foreground transition-all duration-500 shrink-0">
                <ArrowUpRight className="w-7 h-7 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
