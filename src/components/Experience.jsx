import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { experiences, education } from '../data/experience';

export default function Experience({ isDark }) {
  return (
    <section
      id="experience"
      className={`py-24 ${isDark ? 'bg-dark' : 'bg-light'}`}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2
            className={`font-display text-[clamp(2rem,4vw,3rem)] font-semibold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div
            className={`absolute top-0 hidden h-full w-0.5 md:left-1/2 md:block md:-translate-x-1/2 ${
              isDark ? 'bg-accent-primary/20' : 'bg-accent-primary/15'
            }`}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
              }`}
            >
              <div
                className={`absolute top-6 z-10 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-accent-primary md:left-1/2 md:flex md:-translate-x-1/2 ${
                  isDark ? 'bg-dark' : 'bg-light'
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-accent-primary" />
              </div>

              <div
                className={`card-hover rounded-xl border p-6 shadow-glow ${
                  isDark
                    ? 'border-accent-primary/15 bg-surface-dark'
                    : 'border-accent-primary/10 bg-white'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg font-display text-sm font-bold ${
                      isDark ? 'bg-accent-primary/20 text-accent-primary' : 'bg-accent-primary/10 text-accent-primary'
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
                    className={`rounded-full px-3 py-1 text-xs font-mono ${
                      isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                    }`}
                  >
                    {exp.period}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                    }`}
                  >
                    {exp.location}
                  </span>
                </div>

                <ul
                  className={`space-y-2 text-sm ${
                    isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                  }`}
                >
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:pr-[calc(50%+2rem)]"
          >
            <div
              className={`absolute top-6 z-10 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-accent-secondary md:left-1/2 md:flex md:-translate-x-1/2 ${
                isDark ? 'bg-dark' : 'bg-light'
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-accent-secondary" />
            </div>

            <div
              className={`card-hover rounded-xl border p-6 shadow-glow ${
                isDark
                  ? 'border-accent-primary/15 bg-surface-dark'
                  : 'border-accent-primary/10 bg-white'
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-secondary/20 text-accent-secondary">
                  <FaGraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className={`font-display font-semibold ${
                      isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                    }`}
                  >
                    Education
                  </h3>
                </div>
              </div>

              {education.map((edu) => (
                <div key={edu.id}>
                  <p
                    className={`font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}
                  >
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-sm text-accent-primary">{edu.degree}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-mono ${
                        isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
                      }`}
                    >
                      {edu.period}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        isDark ? 'bg-dark text-text-secondary-dark' : 'bg-light text-text-secondary-light'
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
