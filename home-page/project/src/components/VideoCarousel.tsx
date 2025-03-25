import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  "https://cdn.pixabay.com/video/2022/09/15/131375-750216820_large.mp4",
  "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/20721669/20721669-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/31270226/13354449_2560_1440_60fps.mp4",
  'https://videos.pexels.com/video-files/27052515/12058446_2560_1440_60fps.mp4'
];

export const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.video
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentIndex]} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};