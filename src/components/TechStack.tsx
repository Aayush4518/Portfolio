"use client";

import { motion } from "framer-motion";

const skillsGroup1 = [
  "MongoDB", "Node.js", "Docker", "Firebase", "JavaScript", "TypeScript", 
  "React.js",  "PostgreSQL",
  "MongoDB", "Node.js", "JavaScript", "TypeScript", 
  "React.js", "Docker", "Firebase", "PostgreSQL"
];

const skillsGroup2 = [
  "Next.js", "REST API", "Git", "GraphQL", 
  "Redux", "TailwindCSS",  "AWS", "Framer Motion",
  "TailwindCSS", "Next.js", "REST API", "GraphQL", 
  "Redux", "AWS", "Git", "Framer Motion"
];

export default function TechStack() {
  return (
    <section className="py-20 overflow-hidden bg-[#0d0d0d] relative border-t border-b border-white/5">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-accent/5 rounded-[100%] blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl text-center md:text-4xl font-heading font-medium tracking-tight text-foreground/90">
            My <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-muted mt-2 text-center">The tools and technologies I use to build digital experiences.</p>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-6 mask-image-linear-center">
        {/* Row 1: Left to Right */}
        <div className="flex w-[200%] gap-4 animate-scroll-left">
          {skillsGroup1.map((skill, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex-shrink-0 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-accent/30 transition-colors duration-300"
            >
              <span className="text-foreground/80 font-medium tracking-wide whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-[300%] gap-4 animate-scroll-right flex-row-reverse -translate-x-1/2">
          {skillsGroup2.map((skill, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex-shrink-0 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-accent/30 transition-colors duration-300"
            >
              <span className="text-foreground/80 font-medium tracking-wide whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
