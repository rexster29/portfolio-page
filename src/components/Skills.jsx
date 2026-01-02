import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  WindowIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiRedux, SiJavascript, SiExpress, SiPostgresql, SiMysql, SiTailwindcss, SiJquery, SiVite, SiJsonwebtokens } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { Tilt } from 'react-parallax-tilt';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsData = [
    {
      category: 'Frontend',
      icon: <WindowIcon className="w-6 h-6" />,
      skills: [
        {
          name: 'React.js',
          icon: <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <FaReact color="#58c4dc" />
          </motion.div>
        },
        {
          name: 'Redux',
          icon: <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <SiRedux color="#764abc" />
          </motion.div>
        },
        {
          name: 'HTML/CSS',
          icon: <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHtml5 color='#dd4b25' />
          </motion.div>
        },
        {
          name: 'JavaScript',
          icon: <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiJavascript color='#ffd93d' />
          </motion.div>
        },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color='#39b5f2' /> },
        { name: 'jQuery', icon: <SiJquery color='#78cff5' /> },
      ],
    },
    {
      category: 'Backend',
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs color='#56a545' /> },
        { name: 'Express.js', icon: <SiExpress /> },
      ],
    },
    {
      category: 'Database',
      icon: <CircleStackIcon className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql color='#31638c' /> },
        { name: 'MySQL', icon: <SiMysql color='#00749d' /> },
        { name: 'SQL Server', icon: <SiMysql color='#00749d' /> },
      ],
    },
    {
      category: 'Tools & Others',
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt color='#e94d32' /> },
        {
          name: 'JWT',
          icon:
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <SiJsonwebtokens color='purple' />
            </motion.div>
        },
        { name: 'Vite', icon: <SiVite color='#748cf7' /> },
        { name: 'REST APIs', icon: <AiFillApi color='#a1c8f7' /> },
      ],
    },
  ];

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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden" style={{ perspective: '2000px' }}>
      {/* Enhanced Background Animation with 3D layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        
        {/* 3D floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              transform: 'translateZ(20px)',
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
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
            Technical Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center">
            Technologies and tools I work with
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {skillsData.map((category, categoryIndex) => (
              <Tilt
                key={category.category}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                scale={1.05}
                transitionSpeed={1500}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#4F46E5"
                glarePosition="all"
                glareBorderRadius="1rem"
              >
                <motion.div
                  variants={itemVariants}
                  className="relative h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div 
                    className="card h-full relative overflow-hidden"
                    style={{
                      boxShadow: '0 20px 60px rgba(79, 70, 229, 0.15)',
                      transform: 'translateZ(50px)',
                    }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg text-primary"
                        style={{
                          transform: 'translateZ(30px)',
                          boxShadow: '0 10px 20px rgba(79, 70, 229, 0.2)',
                        }}
                        whileHover={{
                          rotateY: 360,
                          scale: 1.2,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 
                        className="text-xl font-bold"
                        style={{
                          transform: 'translateZ(20px)',
                        }}
                      >
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{
                            duration: 0.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          whileHover={{
                            x: 10,
                            scale: 1.05,
                          }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark/5 dark:hover:bg-light/5 transition-colors group relative"
                          style={{
                            transform: 'translateZ(15px)',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <span className="text-dark-content dark:text-light-content flex items-center gap-2">
                            <motion.span
                              whileHover={{
                                rotate: 360,
                                scale: 1.3,
                              }}
                              transition={{
                                duration: 0.5,
                              }}
                              style={{
                                display: 'inline-block',
                                transform: 'translateZ(10px)',
                              }}
                            >
                              {skill.icon}
                            </motion.span>
                            {skill.name}
                          </span>
                          <motion.div
                            className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              transform: 'translateZ(-5px)',
                            }}
                          />
                        </motion.div>
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


export default Skills;
