import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills({ isDark }) {
  return (
    <section
      id="skills"
      className={`py-24 ${isDark ? 'bg-dark' : 'bg-light'}`}
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
            My Tech Stack
          </h2>
          <p
            className={`mt-3 ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}
          >
            Technologies I work with professionally
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`card-hover rounded-xl border p-6 shadow-glow ${
                isDark
                  ? 'border-accent-primary/15 bg-surface-dark'
                  : 'border-accent-primary/10 bg-white'
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h3
                  className={`font-display text-lg font-semibold ${
                    isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-all duration-300 hover:bg-accent-primary hover:text-white ${
                      isDark
                        ? 'bg-dark text-text-secondary-dark'
                        : 'bg-light text-text-secondary-light'
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
