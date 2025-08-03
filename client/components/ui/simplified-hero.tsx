import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

interface SimplifiedHeroProps {
  scrollToSection: (section: string) => void;
}

export function SimplifiedHero({ scrollToSection }: SimplifiedHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <div className="w-full h-full relative spline-container">
            <Spline
              scene="https://prod.spline.design/diTNwA7MDXjmBX6n/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                pointerEvents: "auto",
                cursor: "auto"
              }}
              onLoad={() => {
                console.log("Spline scene loaded successfully");
                // Hide Spline watermark after load
                setTimeout(() => {
                  const watermarks = document.querySelectorAll('[data-spline="watermark"], .spline-watermark');
                  watermarks.forEach((el) => {
                    (el as HTMLElement).style.display = 'none';
                  });
                  
                  // Hide any element that looks like a watermark (bottom-right positioned)
                  const allDivs = document.querySelectorAll('div');
                  allDivs.forEach((div) => {
                    const style = window.getComputedStyle(div);
                    if (style.position === 'absolute' && 
                        style.bottom === '16px' && 
                        style.right === '16px' &&
                        div.textContent?.toLowerCase().includes('spline')) {
                      (div as HTMLElement).style.display = 'none';
                    }
                  });
                }, 1000);
              }}
              onError={(error) => {
                console.error("Spline scene error:", error);
              }}
            />
          </div>
        </Suspense>
      </div>
      
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-30 pointer-events-none" />

      {/* Left Side Text */}
      <motion.div
        className="absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none"
        initial={{ opacity: 0, x: -100, rotate: -90 }}
        animate={{ opacity: 1, x: 0, rotate: -90 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="text-center">
          <motion.h2
            className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap tracking-wider"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            FULL STACK DEVELOPER
          </motion.h2>
          <motion.div
            className="mt-2 w-1 h-16 md:h-20 lg:h-24 bg-gradient-to-b from-cyan-400 to-purple-500 mx-auto rounded-full"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Right Side Text */}
      <motion.div
        className="absolute right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none"
        initial={{ opacity: 0, x: 100, rotate: 90 }}
        animate={{ opacity: 1, x: 0, rotate: 90 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <motion.h2
            className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent whitespace-nowrap tracking-wider"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            BLOCKCHAIN DEVELOPER
          </motion.h2>
          <motion.div
            className="mt-2 w-1 h-16 md:h-20 lg:h-24 bg-gradient-to-b from-purple-400 to-pink-500 mx-auto rounded-full"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>

      {/* Center Welcome Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
      >
        <div className="text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Welcome
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Where Innovation Meets{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Technology
            </span>
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mt-8 pointer-events-auto"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400/50 text-cyan-400 rounded-full font-medium transition-all duration-300 hover:border-cyan-400 hover:text-white overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"
              />
              <span className="relative z-10">Discover My Work</span>
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
