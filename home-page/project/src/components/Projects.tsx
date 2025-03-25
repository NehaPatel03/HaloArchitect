import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    title: "Modern Minimalist Villa",
    description: "A contemporary residential project embracing minimalist design principles.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    title: "Urban Office Complex",
    description: "Sustainable commercial space in the heart of the city.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
    title: "Eco-Friendly Resort",
    description: "Luxury meets sustainability in this tropical paradise.",
    year: "2022"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    title: "Cultural Center",
    description: "A hub for arts and culture with dynamic spaces.",
    year: "2022"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    title: "Skyline Residences",
    description: "Luxury apartments with panoramic city views.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
    title: "Green Technology Hub",
    description: "Innovation center focused on sustainable technology.",
    year: "2023"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    title: "Waterfront Hotel",
    description: "Five-star accommodation with spectacular ocean views.",
    year: "2022"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    title: "Mountain Retreat",
    description: "Sustainable lodge nestled in natural surroundings.",
    year: "2022"
  }
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative bg-black py-20 px-8" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-light text-white mb-16 text-center"
      >
        Our Projects
      </motion.h2>

      <div className="relative">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
          className="flex gap-8 w-[200%]"
        >
          {[...projects, ...projects].map((project, i) => (
            <motion.div
              key={i}
              className="relative group w-80 flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-end rounded-lg opacity-0 group-hover:opacity-100"
              >
                <span className="text-white/50 text-sm">{project.year}</span>
                <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};