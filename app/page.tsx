"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductScroll from "@/components/ProductScroll";
import Image from "next/image";

export default function Home() {
  const currentIndex = 0;
  const product = products[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-black relative selection:bg-white selection:text-black">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Scroll sequence engine */}
          <ProductScroll product={product} />

          {/* Details Section */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-white/5"
          >
            <div className="space-y-6">
              <h3
                className="text-4xl md:text-6xl font-black uppercase tracking-tight"
                style={{ color: product.themeColor }}
              >
                {product.detailsSection.title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                {product.detailsSection.description}
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {product.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold">{stat.val}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Product Image */}
            <div className="aspect-square relative flex items-center justify-center rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
              <div
                className="w-1/2 h-1/2 rounded-full blur-[80px] absolute"
                style={{ background: product.themeColor }}
              ></div>
              <Image
                src="/images/product.png"
                alt={product.detailsSection.imageAlt}
                fill
                className="object-cover relative z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 hover:-rotate-2"
              />
            </div>
          </motion.section>

          {/* Buy Now Section */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 py-24 px-6 max-w-5xl mx-auto text-center"
          >
            <div
              className={`inline-block mb-6 p-[2px] rounded-2xl bg-gradient-to-r ${product.gradient}`}
            >
              <div className="bg-black rounded-xl px-4 py-1">
                <span className="text-sm font-bold uppercase tracking-widest">
                  {product.buyNowSection.unit}
                </span>
              </div>
            </div>

            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Get {product.name}
            </h2>
            <div
              className="text-4xl font-light mb-12"
              style={{ color: product.themeColor }}
            >
              {product.buyNowSection.price}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {product.buyNowSection.processingParams.map((param, i) => (
                <span
                  key={i}
                  className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium tracking-wide"
                >
                  {param}
                </span>
              ))}
            </div>

            <button
              className={`group relative inline-flex items-center justify-center gap-3 px-12 py-6 text-xl font-bold uppercase tracking-widest overflow-hidden rounded-full mb-12`}
              style={{ background: product.themeColor, color: "#000" }}
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10">Add to Cart</span>
              <ShoppingCart className="relative z-10 w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-500 uppercase tracking-widest">
              <span>{product.buyNowSection.deliveryPromise}</span>
              <span className="hidden md:inline">•</span>
              <span>{product.buyNowSection.returnPolicy}</span>
            </div>
          </motion.section>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
