"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

const milestones = [
  {
    date: "2026 – Present",
    title: "Exploring Advanced Technologies",
    description: "Currently building projects with technologies like WebSockets, Docker, Firebase, and modern full-stack frameworks, while actively exploring and deepening my expertise in backend development."
  },
  {
    date: "March 2026",
    title:"Created my first Chrome Extension",
    description:"A YouTube Focus mode extension that blocks recommended videos to improve concentration."
    
  },
  {
    date: "February 2026",
    title: "First Full-Stack Platform",
    description: "Built my first fully working full-stack project including authentication, API management, Rate limiting (Redis), SEO management and backend integrations."
  },
  {
    date: "September 2025",
    title: "Joined Google Developer Group (GDG)",
    description: "Joined the development team as a core member and began contributing to developer initiatives and technical community activities."
  },
  {
    date: "May 2025",
    title: "Spotify Clone (Functional)",
    description: "Developed a working Spotify clone with music playback functionality using JavaScript, improving my understanding of interactive web applications."
  },
  {
    date: "March 2025",
    title: "X-Clone",
    description: "Built a responsive X (formerly Twitter) clone to practice layout design, responsive styling, and frontend structure using TailwindCSS."
  },
  {
    date: "November 2024",
    title: "Started Learning Web Development",
    description: "Began learning modern web technologies including HTML, CSS, and JavaScript while building small projects to understand core concepts."
  },
  {
    date: "October 2024",
    title: "Started B.Tech",
    description: "Began my Bachelor of Technology journey and developed a strong interest in software development and technology."
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll strictly within the Journey container for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Track scroll for full section to animate the parallax decorations
  const { scrollYProgress: sectionScrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Parallax mappings
  const yMug = useTransform(sectionScrollY, [0, 1], ["-10%", "50%"]);
  const ySphere = useTransform(sectionScrollY, [0, 1], ["30%", "-40%"]);
  const rotateMug = useTransform(sectionScrollY, [0, 1], [-10, 15]);

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden" id="journey" ref={containerRef}>
      
      {/* 3D Abstract Coffee Mug (Right) */}
      <motion.div
        className="absolute -right-8 top-1/4 w-32 h-40 hidden md:flex items-center justify-center"
        style={{ y: yMug, rotate: rotateMug }}
      >
        {/* Mug Body */}
        <div 
          className="w-24 h-32 rounded-b-xl rounded-t-sm"
          style={{
            background: "linear-gradient(135deg, #1f1f1f, #070707)",
            boxShadow: `
              inset -8px -8px 15px rgba(0,0,0,0.9),
              inset 8px 8px 15px rgba(255,255,255,0.05),
              15px 15px 25px rgba(0,0,0,0.6)
            `
          }}
        />
        {/* Mug Handle */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-16 rounded-r-[40px] border-[8px] border-[#151515] -z-10"
          style={{
            boxShadow: "inset -4px -4px 6px rgba(0,0,0,0.8), 5px 5px 10px rgba(0,0,0,0.5)"
          }}
        />
        {/* Mug Rim Highlight */}
        <div 
          className="absolute top-4 left-1/2 -translate-x-1/2 w-[5.5rem] h-6 rounded-[50%] bg-[#0f0f0f]"
          style={{
            boxShadow: "inset 0 4px 6px rgba(235,89,57,0.15), inset 0 -4px 6px rgba(0,0,0,0.8)"
          }}
        />
      </motion.div>

      {/* 3D Sphere (Left) */}
      <motion.div 
        className="absolute left-[-5%] bottom-1/4 w-40 h-40 rounded-full hidden md:block"
        style={{ 
          y: ySphere,
          background: "radial-gradient(circle at 30% 30%, #222222, #050505)",
          boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), inset 10px 10px 20px rgba(255,255,255,0.05), 0 20px 40px rgba(235,89,57,0.1)"
        }}
      />

      <div className="max-w-[85rem] mx-auto relative z-10">
        <motion.h2 
          className="text-2xl md:text-4xl font-heading mb-20 text-muted font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="pb-2 border-b border-[rgb(183, 171, 152)] block w-fit">
            <AnimatedText>Professional Journey</AnimatedText>
          </span>
        </motion.h2>

        <div className="relative pl-6 md:pl-10">
          {/* Subtle Grey Background Line */}
          <div className="absolute left-[3px] md:left-[7px] top-4 bottom-4 w-[2px] bg-white/10" />

          {/* Animated Accent Progress Line */}
          <motion.div 
            className="absolute left-[3px] md:left-[7px] top-4 w-[2px] bg-accent origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Node */}
                <div className="absolute -left-[30px] md:-left-[44px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors duration-500 z-10 box-content">
                  <div className="absolute inset-0 rounded-full bg-accent/40 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <motion.div
                  className="pl-6 md:pl-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-accent w-fit text-sm md:text-base tracking-wide font-medium mb-3 block">
                    {milestone.date}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-heading font-medium text-foreground mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-3xl">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
