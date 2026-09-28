import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

function ProjectCard({ project, isDark, index, featured, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-lg border ${
        featured ? 'md:col-span-2' : ''
      } ${
        isDark ? 'border-white/8 bg-dark' : 'border-black/6 bg-light'
      }`}
    >
      <div
        className="h-1 w-full origin-left transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className={`p-6 ${featured ? 'md:grid md:grid-cols-2 md:gap-10 md:p-8' : ''}`}>
        <div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              {featured && (
                <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-widest text-accent-primary">
                  Featured
                </span>
              )}
              <h3
                className={`font-display text-xl font-bold sm:text-2xl ${
                  isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-accent-primary">{project.subtitle}</p>
            </div>
            <span
              className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-[11px] ${
                isDark ? 'bg-surface-dark text-text-secondary-dark' : 'bg-white text-text-secondary-light'
              }`}
            >
              {project.duration}
            </span>
          </div>

          <p
            className={`mt-4 text-sm leading-relaxed ${
              featured ? 'line-clamp-4' : 'line-clamp-3'
            } ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}
          >
            {project.description}
          </p>
        </div>

        <div className={featured ? 'mt-6 flex flex-col justify-end md:mt-0' : 'mt-5'}>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, featured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent-primary/10 px-2.5 py-1 font-mono text-[11px] text-accent-primary"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > (featured ? 6 : 4) && (
              <span className="rounded-md bg-accent-primary/10 px-2.5 py-1 font-mono text-[11px] text-accent-primary">
                +{project.tech.length - (featured ? 6 : 4)}
              </span>
            )}
          </div>

          <button type="button" onClick={() => onOpen(project)} className="btn-primary mt-6 w-full text-sm md:w-auto">
            View details
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <section
      id="projects"
      className={`py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-light'}`}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
            Work
          </span>
          <h2
            className={`mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Projects I&apos;ve built
          </h2>
          <p
            className={`mt-3 max-w-xl ${
              isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
            }`}
          >
            Enterprise SaaS and product work from Selteq, plus a full-stack personal project.
            Company code is under NDA.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <ProjectCard
            project={featured}
            isDark={isDark}
            index={0}
            featured
            onOpen={setSelectedProject}
          />
          {rest.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDark={isDark}
              index={index + 1}
              featured={false}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
        isDark={isDark}
      />
    </section>
  );
}
