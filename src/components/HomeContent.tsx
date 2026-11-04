"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, LayoutGroup, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import WhatIDo from "@/components/WhatIDo";
import TechStack from "@/components/TechStack";
import BackToTop from "@/components/BackToTop";
import AnimatedText from "@/components/AnimatedText";
import { ContributionGraph } from "@/components/ovio/contribution-graph/contribution-graph";
import type { ContributionDay } from "@/components/ovio/contribution-graph/types";

const MotionImage = motion.create(Image);

export default function HomeContent({
  contributions,
}: {
  contributions: ContributionDay[];
}) {
  const [isLoading, setIsLoading] = useState(true);
  const logoX = useSpring(useMotionValue(0), { stiffness: 340, damping: 9, mass: 0.45 });
  const logoY = useSpring(useMotionValue(0), { stiffness: 340, damping: 9, mass: 0.45 });
  const logoRotateX = useSpring(useMotionValue(0), { stiffness: 340, damping: 9, mass: 0.45 });
  const logoRotateY = useSpring(useMotionValue(0), { stiffness: 340, damping: 9, mass: 0.45 });

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent/30 selection:text-foreground">
      <LayoutGroup>
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
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
              <section className="px-6 pt-26 pb-24 md:px-12 lg:px-24">
                <div className="relative z-10 mx-auto max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                  >
                    <h2 className="mb-3 text-base font-medium tracking-widest text-accent uppercase">
                      <span className="relative inline-block pb-2">
                        GitHub Activity
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        />
                      </span>
                    </h2>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-tight text-foreground/90">
                      <AnimatedText>A year in code</AnimatedText>
                    </h3>
                  </motion.div>
                  <ContributionGraph variant="minimal" data={contributions} />
                </div>
              </section>
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

        <AnimatePresence>
          {!isLoading && (
            <motion.div
              key="top-logo"
              className="absolute top-6 left-6 md:top-8 md:left-8 z-[100] pointer-events-none"
              data-magnetic-logo
              style={{ x: logoX, y: logoY, rotateX: logoRotateX, rotateY: logoRotateY, transformPerspective: 500 }}
              onPointerMove={(event) => {
                if (event.pointerType !== "mouse") return;
                const bounds = event.currentTarget.getBoundingClientRect();
                const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2);
                const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2);
                logoX.set(offsetX * 8);
                logoY.set(offsetY * 8);
                logoRotateX.set(-offsetY * 9);
                logoRotateY.set(offsetX * 9);
              }}
              onPointerLeave={() => {
                logoX.set(0);
                logoY.set(0);
                logoRotateX.set(0);
                logoRotateY.set(0);
              }}
            >
              <MotionImage
                layoutId="logo"
                className="magnetic-logo rounded-full w-12 h-12 md:w-16 md:h-16 object-cover pointer-events-auto cursor-pointer shadow-lg"
                src="/logo.svg"
                alt="logo"
                width={64}
                height={64}
                priority
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
