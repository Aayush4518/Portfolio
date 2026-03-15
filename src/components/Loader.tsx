"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex items-center justify-center">
        {/* Rotating Circular Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-muted/20 border-t-accent"
        />
        {/* Center Logo */}
        <div className="absolute text-2xl font-heading font-medium tracking-widest text-foreground">
          AS.
        </div>
      </div>
    </motion.div>
  );
}
