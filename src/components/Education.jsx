import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import Tilt from 'react-parallax-tilt';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const educationData = [
    {
      school: 'National Institute Of Technology, Rourkela',
      degree: 'B.Tech in Computer Science',
      period: '2016 - 2020',
      achievements: [
        'Completed Bachelor\'s degree in Computer Science',
        'Participated in various technical competitions and hackathons',
      ],
    },
    {
      school: 'Adyant +2 Science College, Bhubaneswar',
      degree: 'Intermediate in Science',
      period: '2014 - 2016',
      achievements: [
        'Ranked within top 15,000 students in Odisha\'s 12th Board Examination',
        'Awarded laptop from Government of Odisha for outstanding performance',
      ],
    },
    {
      school: 'Ordnance Factory School, Badmal',
      degree: 'Secondary School Certificate',
      period: '2014',
      achievements: [
        'Qualified for National Level NTSE, ranking among top 138 students from Odisha',
        'Secured 1st place in multiple inter-school quiz competitions',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="section-padding bg-secondary/5 relative overflow-hidden" style={{ perspective: '1500px' }}>
      {/* 3D Background decorations */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${25 + i * 25}%`,
              transform: 'translateZ(40px)',
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 3,
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
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Education
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center">
            Academic Background & Achievements
          </motion.p>

          <div className="mt-16 space-y-8">
            {educationData.map((edu, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#4F46E5"
                glarePosition="all"
                glareBorderRadius="1rem"
              >
                <motion.div
                  variants={itemVariants}
                  className="card relative overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 20px 60px rgba(79, 70, 229, 0.15)',
                    transform: 'translateZ(40px)',
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  {/* 3D Background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transform: 'translateZ(-10px)',
                    }}
                  />
                  
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-2 bg-primary/10 rounded-lg text-primary mt-1"
                      style={{
                        transform: 'translateZ(30px)',
                        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.2)',
                      }}
                      whileHover={{
                        rotateY: 360,
                        scale: 1.2,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                    >
                      <AcademicCapIcon className="w-6 h-6" />
                    </motion.div>
                    <div 
                      className="space-y-2"
                      style={{
                        transform: 'translateZ(20px)',
                      }}
                    >
                      <h3 className="text-xl font-bold">{edu.school}</h3>
                      <div className="flex flex-wrap gap-2 text-dark-content/60 dark:text-light-content/60">
                        <span>{edu.degree}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-dark-content/80 dark:text-light-content/80">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i}
                            whileHover={{
                              x: 10,
                              color: '#4F46E5',
                            }}
                            style={{
                              transform: 'translateZ(10px)',
                            }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
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

export default Education;
