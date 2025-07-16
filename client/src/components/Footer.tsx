import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-spotify", url: "#" },
    { icon: "fab fa-youtube", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
    { icon: "fab fa-facebook", url: "#" }
  ];

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Kian Bradly
        </motion.h3>
        <motion.p 
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Music Artist & Producer
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url} 
              className="text-gray-400 hover:text-gold transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${link.icon} text-xl`}></i>
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className="text-gray-500 text-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          © 2025 Kian Bradly. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
