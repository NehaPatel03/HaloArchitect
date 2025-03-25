import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoCarousel } from './components/VideoCarousel';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Mission } from './components/Mission';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { useMedia } from 'react-use';

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const isMobile = useMedia('(max-width: 768px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence>
        {!isIntroComplete ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-6xl md:text-8xl font-light tracking-wider font-bold"
            >
              {'HALO ARCHITECT'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative min-h-screen"
            >
              <VideoCarousel />
              
              <div className="relative z-10 min-h-screen flex items-center px-8">
                <div className="max-w-2xl">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-4xl md:text-6xl font-light mb-6 font-bold"
                  >
                    HALO ARCHITECT
                  </motion.h2>
                  
                  {!isMobile && (
                    <>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-white/70 text-lg mb-8"
                      >
                        Revolutionizing architectural design through cutting-edge AI technology.
                        We blend creativity with artificial intelligence to create spaces that
                        inspire, innovate, and transform the way we live and work.
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-white/50 text-sm"
                      >
                        Scroll to explore
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
            
            <Mission />
            <Projects />
            <Testimonials />
            <Contact />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;