import { motion } from 'framer-motion';
import { personal } from '../data/personal';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Delivered' },
  { value: '10+', label: 'Technologies' },
];

const topSkills = ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'GraphQL', 'JavaScript'];

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-light'}`}
    >
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="gradient-border rounded-full p-1">
            <img
              src="/tayyab-photo.png"
              alt={personal.name}
              className="h-64 w-64 rounded-full object-cover object-top"
            />
          </div>

          <div className="mt-8 grid w-full grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`card-hover rounded-xl border p-4 text-center shadow-glow ${
                  isDark
                    ? 'border-accent-primary/15 bg-dark'
                    : 'border-accent-primary/10 bg-light'
                }`}
              >
                <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                <div
                  className={`mt-1 text-xs ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-accent-primary">
            About Me
          </span>
          <h2
            className={`mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-semibold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Passionate about building things for the web
          </h2>

          <div
            className={`mt-6 space-y-4 leading-relaxed ${
              isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
            }`}
          >
            {personal.about.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p className={`mt-4 font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
            Currently at <span className="text-accent-primary">Selteq</span>, Islamabad
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <span
                key={skill}
                className={`rounded-full px-4 py-1.5 text-sm font-mono transition-all duration-300 hover:bg-accent-primary hover:text-white ${
                  isDark
                    ? 'border border-accent-primary/20 bg-accent-primary/10 text-accent-secondary'
                    : 'border border-accent-primary/15 bg-accent-primary/5 text-accent-primary'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
