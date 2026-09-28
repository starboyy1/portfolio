import { motion } from 'framer-motion';
import { personal } from '../data/personal';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Delivered' },
  { value: '10+', label: 'Technologies' },
];

const topSkills = ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'GraphQL', 'Node.js'];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-light'}`}
    >
      <div className="section-container grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-full opacity-60 blur-2xl"
              style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.35), transparent 70%)' }}
            />
            <img
              src="/tayyab-photo.png"
              alt={personal.name}
              className={`relative h-64 w-64 rounded-full object-cover object-top ring-1 ${
                isDark ? 'ring-accent-primary/30' : 'ring-accent-primary/20'
              }`}
            />
          </div>

          <div className="mt-10 grid w-full grid-cols-3 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-lg border px-3 py-4 text-center ${
                  isDark
                    ? 'border-white/8 bg-dark'
                    : 'border-black/6 bg-light'
                }`}
              >
                <div className="font-display text-2xl font-bold text-accent-primary">{stat.value}</div>
                <div
                  className={`mt-1 text-[11px] leading-snug ${
                    isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
            About
          </span>
          <h2
            className={`mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Clean code. Fast interfaces. Real products.
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

          <p className={`mt-5 font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
            Currently at <span className="text-accent-primary">Selteq Solutions</span>, Islamabad
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <span
                key={skill}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors duration-300 hover:bg-accent-primary hover:text-dark ${
                  isDark
                    ? 'border border-white/10 bg-accent-primary/5 text-accent-primary'
                    : 'border border-black/8 bg-accent-primary/5 text-accent-primary'
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
