"use client";

import { motion } from "framer-motion";
import { Layout, Server, GaugeCircle, ServerCog } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-10 h-10 text-accent" />,
    title: "Frontend Architecture",
    description: "Designing robust, scalable, and maintainable UI systems. I focus on component-driven development and modern frameworks to craft engaging user experiences."
  },
  {
    icon: <Server className="w-10 h-10 text-accent" />,
    title: "Full Stack Development",
    description: "Bridging the gap between beautiful interfaces and powerful backends. Bringing end-to-end solutions to life with seamless API integrations and secure databases."
  },
  {
    icon: <GaugeCircle className="w-10 h-10 text-accent" />,
    title: "Scalability & Performance",
    description: "Optimizing web applications for speed and efficiency. Implementing best practices in state management, caching, and load balancing for high-traffic platforms."
  },
  {
    icon: <ServerCog className="w-10 h-10 text-accent" />,
    title: "Exploring Backend",
    description: "Diving deep into server-side architectures, microservices, and specialized databases. Eagerly expanding my knowledge to build the next generation of infrastructure."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export default function WhatIDo() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-medium tracking-tight text-foreground/90">
            What I Do
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-10 lg:p-14 rounded-3xl bg-[#111111] border border-white/5 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(235,89,57,0.15)] relative overflow-hidden flex flex-col min-h-[300px] lg:min-h-[360px]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div className="mb-8 bg-black/50 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h4 className="text-2xl md:text-3xl font-heading font-semibold text-foreground/90 mb-6">{service.title}</h4>
              <p className="text-muted leading-relaxed flex-grow text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
