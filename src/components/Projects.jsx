import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className={`py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-light'}`}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            className={`font-display text-[clamp(2rem,4vw,3rem)] font-semibold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Projects I&apos;ve Built
          </h2>
          <p
            className={`mt-3 ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}
          >
            Real enterprise work — professional projects from Selteq
          </p>
          <p
            className={`mx-auto mt-2 max-w-xl text-sm ${
              isDark ? 'text-text-secondary-dark/80' : 'text-text-secondary-light/80'
            }`}
          >
            Company projects are under NDA. Source code is private, but UI screenshots and details
            are shown below.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`card-hover relative overflow-hidden rounded-xl border shadow-glow ${
                isDark
                  ? 'border-accent-primary/15 bg-dark'
                  : 'border-accent-primary/10 bg-light'
              }`}
            >
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(135deg, ${project.color}, #00D4FF)` }}
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`font-display text-xl font-semibold ${
                      isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-mono ${
                      isDark ? 'bg-surface-dark text-text-secondary-dark' : 'bg-white text-text-secondary-light'
                    }`}
                  >
                    {project.duration}
                  </span>
                </div>

                <p className="mt-1 text-sm text-accent-primary">{project.subtitle}</p>

                <p
                  className={`mt-4 line-clamp-3 text-sm leading-relaxed ${
                    isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-primary/10 px-2.5 py-1 font-mono text-xs text-accent-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="rounded-full bg-accent-primary/10 px-2.5 py-1 font-mono text-xs text-accent-primary">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="btn-primary mt-6 w-full text-sm"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
}
