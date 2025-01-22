import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <section id="about" className="section-padding bg-secondary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"
      />

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
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Profile"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl -z-10"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold">
                Full Stack Developer with expertise in React.js & Node.js
              </h3>
              <p className="text-dark-content/80">
                Currently working as a Web Developer at SOUL Limited, I specialize in building robust web applications 
                using React.js, Node.js, and modern web technologies. With over 4 years of experience, I've successfully 
                delivered multiple high-impact projects that have significantly improved business efficiency.
              </p>
              <p className="text-dark-content/80">
                My experience includes developing park reservation systems, bus terminal management platforms, and 
                RFID-based alert systems. I'm passionate about creating efficient, user-friendly solutions that solve 
                real-world problems and enhance operational processes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-lg bg-white dark:bg-dark-darker shadow-lg"
                  >
                    <h4 className="text-2xl font-bold text-primary">{stat.number}</h4>
                    <p className="text-sm text-dark-content/60">{stat.text}</p>
                  </motion.div>
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
