import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  cgpa: string;
  year: string;
  details: string[];
}

const EducationCard = ({ education, index }: { education: EducationItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
  >
    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

    {/* Icon */}
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
        <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-foreground mb-1">{education.degree}</h3>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{education.institution}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{education.year}</p>
      </div>
    </div>

    {/* CGPA */}
    <div className="flex items-center gap-3 mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900/50 dark:to-slate-900/50 rounded-lg">
      <Award size={20} className="text-blue-600 dark:text-blue-400" />
      <div>
        <p className="text-sm text-slate-600 dark:text-slate-400">CGPA</p>
        <p className="text-lg font-bold text-foreground">{education.cgpa}</p>
      </div>
    </div>

    {/* Details */}
    <ul className="space-y-2">
      {education.details.map((detail, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
          <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Education = () => {
  const educations: EducationItem[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'IPS Academy, Indore',
      cgpa: '8.68',
      year: 'Graduated',
      details: [
        'Advanced software development and system design',
        'Database management and optimization',
        'Cloud computing and distributed systems',
        'Focus on MERN Stack and Modern Web Technologies',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'IPS Academy, Indore',
      cgpa: '8.65',
      year: 'Graduated',
      details: [
        'Comprehensive programming fundamentals',
        'Data structures and algorithms',
        'Web development basics',
        'Database design and implementation',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building a strong foundation in computer science and technology
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educations.map((education, index) => (
            <EducationCard key={education.degree} education={education} index={index} />
          ))}
        </div>

        {/* Achievements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-900/50 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Academic Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                8.66+
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Average CGPA</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                2
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Degrees</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IPS Academy
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Institution</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
