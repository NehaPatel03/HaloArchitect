import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, Future Homes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    text: "Halo Architect transformed our vision into reality. Their innovative approach to sustainable design has set new standards in our industry."
  },
  {
    name: "Michael Rodriguez",
    role: "Urban Planning Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    text: "The attention to detail and commitment to excellence shown by the Halo team is unmatched. They've revolutionized how we think about urban spaces."
  },
  {
    name: "Emma Thompson",
    role: "Design Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    text: "Working with Halo Architect has been transformative. Their AI-driven approach brings a perfect blend of innovation and practicality."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
};

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="relative bg-black py-20 px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light text-white mb-16 text-center"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-6 object-cover"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
              />
              <motion.p
                className="text-white/80 mb-6 text-lg italic"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.5 }}
              >
                "{testimonial.text}"
              </motion.p>
              <div>
                <motion.h3
                  className="text-white font-medium"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.6 }}
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p
                  className="text-white/60"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.7 }}
                >
                  {testimonial.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};