import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills({ isDark }) {
  return (
    <section id="skills" className={`py-24 ${isDark ? 'bg-dark' : 'bg-light'}`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
            Stack
          </span>
          <h2
            className={`mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Tools I ship with
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`card-hover rounded-lg border p-6 ${
                isDark
                  ? 'border-white/8 bg-surface-dark'
                  : 'border-black/6 bg-white'
              }`}
            >
              <h3
                className={`font-display text-lg font-semibold ${
                  isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                }`}
              >
                {category.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 + i * 0.03 }}
                    className={`rounded-md px-2.5 py-1.5 text-sm transition-colors duration-300 hover:bg-accent-primary hover:text-dark ${
                      isDark
                        ? 'bg-dark text-text-secondary-dark'
                        : 'bg-light text-text-secondary-light'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
