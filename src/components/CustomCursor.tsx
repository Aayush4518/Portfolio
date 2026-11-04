"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isLogoPulled, setIsLogoPulled] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      const element= document.elementFromPoint(e.clientX, e.clientY)
      if(!element) return;
      const logo = element.closest<HTMLElement>("[data-magnetic-logo]");
      if (logo) {
        const bounds = logo.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const pullThreshold = Math.min(bounds.width, bounds.height) * 0.3;
        const pulled = distance > pullThreshold;
        setIsLogoHovered(true);
        setIsLogoPulled(pulled);
        setMousePosition(pulled ? { x: e.clientX, y: e.clientY } : { x: centerX, y: centerY });
      } else {
        setIsLogoHovered(false);
        setIsLogoPulled(false);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
      const tag= element.tagName.toLowerCase();
      const textTags= ["p", "span", "h1", "h2", "h4", "h5", "h6", "label"]
      
      if(textTags.includes(tag)){
        setIsVisible(false);
      }
      else{
        setIsVisible(true)
      }
      
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  const cursorSize = isLogoHovered && isLogoPulled ? 42 : 36;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border-[1px] border-accent pointer-events-none z-[9999] sm:block hidden"
      
      animate={{
        x: mousePosition.x - cursorSize / 2,
        y: mousePosition.y - cursorSize / 2,
        width: cursorSize,
        height: cursorSize,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isLogoHovered && !isLogoPulled ? "rgba(235, 89, 57, 0.42)" : "#eb5939",
        boxShadow: isLogoHovered ? "0 0 18px rgba(235, 89, 57, 0.75)" : "0 0 0 rgba(235, 89, 57, 0)",
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 400,
        damping: 40,
        opacity: { duration: 0.2 },
      }}
    />
  );
}
