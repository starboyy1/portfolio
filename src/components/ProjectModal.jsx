import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function ProjectModal({ project, isOpen, onClose, isDark }) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          key={project.id}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`relative z-10 flex max-h-[min(88vh,720px)] w-full max-w-xl flex-col overflow-hidden rounded-xl border shadow-2xl ${
              isDark ? 'border-white/10 bg-surface-dark' : 'border-black/8 bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-1 w-full shrink-0"
              style={{ background: `linear-gradient(90deg, ${project.color}, transparent 70%)` }}
            />

            <div className="relative flex items-start justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6">
              <div className="min-w-0 pr-8">
                <h3
                  id="project-modal-title"
                  className={`font-display text-2xl font-bold ${
                    isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-accent-primary sm:text-base">{project.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className={`absolute right-3 top-3 rounded-md p-2 transition-colors sm:right-4 sm:top-4 ${
                  isDark
                    ? 'text-text-secondary-dark hover:bg-accent-primary/10 hover:text-text-primary-dark'
                    : 'text-text-secondary-light hover:bg-accent-primary/10 hover:text-text-primary-light'
                }`}
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 px-5 pt-3 sm:px-6">
              <span
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] ${
                  isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                }`}
              >
                {project.duration}
              </span>
              <span className="rounded-md bg-accent-primary/15 px-2.5 py-1 font-mono text-[11px] text-accent-primary">
                {project.type}
              </span>
              <span className="rounded-md bg-success/15 px-2.5 py-1 font-mono text-[11px] text-success">
                {project.status}
              </span>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto overscroll-contain px-5 pb-5 sm:px-6 sm:pb-6">
              <p
                className={`leading-relaxed ${
                  isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                }`}
              >
                {project.description}
              </p>

              <h4
                className={`mt-5 font-display font-semibold ${
                  isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                }`}
              >
                Key features
              </h4>
              <ul
                className={`mt-3 space-y-2.5 text-sm ${
                  isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                }`}
              >
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h4
                className={`mt-5 font-display font-semibold ${
                  isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                }`}
              >
                Tech stack
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-accent-primary/10 px-2.5 py-1 font-mono text-[11px] text-accent-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.status.includes('NDA') && (
                <p
                  className={`mt-5 rounded-md border border-accent-primary/20 p-3 text-sm italic ${
                    isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                  }`}
                >
                  NDA — source private; details and screenshots available on request.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
