import { useEffect } from "react";
import { motion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dahil Sayo (Cover)",
      description: "the first cover song i did when i got my first condenser mic :)",
      videoUrl: "https://player.vimeo.com/video/1101475158?autoplay=1"
    },
    {
      title: "Hiding In The Blue (Cover)", 
      description: "with Athea—shoutout to her! we recorded this back when we were in Grade 11",
      videoUrl: "https://player.vimeo.com/video/1101475281?autoplay=1"
    },
    {
      title: "Noche Buena (Cover)",
      description: "made this with my old setup—earphones and a phone",
      videoUrl: "https://player.vimeo.com/video/1101475025?autoplay=1"
    },
    {
      title: "microtrack 01",
      description: "didn't think of naming these, made them for fun or out of boredom :D",
      videoUrl: "https://player.vimeo.com/video/1101475254?autoplay=1"
    },
    {
      title: "Microtrack 02",
      description: "was lowkey sick and in school when I made this one lol",
      videoUrl: "https://player.vimeo.com/video/1101475205?autoplay=1"
    },
    {
      title: "Microtrack 03",
      description: "another one",
      videoUrl: "https://player.vimeo.com/video/1101475232?autoplay=1"
    },
    {
      title: "Microtrack 04",
      description: "vox by Jonathan—shoutout to you as well!",
      videoUrl: "https://player.vimeo.com/video/1101475270?autoplay=1"
    },
    {
      title: "Circles (Cover)",
      description: "i remember playing the original song on repeat back then lol, did this with the old setup as well!",
      videoUrl: "https://player.vimeo.com/video/1101475124?autoplay=1"
    },
    {
      title: "Stars In The Sky (Cover)",
      description: "one of the earliest covers i did, i was still using n-track on this one :)",
      videoUrl: "https://player.vimeo.com/video/1101474415?autoplay=1"
    }
  ];

  // Standalone static image for gallery banner
  const galleryBannerImage = "/gallery-banner-image.jpg";

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
