import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, Mail, Download, Github, Globe, Sun, Moon } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "@/contexts/ThemeContext";

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export function MobileNav({ activeSection, scrollToSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Enhanced Hamburger Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-50 transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400"
              : theme === 'dark'
                ? "hover:bg-white/10 text-white/80 hover:text-white"
                : "hover:bg-black/10 text-black/80 hover:text-black"
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-md"
            initial={{ scale: 0, opacity: 0 }}
            animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </Button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Enhanced Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/20 z-40 flex flex-col shadow-2xl shadow-cyan-500/10"
            >
              {/* Enhanced Header */}
              <motion.div
                className="p-6 border-b border-white/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Navigation
                  </h2>
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    title="Available for work"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-1">Choose your destination</p>
              </motion.div>

              {/* Enhanced Navigation Items */}
              <nav className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        delay: index * 0.08,
                        type: "spring",
                        damping: 20,
                        stiffness: 300
                      }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`group w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-400 shadow-lg shadow-cyan-500/20"
                          : "text-white/80 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent"
                      }`}
                    >
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      <motion.div
                        className={`p-2.5 rounded-lg relative z-10 ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg"
                            : "bg-white/10 group-hover:bg-white/20"
                        }`}
                        whileHover={{ rotate: activeSection === item.id ? 0 : 5 }}
                      >
                        <item.icon className="h-5 w-5" />
                      </motion.div>

                      <div className="flex-1 relative z-10">
                        <span className="font-medium">{item.label}</span>
                        {activeSection === item.id && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-1"
                          />
                        )}
                      </div>

                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="w-2 h-2 bg-cyan-400 rounded-full relative z-10"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}

                      {/* Hover arrow */}
                      <motion.div
                        className="opacity-0 group-hover:opacity-60 transition-opacity duration-300 relative z-10"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <div className="w-1 h-1 bg-current rounded-full" />
                      </motion.div>
                    </motion.button>
                  ))}
                </div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <h3 className="text-sm font-medium text-gray-400 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30"
                      onClick={() => {
                        console.log('Download CV');
                        setIsOpen(false);
                      }}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Resume
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30"
                      onClick={() => setIsOpen(false)}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </motion.div>
              </nav>

              {/* Enhanced Footer */}
              <motion.div
                className="p-6 border-t border-white/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-400">
                    Ready to build something amazing?
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/20 relative overflow-hidden group"
                      onClick={() => handleNavClick("contact")}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
                      />
                      <Mail className="h-4 w-4 mr-2 relative z-10" />
                      <span className="relative z-10">Let's Connect</span>
                    </Button>
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Globe className="h-3 w-3" />
                    <span>Available worldwide</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
