import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, isComplete]);

  return (
    <>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </>
  );
};

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4"
          >
            Hey there! 👋
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-display"
          >
            I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ayan Khan
            </span>
          </motion.h1>

          {/* Subtitle with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8 h-12"
          >
            <TypewriterText text="MERN Stack Developer" delay={500} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Full-stack developer with 1.5 years of experience building modern web applications
            using React, Node.js, and MongoDB. I specialize in creating responsive, user-friendly
            interfaces and scalable backend solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center pt-8"
          >
            <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
