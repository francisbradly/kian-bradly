import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: "fab fa-spotify", url: "#", color: "bg-black hover:bg-gold" },
    { icon: "fab fa-youtube", url: "#", color: "bg-red-600 hover:bg-gold" },
    { icon: "fab fa-instagram", url: "#", color: "bg-pink-500 hover:bg-gold" },
    { icon: "fab fa-facebook", url: "#", color: "bg-blue-600 hover:bg-gold" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 right-6 z-50 hidden md:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-4 flex space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className={`w-10 h-10 ${link.color} rounded-full flex items-center justify-center text-white transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${link.icon} text-sm`}></i>
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="fixed top-6 right-6 z-50 md:hidden w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-40 md:hidden bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center text-white transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`${link.icon} text-sm`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
