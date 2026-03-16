"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (!isVisible) setIsVisible(true);
      const element= document.elementFromPoint(e.clientX, e.clientY)
      if(!element) return;
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

  return (
    <motion.div
      className="fixed bg-accent top-0 left-0 w-9 h-9 rounded-full border-[1px] border-accent pointer-events-none z-[9999] sm:block hidden"
      
      animate={{
        x: mousePosition.x - 20, // offset by half the width to center
        y: mousePosition.y - 20, // offset by half the height to center
        opacity: isVisible ? 1 : 0,
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
