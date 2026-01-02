import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import FloatingShapes from './3d/FloatingShapes';
import ParticleField from './3d/ParticleField';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{ perspective: '1000px' }}>
      {/* 3D Background with Particles and Floating Shapes */}
      <div className="absolute inset-0 -z-10">
        <ParticleField count={60} />
        <FloatingShapes />
        
        {/* Enhanced Gradient Orbs with 3D effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent opacity-30"
          style={{
            transform: 'translateZ(30px)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-secondary/20 to-transparent opacity-30"
          style={{
            transform: 'translateZ(30px)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'rotateX(60deg) scale(2)',
          transformOrigin: 'center center',
        }} />
      </div>

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary font-medium mb-4"
          >
            Welcome
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  'Ramya Ranjan Naik',
                  2000,
                  'a Full-Stack Developer',
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-content/80 mb-8 max-w-2xl mx-auto"
          >
            I create beautiful and functional websites with modern technologies
            and best practices.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                <button className="btn-primary">Get in Touch</button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                <button className="btn-outline">View Projects</button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <Link to="about" smooth={true} duration={500} offset={-100}>
              <ArrowDownIcon className="w-6 h-6 text-primary cursor-pointer" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
