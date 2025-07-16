import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { detectBrowser, openInSystemBrowser, copyToClipboard, type BrowserInfo } from "@/utils/browserDetection";

export default function BrowserDetector() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    isInAppBrowser: false,
    browserName: "",
    userAgent: "",
    isMobile: false
  });

  useEffect(() => {
    const info = detectBrowser();
    setBrowserInfo(info);
    setShowOverlay(info.isInAppBrowser);
  }, []);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      alert("Link copied to clipboard!");
    } else {
      alert("Unable to copy link. Please copy the URL manually.");
    }
  };

  const handleOpenInBrowser = () => {
    openInSystemBrowser();
  };

  if (!showOverlay) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-md w-full text-center space-y-6"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto bg-gold/10 rounded-full flex items-center justify-center"
          >
            <i className="fas fa-external-link-alt text-3xl text-gold"></i>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-black"
          >
            Open in Browser
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <p className="text-gray-700 text-lg">
              For full functionality, please open this site in your browser.
            </p>
            <p className="text-sm text-gray-500">
              You're currently viewing this from {browserInfo.browserName}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <button
              onClick={handleOpenInBrowser}
              className="w-full bg-gold text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-all duration-300 shadow-lg"
            >
              Open in Browser
            </button>
            
            <button
              onClick={handleCopyLink}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 border-2 border-gray-200"
            >
              Copy Link Instead
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}