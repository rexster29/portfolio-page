import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  WindowIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiRedux, SiJavascript, SiExpress, SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiTailwindcss, SiJquery, SiVite, SiJsonwebtokens } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

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
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'HTML/CSS', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'jQuery', icon: <SiJquery /> },
      ],
    },
    {
      category: 'Backend',
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
      ],
    },
    {
      category: 'Database',
      icon: <CircleStackIcon className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver/> },
      ],
    },
    {
      category: 'Tools & Others',
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'JWT' },
        { name: 'Vite' },
        { name: 'REST APIs' },
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
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
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
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="relative"
              >
                <div className="card h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
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
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark/5 dark:hover:bg-light/5 transition-colors group"
                      >
                        <span className="text-dark-content dark:text-light-content flex items-center gap-2">
                          {skill.icon}
                          {skill.name}
                        </span>
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Skills;
