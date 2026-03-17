// "use client";

// import { motion } from "framer-motion";
// import { useEffect } from "react";

// export default function Loader({ onComplete }: { onComplete: () => void }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onComplete();
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-background"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//     >
//       <div className="relative flex items-center justify-center">
//         {/* Stroke Fill Circular Ring */}
//         <svg className="w-55 h-55 -rotate-90 pointer-events-none absolute" viewBox="0 0 100 100">
//           <motion.circle
//             cx="50"
//             cy="50"
//             r="48"
//             fill="transparent"
//             stroke="var(--accent)"
//             strokeWidth="0.5"
//             strokeDasharray="301.59" // 2 * pi * 48
            
//             initial={{ strokeDashoffset: 301.59 }}
//             animate={{ strokeDashoffset: [301.59, 0, 0, -301.59] }}
//             transition={{
//               duration: 1.1, // Match the timeout duration
//               ease: "linear",
//               repeat: Infinity
//             }}
//           />
//         </svg>
//         {/* Center Logo */}
//         <div className="z-10 absolute text-2xl font-heading font-medium tracking-widest text-foreground">
//           <img className="rounded-full w-25 h-25" src="logo.svg" alt="logo" />
//         </div>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }}
    >
      <motion.div
        className="absolute inset-0 bg-background pointer-events-auto"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      
      <div className="relative flex items-center justify-center w-56 h-56">
        {/* Stroke Fill Circular Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="transparent"
            stroke="var(--accent)"
            strokeWidth="0.5"
            strokeDasharray="301.59"
            initial={{ strokeDashoffset: 301.59 }}
            animate={{ strokeDashoffset: [301.59, 0, 0, -301.59] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.1,
              ease: "easeIn",
              repeat: 0,
            }}
          />
        </svg>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.img
            layoutId="logo"
            className="rounded-full w-25 h-25 object-cover pointer-events-auto"
            src="logo.svg"
            alt="logo"
            // Wait with unmounting the logo briefly allowing layoutId capture
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
