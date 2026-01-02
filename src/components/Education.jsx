import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { Tilt } from 'react-parallax-tilt';

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
    <section id="education" className="section-padding bg-secondary/5">
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
              <motion.div
                key={index}
                variants={itemVariants}
                className="card relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                    <AcademicCapIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                    <div className="flex flex-wrap gap-2 text-dark-content/60 dark:text-light-content/60">
                      <span>{edu.degree}</span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-dark-content/80 dark:text-light-content/80">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.div
                  className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
