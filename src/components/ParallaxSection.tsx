import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="relative h-[50vh] overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Crafted with Passion
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Every creation tells a story of dedication and artisanal excellence
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxSection;