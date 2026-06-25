import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function ProjectModal({ project, isOpen, onClose, isDark }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border p-6 shadow-glow-hover sm:p-8 ${
              isDark
                ? 'border-accent-primary/20 bg-surface-dark'
                : 'border-accent-primary/15 bg-white'
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className={`absolute right-4 top-4 rounded-lg p-2 transition-colors ${
                isDark
                  ? 'text-text-secondary-dark hover:bg-accent-primary/20 hover:text-text-primary-dark'
                  : 'text-text-secondary-light hover:bg-accent-primary/10 hover:text-text-primary-light'
              }`}
            >
              <HiX className="h-5 w-5" />
            </button>

            <div
              className="mb-4 h-1 w-16 rounded-full"
              style={{ background: `linear-gradient(135deg, ${project.color}, #00D4FF)` }}
            />

            <h3
              className={`font-display text-2xl font-semibold ${
                isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-1 text-accent-primary">{project.subtitle}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-mono ${
                  isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                }`}
              >
                {project.duration}
              </span>
              <span className="rounded-full bg-accent-primary/20 px-3 py-1 text-xs font-mono text-accent-primary">
                {project.type}
              </span>
              <span className="rounded-full bg-success/20 px-3 py-1 text-xs font-mono text-success">
                {project.status}
              </span>
            </div>

            <p
              className={`mt-6 leading-relaxed ${
                isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
              }`}
            >
              {project.description}
            </p>

            <h4
              className={`mt-6 font-display font-semibold ${
                isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
              }`}
            >
              Key Features
            </h4>
            <ul
              className={`mt-3 space-y-2 ${
                isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
              }`}
            >
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <h4
              className={`mt-6 font-display font-semibold ${
                isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
              }`}
            >
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-primary/10 px-3 py-1 font-mono text-xs text-accent-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.status.includes('NDA') && (
              <p
                className={`mt-6 rounded-lg border border-accent-primary/20 p-3 text-sm italic ${
                  isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                }`}
              >
                NDA — screenshots available on request
              </p>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
