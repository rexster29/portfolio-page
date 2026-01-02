import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Tilt } from 'react-parallax-tilt';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      content: 'ramyagopa@gmail.com',
      link: 'mailto:ramyagopa@gmail.com',
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      content: '+91-8984428026',
      link: 'tel:+918984428026',
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Location',
      content: 'Bhubaneswar, Odisha, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/5" style={{ perspective: '1500px' }}>
      {/* Enhanced Animated 3D background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
            transform: 'translateZ(40px)',
          }}
        />
        
        {/* 3D floating elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
              transform: 'translateZ(30px)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
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
            Get in Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center">
            Let's discuss your project or just say hello
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold">Let's talk about everything!</h3>
              <p className="text-dark-content/70">
                Feel free to reach out if you want to collaborate with me, or simply
                have a chat.
              </p>

              <div className="space-y-4 mt-8">
                {contactInfo.map((info, index) => (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.05}
                    transitionSpeed={1000}
                  >
                    <motion.a
                      href={info.link}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 block"
                      style={{
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 10px 30px rgba(79, 70, 229, 0.1)',
                        transform: 'translateZ(30px)',
                      }}
                    >
                      <motion.div 
                        className="p-3 bg-primary/10 text-primary rounded-lg"
                        style={{
                          transform: 'translateZ(20px)',
                          boxShadow: '0 5px 20px rgba(79, 70, 229, 0.2)',
                        }}
                        whileHover={{
                          rotateY: 360,
                          scale: 1.2,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                      >
                        {info.icon}
                      </motion.div>
                      <div
                        style={{
                          transform: 'translateZ(15px)',
                        }}
                      >
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-dark-content/70">{info.content}</p>
                      </div>
                    </motion.a>
                  </Tilt>
                ))}
              </div>
            </motion.div>

            { false && <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-field"
                      required
                    />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      required
                    />
                  </motion.div>
                </div>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="input-field"
                    required
                  />
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="input-field resize-none"
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
            }
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
