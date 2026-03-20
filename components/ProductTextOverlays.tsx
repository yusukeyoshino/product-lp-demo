"use client";

import { useState, useEffect } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product;
  scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({
  product,
  scrollYProgress,
}: Props) {
  // Fade in and out based on progress chunks
  // 0 -> 0.2: Section 1
  // 0.25 -> 0.45: Section 2
  // 0.5 -> 0.7: Section 3
  // 0.75 -> 0.95: Section 4

  const s1Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.2],
    [0, 1, 1, 0],
  );
  const s1Y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.2],
    [50, 0, 0, -50],
  );

  const s2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.45],
    [0, 1, 1, 0],
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.45],
    [50, 0, 0, -50],
  );

  const s3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.65, 0.7],
    [0, 1, 1, 0],
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.65, 0.7],
    [50, 0, 0, -50],
  );

  const s4Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.8, 0.95, 1],
    [0, 1, 1, 0],
  );
  const s4Y = useTransform(
    scrollYProgress,
    [0.75, 0.8, 0.95, 1],
    [50, 0, 0, -50],
  );

  const [activeTheme, setActiveTheme] = useState(product.themeColor);

  useEffect(() => {
    setActiveTheme(product.themeColor);
  }, [product]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {/* SECTION 1 - Top Left */}
      <motion.div
        className="absolute top-[15%]  left-4 md:left-16 w-[90%] md:w-max max-w-3xl text-left bg-black/30 rounded-[2rem] p-8 md:p-12"
        style={{ opacity: s1Opacity, y: s1Y }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#EFF0FA] tracking-tighter mb-2 drop-shadow-2xl">
          {product.section1.title}
        </h2>

        <p
          style={{ color: activeTheme }}
          className="text-lg md:text-xl lg:text-2xl text-[#EFF0FA] font-medium tracking-wide drop-shadow-xl"
        >
          {product.section1.subtitle}
        </p>
      </motion.div>

      {/* SECTION 2 - Bottom Right */}
      <motion.div
        className="absolute bottom-[10%] md:bottom-[15%] right-4 md:right-16 w-[90%] md:w-max max-w-3xl text-right bg-black/30 rounded-[2rem] p-8 md:p-12"
        style={{ opacity: s2Opacity, y: s2Y }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#EFF0FA] font-black uppercase tracking-tighter mb-2 drop-shadow-2xl">
          {product.section2.title}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-[#BAE6FD] font-medium tracking-wide drop-shadow-xl">
          {product.section2.subtitle}
        </p>
      </motion.div>

      {/* SECTION 3 - Center Left */}
      <motion.div
        className="absolute top-[45%] -translate-y-1/2 left-4 md:left-16 w-[90%] md:w-max max-w-3xl text-left bg-black/30 rounded-[2rem] p-8 md:p-12"
        style={{ opacity: s3Opacity, y: s3Y }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-2 text-[#EFF0FA] drop-shadow-2xl">
          {product.section3.title}
        </h2>
        <p
          className="text-lg md:text-xl lg:text-2xl font-medium tracking-wide drop-shadow-xl"
          style={{ color: activeTheme }}
        >
          {product.section3.subtitle}
        </p>
      </motion.div>

      {/* SECTION 4 - Top Right */}
      <motion.div
        className="absolute top-[15%] right-4 md:right-16 w-[90%] md:w-max max-w-3xl text-right bg-black/30 rounded-[2rem] p-8 md:p-12"
        style={{ opacity: s4Opacity, y: s4Y }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-2 drop-shadow-2xl"
          style={{ color: activeTheme }}
        >
          {product.section4.title}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-[#EFF0FA] font-medium tracking-wide drop-shadow-xl">
          {product.section4.subtitle}
        </p>
      </motion.div>
    </div>
  );
}
