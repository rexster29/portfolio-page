import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

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
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/5">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
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
          }}
        />
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
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-dark-content/70">{info.content}</p>
                    </div>
                  </motion.a>
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
