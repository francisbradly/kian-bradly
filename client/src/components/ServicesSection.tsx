import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-microphone",
      title: "Vocal Mixing",
      description: "For voice-overs, podcasts, short films, and online content",
      price: "₱99 – ₱499",
      features: [
        "Noise reduction and cleanup",
        "EQ and compression",
        "Reverb and effects",
        "WAV or MP3 export"
      ]
    },
    {
      icon: "fas fa-sliders-h",
      title: "Music Mixing",
      description: "For artists with songs, covers, or multitrack sessions",
      price: "₱249 – ₱1,990",
      features: [
        "Mixing of vocals and instruments",
        "Vocal tuning and effects",
        "Stem balancing and processing",
        "Pre-mastered WAV or MP3 export"
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Offered <span className="text-gold">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Elevate your sound with mixing services that fits your style
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-gold hover:shadow-xl transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    transition: {
                      type: "tween",
                      duration: 0.2,
                      ease: "easeInOut"
                    }
                  }}
                >

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <i className={`${service.icon} text-2xl text-gold`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-gold mb-6">{service.price}</div>
                <ul className="text-left text-gray-600 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-gold mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pricing Note */}
        <motion.div 
          className="bg-warm-highlight border-l-4 border-gold p-6 rounded-r-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 text-center font-medium">
            <i className="fas fa-info-circle text-gold mr-2"></i>
            Prices vary depending on delivery time, track length, number of stems, revisions, and commercial rights. Contact for additional details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
