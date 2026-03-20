"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Product } from "@/data/products";
import ProductTextOverlays from "./ProductTextOverlays";

interface Props {
  product: Product;
}

const TOTAL_FRAMES = 192;

export default function ProductScroll({ product }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Load images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    // reset state
    setImagesLoaded(false);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `${product.folderPath}ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(imgArray);
          setImagesLoaded(true);
        }
      };
      // Fallback for missing images so it doesn't hang forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(imgArray);
          setImagesLoaded(true);
        }
      };
      imgArray.push(img);
    }
  }, [product]);

  const drawFrame = (frameIndex: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return; // Prevent drawing broken images

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate aspect ratio with dynamic zoom for mobile
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    // Reduce zoom on mobile to prevent cutoff
    const zoom = canvasWidth < 431 ? 0.6 : 1.15;
    let drawWidth = 0,
      drawHeight = 0;

    if (imgRatio > canvasRatio) {
      // Image is wider, base on Height
      drawHeight = canvasHeight * zoom;
      drawWidth = canvasHeight * imgRatio * zoom;
    } else {
      // Image is taller, base on Width
      drawWidth = canvasWidth * zoom;
      drawHeight = (canvasWidth / imgRatio) * zoom;
    }

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES),
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    // Initial draw
    if (imagesLoaded) {
      drawFrame(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // redraw current frame
        const currentProgress = scrollYProgress.get();
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(currentProgress * TOTAL_FRAMES),
        );
        drawFrame(frameIndex);
      }
    };

    // Initial size
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 text-white/50 animate-pulse font-mono uppercase tracking-widest text-sm">
            INITIALIZING FORMULA {product.id.split("-").join(" ")}...
          </div>
        )}

        {/* Ambient glow matching theme color */}
        <div
          className="absolute inset-0 opacity-20 blur-[100px] rounded-full scale-150 transition-colors duration-1000 mix-blend-screen pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${product.themeColor} 0%, transparent 70%)`,
          }}
        />

        <canvas
          ref={canvasRef}
          className="relative z-0 w-full h-full object-cover"
        />

        {/* Text overlays layer */}
        <div className="absolute inset-0 z-20">
          <ProductTextOverlays
            product={product}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </div>
    </div>
  );
}
