import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MusicSection() {
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Track info for fallback
  const trackInfo = {
    title: "TAKE",
    artist: "Kian Bradly",
    spotifyUrl: "https://open.spotify.com/track/1BMT4lbI6JmDR1KMe1OKOU",
    embedUrl: "https://open.spotify.com/embed/track/1BMT4lbI6JmDR1KMe1OKOU?utm_source=generator"
  };

  useEffect(() => {
    // Set a timeout to show fallback if iframe doesn't load within 6 seconds
    timeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setShowFallback(true);
        setIsLoading(false);
      }
    }, 6000);

    // Additional check for mobile browsers that might have embedding restrictions
    const checkMobileRestrictions = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
      const isChrome = /chrome/i.test(userAgent);
      const isSafari = /safari/i.test(userAgent) && !/chrome/i.test(userAgent);
      
      // Some mobile browsers have stricter iframe policies
      if (isMobile && (isChrome || isSafari)) {
        // Give mobile browsers a bit more time but still fallback if needed
        setTimeout(() => {
          if (isLoading) {
            setShowFallback(true);
            setIsLoading(false);
          }
        }, 4000);
      }
    };

    checkMobileRestrictions();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setShowFallback(false); // in case it's a retry
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleIframeError = () => {
    setShowFallback(true);
    setIsLoading(false);
  };

  return (
    <section id="music" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Latest <span className="text-gold">Music</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stream my latest releases on Spotify and other platforms
          </motion.p>
        </div>
        
        <div className="space-y-8">
          {/* Spotify Embed with Fallback */}
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {showFallback ? (
              // Fallback UI
              <div className="flex flex-col items-center justify-center py-16 space-y-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fab fa-spotify text-3xl text-white"></i>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">{trackInfo.title}</h3>
                  <p className="text-gray-600 mb-6">by {trackInfo.artist}</p>
                  <p className="text-gray-500 mb-6">
                    Failed to load the player. Listen on Spotify instead.
                  </p>
                </div>
                <motion.a
                  href={trackInfo.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-spotify mr-3"></i>
                  Open on Spotify
                </motion.a>
                <button
                  onClick={() => {
                    setShowFallback(false);
                    setIsLoading(true);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm underline"
                >
                  Try loading player again
                </button>
              </div>
            ) : (
              // Iframe with loading state
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl z-10">
                    <div className="text-center">
                      <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading Spotify player...</p>
                    </div>
                  </div>
                )}
                <iframe 
                  ref={iframeRef}
                  style={{ borderRadius: '12px', border: 'none' }}
                  src={trackInfo.embedUrl}
                  width="100%"
                  height="352"
                  loading="eager"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
                {/* Manual fallback trigger - show after a few seconds */}
                {!isLoading && !showFallback && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setShowFallback(true)}
                      className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                    >
                      Player won't load? Open on Spotify instead
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
          
          {/* Placeholder for more tracks */}
          <motion.div 
            className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-music text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500 text-lg">More tracks coming very soon...</p>
            <p className="text-gray-400">Stay tuned for new releases</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
