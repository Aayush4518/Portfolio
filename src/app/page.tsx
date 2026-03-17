"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import WhatIDo from "@/components/WhatIDo";
import TechStack from "@/components/TechStack";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while the loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent/30 selection:text-foreground">
      <LayoutGroup>
        <AnimatePresence mode="wait">
          {isLoading && (
            <Loader key="loader" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isLoading && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Hero />
              <div className="bg-[#0d0d0d]">
                <WhatIDo />
                <Introduction />
                <TechStack />
                <Journey />
                <Projects />
                <Footer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Header Logo */}
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              key="top-logo"
              className="absolute top-6 left-6 md:top-8 md:left-8 z-[100] pointer-events-none"
            >
              <motion.img
                layoutId="logo"
                className="rounded-full w-12 h-12 md:w-16 md:h-16 object-cover pointer-events-auto cursor-pointer shadow-lg"
                src="logo.svg"
                alt="logo"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
      <BackToTop />
    </main>
  );
}
