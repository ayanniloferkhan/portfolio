import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
  >
    {/* Image section */}
    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
      <div className="w-full h-full flex items-center justify-center text-6xl">
        {project.image}
      </div>
      <motion.div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"
      />
    </div>

    {/* Content section */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-foreground hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 rounded-lg transition-all text-sm font-medium"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Karomanage',
      description: 'Enterprise management software with responsive dashboard, Azure AD B2C authentication, and TypeScript migration.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Azure', 'REST APIs', 'MongoDB'],
      image: '📊',
      github: 'https://github.com',
      live: 'https://karomanage.com',
    },
    {
      title: 'Lotus Electronics',
      description: 'Full-featured e-commerce platform with authentication, shopping cart, order management, and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Material UI'],
      image: '🛒',
      github: 'https://github.com',
    },
    {
      title: 'Instagram Clone',
      description: 'Social media platform clone with JWT authentication, password reset functionality, and real-time interactions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
      image: '📸',
      github: 'https://github.com',
    },
    {
      title: 'Satellite Calculator Admin Panel',
      description: 'Event management admin panel with quotation generation, image uploads, and automated email sharing system.',
      technologies: ['React', 'Node.js', 'Admin Dashboard', 'Email Integration'],
      image: '📡',
      github: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
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
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing my work in building scalable, user-centric web applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
