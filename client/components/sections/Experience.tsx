import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-8 sm:mb-0"
    >
      {/* Timeline item container */}
      <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-bold text-foreground mb-1">{item.position}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{item.company}</p>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
              <Calendar size={16} />
              <span>{item.period}</span>
            </div>
            
            {/* Description */}
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-4 text-justify md:text-left">
              {item.description.map((desc, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline center dot */}
        <div className="hidden md:flex w-2/12 justify-center relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 absolute top-6"
          />
        </div>

        {/* Spacer for right side content */}
        <div className="hidden md:block w-5/12"></div>
      </div>

      {/* Mobile timeline dot */}
      <div className="md:hidden absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900"></div>
      <div className="md:hidden absolute left-7 top-20 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
    </motion.div>
  );
};

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'TaskUS',
      position: 'Remote Robotic Assistant',
      period: 'Feb 2025 - Feb 2026',
      description: [
        'Contributing to innovative robotic process automation solutions',
        'Developing scalable solutions for enterprise clients',
        'Collaborating with cross-functional teams',
      ],
      technologies: ['RPA', 'Automation', 'Cloud'],
    },
    {
      company: 'India Briefs Media Pvt Ltd',
      position: 'Junior Full Stack Developer',
      period: 'Jan 2024 - Jan 2025',
      description: [
        'Managed project deployments and maintenance',
        'Developed full-stack features using MERN stack',
        'Collaborated with design and product teams',
        'Optimized application performance and user experience',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    },
    {
      company: 'ByteBillion',
      position: 'Software Engineer Intern',
      period: 'July 2023 - Dec 2023',
      description: [
        'Developed responsive React interfaces with Material UI',
        'Worked with Azure Functions and CosmosDB',
        'Implemented Redux state management',
        'Collaborated with senior developers on production features',
      ],
      technologies: ['React', 'Next.js', 'Redux', 'Azure', 'Material UI'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A journey of growth, learning, and delivering impactful solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line for large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>

          {/* Timeline items */}
          <div className="md:pl-0">
            {experiences.map((item, index) => (
              <TimelineItem key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
