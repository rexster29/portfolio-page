import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="antialiased bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </motion.main>
          <footer className="py-8 bg-dark dark:bg-darker text-white/80">
            <div className="container text-center">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {new Date().getFullYear()} Ramya Ranjan Naik. All rights reserved.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex space-x-6 mt-4 md:mt-0"
                >
                  <a href="https://www.linkedin.com/in/rrnaik29/" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/rexster29" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                  {/* <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a> */}
                </motion.div>
              </div>
            </div>
          </footer>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
