import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: 'AMA BHOOMI: Parks & Public Spaces Management',
      description: '"AMA BHOOMI" is a platform for managing and reserving parks, playgrounds, and event spaces. It simplifies facility search, booking, and activity tracking, benefiting both citizens and administrators by ensuring accessible, well-maintained public spaces while optimizing resource management for fair usage and efficient maintenance.',
      image: '/ama-bhoomi.png',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Redux', 'Razorpay', 'JWT'],
      liveLink: '#',  //http://172.188.28.14:5000/ama-bhoomi
      githubLink: '#',
    },
    {
      title: 'BSABT Bus Terminal Management System',
      description: 'The Bus Terminal Management System (BTMS) at BSABT, Baramunda enhances terminal efficiency using IoT-based monitoring for bus bays and parking spaces. It provides real-time availability updates, reduces congestion, improves security, and enables data-driven management. BTMS optimizes bus tracking, parking usage, and passenger convenience, ensuring smoother terminal operations.',
      image: '/bsabt-btms.jpg',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'JWT'],
      liveLink: '#',  //https://isbt.soulunileaders.in/
      githubLink: '#',
    },
    {
      title: 'Food Donation App',
      description: 'Food donation web application connects donors, NGOs, and recipients to reduce food waste and fight hunger. It enables real-time food listings, pickup coordination, and tracking, ensuring surplus food reaches those in need efficiently. The platform promotes community engagement, sustainability, and social impact through seamless donation management.',
      image: '/food-donation.png', 
      technologies: ['React.js', 'Node.js', 'PostgreSQL'],
      liveLink: 'https://share.soulltd.in/',  //https://share.soulltd.in/
      githubLink: '#',
    }, 
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ perspective: '1500px' }}>
      {/* 3D Background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + (i % 2) * 50}%`,
              transform: 'translateZ(30px)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center">
            Some of my recent works that showcase my skills
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#4F46E5"
                glarePosition="all"
                glareBorderRadius="1rem"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="card overflow-hidden group h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 25px 70px rgba(79, 70, 229, 0.2)',
                    transform: 'translateZ(40px)',
                  }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{
                        transform: 'translateZ(20px)',
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        transform: 'translateZ(30px)',
                      }}
                    >
                      <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-2">
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.2,
                            rotateZ: 360,
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors duration-300"
                          style={{
                            transform: 'translateZ(40px)',
                            boxShadow: '0 5px 20px rgba(79, 70, 229, 0.4)',
                          }}
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.2,
                            rotateZ: -360,
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors duration-300"
                          style={{
                            transform: 'translateZ(40px)',
                            boxShadow: '0 5px 20px rgba(79, 70, 229, 0.4)',
                          }}
                        >
                          <CodeBracketIcon className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                  <div 
                    className="p-6"
                    style={{
                      transform: 'translateZ(25px)',
                    }}
                  >
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{
                        transform: 'translateZ(15px)',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-dark-content/70 mb-4"
                      style={{
                        transform: 'translateZ(10px)',
                      }}
                    >
                      {project.description}
                    </p>
                    <div 
                      className="flex flex-wrap gap-2"
                      style={{
                        transform: 'translateZ(15px)',
                      }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          whileHover={{
                            scale: 1.1,
                            y: -5,
                          }}
                          style={{
                            boxShadow: '0 5px 15px rgba(79, 70, 229, 0.2)',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
