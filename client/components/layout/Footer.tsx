import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-slate-700 dark:hover:text-slate-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayan-khan-8808671a9',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ayannilofer99@gmail.com',
      color: 'hover:text-red-500 dark:hover:text-red-400',
    },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Ayan Khan
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Full-stack developer passionate about building modern, scalable web applications with clean code and great UX.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 text-slate-600 dark:text-slate-400 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
            <span className="flex items-center gap-2 justify-center sm:justify-start">
              © {currentYear} Ayan Khan. Made with{' '}
              <Heart size={16} className="text-red-500" /> in India.
            </span>
          </p>

          {/* Tech Stack */}
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            Built with React, Vite & TailwindCSS
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 dark:from-blue-500/2 dark:to-purple-500/2 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};
