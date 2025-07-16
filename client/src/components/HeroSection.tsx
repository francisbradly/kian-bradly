import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-gold rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-20 h-20 border border-gold rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        {/* Central Logo/Name */}
        <div className="text-center mb-auto mt-32">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            KIAN <span className="">BRADLY</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Music Artist & Producer
          </motion.p>
        </div>
        
        {/* Animated Text at Bottom Left */}
        <div className="absolute bottom-16 left-6 md:left-12">
          <motion.p 
            className="text-3xl md:text-5xl text-white mb-4 font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            CREATE <strong className="bg-gradient-to-r from-[hsl(48,85%,52%)] to-[#555] bg-clip-text text-transparent">MUSIC.</strong>
          </motion.p>
          <motion.p 
            className="text-3xl md:text-5xl text-white font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
            CREATE <strong className="bg-gradient-to-r from-[hsl(48,85%,52%)] to-[#555] bg-clip-text text-transparent">HARMONY.</strong>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
