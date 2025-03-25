import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Building2, Lightbulb, Leaf } from 'lucide-react';

const missions = [
  {
    icon: Compass,
    title: "Innovative Design",
    description: "Pushing boundaries with cutting-edge architectural solutions that define the future of urban spaces."
  },
  {
    icon: Building2,
    title: "Sustainable Building",
    description: "Creating eco-conscious structures that harmonize with nature while meeting modern needs."
  },
  {
    icon: Lightbulb,
    title: "Smart Integration",
    description: "Seamlessly blending AI technology with architectural design for optimal functionality."
  },
  {
    icon: Leaf,
    title: "Environmental Focus",
    description: "Prioritizing green solutions and sustainable practices in every project we undertake."
  }
];

export const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative bg-black py-20 px-8" ref={ref}>
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
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ type: "spring", delay: i * 0.2 + 0.3 }}
                className="mb-6 relative"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <mission.icon size={32} className="text-white" />
                </div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.5 }}
                className="text-xl text-white font-medium mb-4"
              >
                {mission.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.6 }}
                className="text-white/70"
              >
                {mission.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};