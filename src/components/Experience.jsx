import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { experiences, education } from '../data/experience';

export default function Experience({ isDark }) {
  return (
    <section id="experience" className={`py-24 ${isDark ? 'bg-dark' : 'bg-light'}`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
            Career
          </span>
          <h2
            className={`mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Experience
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute top-0 hidden h-full w-px origin-top md:left-1/2 md:block md:-translate-x-1/2 ${
              isDark ? 'bg-accent-primary/25' : 'bg-accent-primary/20'
            }`}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-10 ${
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
              }`}
            >
              <div
                className={`absolute top-6 z-10 hidden h-3 w-3 rounded-full border-2 border-accent-primary md:left-1/2 md:block md:-translate-x-1/2 ${
                  isDark ? 'bg-dark' : 'bg-light'
                }`}
              />

              <div
                className={`card-hover rounded-lg border p-6 ${
                  isDark ? 'border-white/8 bg-surface-dark' : 'border-black/6 bg-white'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-md font-display text-sm font-bold ${
                      isDark
                        ? 'bg-accent-primary/15 text-accent-primary'
                        : 'bg-accent-primary/10 text-accent-primary'
                    }`}
                  >
                    S
                  </div>
                  <div>
                    <h3
                      className={`font-display font-semibold ${
                        isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                      }`}
                    >
                      {exp.company}
                    </h3>
                    <p className="text-sm text-accent-primary">{exp.role}</p>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] ${
                      isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                    }`}
                  >
                    {exp.period}
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-1 text-[11px] ${
                      isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                    }`}
                  >
                    {exp.location}
                  </span>
                  <span className="rounded-md bg-accent-primary/10 px-2.5 py-1 text-[11px] text-accent-primary">
                    {exp.type}
                  </span>
                </div>

                <ul
                  className={`space-y-2.5 text-sm leading-relaxed ${
                    isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                  }`}
                >
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:pr-[calc(50%+2rem)]"
          >
            <div
              className={`absolute top-6 z-10 hidden h-3 w-3 rounded-full border-2 border-accent-secondary md:left-1/2 md:block md:-translate-x-1/2 ${
                isDark ? 'bg-dark' : 'bg-light'
              }`}
            />

            <div
              className={`card-hover rounded-lg border p-6 ${
                isDark ? 'border-white/8 bg-surface-dark' : 'border-black/6 bg-white'
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/15 text-accent-secondary">
                  <FaGraduationCap className="h-5 w-5" />
                </div>
                <h3
                  className={`font-display font-semibold ${
                    isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                  }`}
                >
                  Education
                </h3>
              </div>

              {education.map((edu) => (
                <div key={edu.id}>
                  <p
                    className={`font-medium ${
                      isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                    }`}
                  >
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-sm text-accent-primary">{edu.degree}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] ${
                        isDark
                          ? 'bg-dark text-text-secondary-dark'
                          : 'bg-light text-text-secondary-light'
                      }`}
                    >
                      {edu.period}
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 text-[11px] ${
                        isDark
                          ? 'bg-dark text-text-secondary-dark'
                          : 'bg-light text-text-secondary-light'
                      }`}
                    >
                      {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
