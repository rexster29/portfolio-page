import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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

  const stats = [
    { number: '4+', text: 'Years Experience' },
    { number: '5+', text: 'Projects Completed' },
    // { number: '30+', text: 'Happy Clients' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/5 relative overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Enhanced Decorative Elements with 3D */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
        style={{
          transform: 'translateZ(50px)',
        }}
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"
        style={{
          transform: 'translateZ(50px)',
        }}
      />
      
      {/* Floating 3D cubes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 bg-primary/5 backdrop-blur-sm rounded-lg -z-10"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            transform: 'translateZ(30px)',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center">
            Get to know me and my journey in web development
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div variants={itemVariants} className="relative">
              <Tilt
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
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    boxShadow: '0 20px 60px rgba(79, 70, 229, 0.3)',
                    transform: 'translateZ(50px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src="/profile-photo.jpg"
                    alt="Profile"
                    className="w-full h-auto"
                    style={{
                      transform: 'translateZ(20px)',
                    }}
                  />
                  {/* 3D overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Tilt>
              
              {/* Enhanced 3D border with multiple layers */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotateZ: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl -z-10"
                style={{
                  transform: 'translateZ(-10px)',
                  boxShadow: '0 10px 40px rgba(79, 70, 229, 0.2)',
                }}
              />
              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  rotateZ: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-9 -right-9 w-full h-full border-2 border-secondary/50 rounded-2xl -z-20"
                style={{
                  transform: 'translateZ(-20px)',
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold"
                style={{
                  transform: 'translateZ(30px)',
                  textShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                Full Stack Developer with expertise in React.js & Node.js
              </motion.h3>
              <motion.p 
                className="text-dark-content/80"
                style={{ transform: 'translateZ(20px)' }}
              >
                Currently working as a Web Developer at SOUL Limited, I specialize in building robust web applications 
                using React.js, Node.js, and modern web technologies. With over 4 years of experience, I've successfully 
                delivered multiple high-impact projects that have significantly improved business efficiency.
              </motion.p>
              <motion.p 
                className="text-dark-content/80"
                style={{ transform: 'translateZ(20px)' }}
              >
                My experience includes developing park reservation systems, bus terminal management platforms, and 
                RFID-based alert systems. I'm passionate about creating efficient, user-friendly solutions that solve 
                real-world problems and enhance operational processes.
              </motion.p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.05}
                    transitionSpeed={1000}
                  >
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-lg bg-white dark:bg-dark-darker shadow-lg relative overflow-hidden"
                      style={{
                        boxShadow: '0 10px 30px rgba(79, 70, 229, 0.15)',
                        transform: 'translateZ(40px)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <h4 
                        className="text-2xl font-bold text-primary"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        {stat.number}
                      </h4>
                      <p 
                        className="text-sm text-dark-content/60"
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        {stat.text}
                      </p>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
