import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(56, 189, 248, 0.2)",
      border: "1px solid rgba(56, 189, 248, 0.5)",
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[100] mix-blend-screen hidden md:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.15,
        }}
      />
    </>
  );
};

export default CustomCursor;
