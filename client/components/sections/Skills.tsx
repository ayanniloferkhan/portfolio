import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
  >
    {skill}
  </motion.div>
);

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
  >
    <h3 className="text-xl font-bold text-foreground mb-4 text-center">{category.name}</h3>
    <div className="flex flex-wrap gap-3 justify-center">
      {category.skills.map((skill, idx) => (
        <SkillBadge key={skill} skill={skill} index={idx} />
      ))}
    </div>
  </motion.div>
);

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Redux', 'TailwindCSS', 'Material UI', 'Framer Motion'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Azure Functions', 'REST APIs', 'Authentication', 'JWT'],
    },
    {
      name: 'Database & Cloud',
      skills: ['MongoDB', 'CosmosDB', 'Blob Storage', 'Microsoft Azure', 'Vercel'],
    },
    {
      name: 'Tools & Others',
      skills: ['Git', 'GitHub', 'JIRA', 'Postman', 'Docker', 'CI/CD', 'Data Structures', 'Algorithms'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl"></div>
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
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Proficiency Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-900/50 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Key Competencies</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
            Full-stack development with expertise in modern JavaScript frameworks, cloud platforms, and database technologies.
            Proficient in building scalable applications with focus on performance optimization, clean code, and user experience.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Full-Stack Development', 'Performance Optimization', 'Clean Code', 'Problem Solving', 'Team Collaboration'].map((competency) => (
              <span
                key={competency}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-medium text-sm"
              >
                {competency}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
