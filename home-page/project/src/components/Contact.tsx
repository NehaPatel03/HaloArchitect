import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="relative bg-black py-20 px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light text-white mb-16 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl text-white mb-6">Let's Create Together</h3>
            <p className="text-white/70 mb-8">
              Ready to transform your architectural vision into reality? We're here to help
              bring your ideas to life with our innovative approach and cutting-edge technology.
            </p>
            <div className="space-y-4">
              <p className="text-white/70">
                <strong className="text-white">Email:</strong> contact@haloarchitect.com
              </p>
              <p className="text-white/70">
                <strong className="text-white">Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-white/70">
                <strong className="text-white">Address:</strong> 123 Innovation Drive,
                San Francisco, CA 94105
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};