import { useEffect } from "react";
import { motion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Midnight Sessions",
      description: "An experimental ambient track exploring nocturnal soundscapes",
      videoUrl: "https://player.vimeo.com/video/1101475158?autoplay=1&muted=1"
    },
    {
      title: "Cover Series Vol. 1", 
      description: "Acoustic covers of popular hits with a personal twist",
      videoUrl: "https://vimeo.com/1101475281"
    },
    {
      title: "Digital Harmony",
      description: "Electronic fusion exploring the intersection of analog and digital",
      videoUrl: "https://vimeo.com/1101475025"
    },
    {
      title: "Collaboration Track",
      description: "Joint project with local artists blending various genres",
      videoUrl: "https://vimeo.com/1101475254"
    },
    {
      title: "Late Night Vibes",
      description: "Chill beats perfect for studying or relaxing",
      videoUrl: "https://vimeo.com/1101475205"
    }
  ];

  // Standalone static image for gallery banner
  const galleryBannerImage = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300";

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Carousel: {
        infinite: true,
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "fullscreen", "close"],
        },
      },
      // Configure for Vimeo iframe embeds
      Video: {
        autoplay: true,
      },
      // Properly configure iframe for Vimeo
      iframe: {
        preload: false,
        css: {
          width: "90vw",
          height: "90vh",
          maxWidth: "900px",
          maxHeight: "506px",
        },
        attr: {
          scrolling: "no",
          allow: "autoplay; fullscreen; picture-in-picture",
          allowfullscreen: true,
        },
      },
      // Add custom processing for Vimeo URLs
      on: {
        "build": (fancybox, slide) => {
          if (slide.src && slide.src.includes("player.vimeo.com")) {
            // Add autoplay parameter for Vimeo
            const url = new URL(slide.src);
            url.searchParams.set("autoplay", "1");
            url.searchParams.set("muted", "0");
            slide.src = url.toString();
          }
        },
      },
    });

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Archived <span className="text-gold">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Drafts, covers, and experimental pieces
          </motion.p>
        </div>
        
        {/* Gallery Trigger */}
        <div className="flex justify-center">
          <motion.div
            className="relative cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            
          >
            <a 
              href={projects[0].videoUrl}
              data-fancybox="gallery"
              data-type="iframe"
              data-caption={`<div class="text-center">
                <h3 class="text-xl font-semibold mb-2">${projects[0].title}</h3>
                <p class="text-gray-600">${projects[0].description}</p>
              </div>`}
              className="block"
            >
              <div className="relative w-80 h-64 bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-gold transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src={galleryBannerImage}
                  alt="Archived Projects Gallery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <i className="fas fa-play-circle text-4xl mb-2"></i>
                    <p className="text-sm font-medium">View Archived Projects</p>
                    <p className="text-xs opacity-75">5 videos</p>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Hidden gallery items */}
            {projects.slice(1).map((project, index) => (
              <a
                key={index + 1}
                href={project.videoUrl}
                data-fancybox="gallery"
                data-type="iframe"
                data-caption={`<div class="text-center">
                  <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                  <p class="text-gray-600">${project.description}</p>
                </div>`}
                style={{ display: 'none' }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Gallery Description */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Want to check out some of my earlier work? Just click above.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
