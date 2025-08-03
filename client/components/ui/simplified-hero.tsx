import { useRef, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles, Zap, Heart } from "lucide-react";
import Spline from '@splinetool/react-spline';

interface SimplifiedHeroProps {
  scrollToSection: (section: string) => void;
}

function AnimatedHeroContent({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    { text: "Full Stack Developer", icon: "Code2", gradient: "from-cyan-400 via-blue-500 to-purple-600" },
    { text: "Blockchain Expert", icon: "Zap", gradient: "from-purple-400 via-pink-500 to-red-500" },
    { text: "AI Enthusiast", icon: "Sparkles", gradient: "from-green-400 via-cyan-500 to-blue-600" },
    { text: "Creative Innovator", icon: "Heart", gradient: "from-pink-400 via-purple-500 to-indigo-600" }
  ];

  const iconComponents = {
    Code2,
    Zap,
    Sparkles,
    Heart
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const letterVariants = {
    initial: { y: 50, opacity: 0, rotateX: -90 },
    animate: { y: 0, opacity: 1, rotateX: 0 },
    exit: { y: -50, opacity: 0, rotateX: 90 }
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const IconComponent = iconComponents[titles[currentTitle].icon as keyof typeof iconComponents];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-lg md:text-xl text-gray-400 font-light tracking-wider">
            Hello, I'm
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 relative"
        >
          <motion.span
            className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Shubham
          </motion.span>
          
          {/* Floating particles around name */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 80}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.h1>

        {/* Dynamic Titles */}
        <div className="h-24 md:h-28 lg:h-32 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTitle}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-center gap-4"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className={`p-3 rounded-full bg-gradient-to-r ${titles[currentTitle].gradient}`}
              >
                <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </motion.div>

              <div className="flex">
                {titles[currentTitle].text.split('').map((letter, i) => (
                  <motion.span
                    key={`${currentTitle}-${i}`}
                    variants={letterVariants}
                    className={`text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${titles[currentTitle].gradient} bg-clip-text text-transparent inline-block`}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Crafting digital experiences with{" "}
          <motion.span
            className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            passion
          </motion.span>
          {" "}and{" "}
          <motion.span
            className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            precision
          </motion.span>
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              View My Work
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-full font-medium transition-all duration-300 hover:border-cyan-400 hover:text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Let's Connect
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm font-light">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              whileHover={{ borderColor: "#06b6d4" }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
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
      
      {/* Stunning Animated Hero Content */}
      <AnimatedHeroContent scrollToSection={scrollToSection} />
    </section>
  );
}
