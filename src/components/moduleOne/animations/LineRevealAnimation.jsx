import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LineRevealAnimation({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 0.5],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [10, 0.1]);
  return (
    <>
      {" "}
      <motion.span
        ref={ref}
        style={{
          opacity: scrollProgress,
        }}
        className="w-fit m-auto bg-gradient-to-r text-500 from-blue-400 via-blue-200 to-blue-100 bg-clip-text font-bold  text-transparent text-4xl sm:text-5xl"
      >
        {text}{" "}
      </motion.span>
    </>
  );
}
