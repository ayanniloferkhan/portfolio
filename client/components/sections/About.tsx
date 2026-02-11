import { motion } from 'framer-motion';

const SkillCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg text-3xl">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
  </motion.div>
);

export const About = () => {
  const skills = [
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'React, Next.js, Redux, TypeScript, TailwindCSS, Material UI',
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      description: 'Node.js, Express, Azure Functions, REST APIs',
    },
    {
      icon: '💾',
      title: 'Database & Cloud',
      description: 'MongoDB, CosmosDB, Blob Storage, Microsoft Azure',
    },
    {
      icon: '🚀',
      title: 'Deployment',
      description: 'Vercel, Azure, Git, GitHub, CI/CD pipelines',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experienced MERN Stack Developer focused on building high-quality, scalable applications
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 mb-16 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            I'm a passionate MERN Stack Developer with 1.5 years of professional experience. My journey includes working at ByteBillion
            as a Software Engineer Intern, where I collaborated with Azure technologies and modern React frameworks. Currently, I'm expanding
            my expertise in full-stack development with a focus on performance optimization, scalable architectures, and user experience.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mt-4">
            I hold a BCA degree with 8.65 CGPA and an MCA degree with 8.68 CGPA from IPS Academy Indore, which has provided me with a
            strong foundation in data structures, algorithms, and software engineering principles.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
