"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

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
              <Introduction />
              <Journey />
              <Projects />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
