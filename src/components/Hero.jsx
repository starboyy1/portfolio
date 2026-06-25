import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { personal } from '../data/personal';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  size: Math.random() > 0.5 ? '3px' : '4px',
}));

const codeLines = [
  { text: 'const tayyab = {', indent: 0 },
  { text: 'role: "React Developer",', indent: 1 },
  { text: 'experience: "2 years",', indent: 1 },
  { text: 'location: "Islamabad, PK",', indent: 1 },
  { text: 'skills: [', indent: 1 },
  { text: '"React", "Redux", "Next.js"', indent: 2 },
  { text: '],', indent: 1 },
  { text: 'available: true', indent: 1 },
  { text: '};', indent: 0 },
];

export default function Hero({ isDark }) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen overflow-hidden pt-24 pb-16 ${
        isDark ? 'bg-dark text-text-primary-dark' : 'bg-light text-text-primary-light'
      }`}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)',
        }}
      />

      <div className="particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="section-container relative grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className={`mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-medium ${
                isDark
                  ? 'border-accent-primary/40 bg-accent-primary/10 text-accent-secondary'
                  : 'border-accent-primary/30 bg-accent-primary/5 text-accent-primary'
              }`}
              style={{
                borderImage: 'linear-gradient(135deg, #6C63FF, #00D4FF) 1',
              }}
            >
              👋 Available for work
            </span>

            <h1 className="font-display text-[clamp(2rem,9vw,6rem)] font-bold leading-tight break-words">
              {personal.name}
            </h1>

            <div className="mt-4 h-10 font-display text-xl font-semibold text-accent-primary sm:text-2xl">
              <TypeAnimation
                sequence={[
                  'Frontend React Developer',
                  2000,
                  'Redux & Next.js Specialist',
                  2000,
                  'UI Performance Optimizer',
                  2000,
                  'Building Scalable Web Apps',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p
              className={`mt-6 max-w-lg text-lg leading-relaxed ${
                isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
              }`}
            >
              I build fast, scalable, and beautiful web applications using React.js, Redux, and
              Next.js. Based in Islamabad, Pakistan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="projects" smooth duration={500} offset={-70} className="btn-primary">
                View My Work
              </Link>
              <a
                href="/tayyab-cv.pdf"
                download
                className={`btn-secondary ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}
              >
                <HiDownload className="h-5 w-5" />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              {[
                { icon: FaGithub, href: personal.github, label: 'GitHub' },
                { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`rounded-lg p-3 transition-all duration-300 hover:scale-110 hover:text-accent-primary ${
                    isDark
                      ? 'text-text-secondary-dark hover:bg-accent-primary/20'
                      : 'text-text-secondary-light hover:bg-accent-primary/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative flex min-w-0 justify-center lg:justify-end"
        >
          <div
            className="absolute inset-0 m-auto h-64 w-64 rounded-full opacity-40 blur-[80px]"
            style={{ background: '#6C63FF' }}
          />
          <div className="animate-float relative w-full min-w-0 max-w-md">
            <div
              className={`overflow-hidden rounded-xl border p-4 shadow-glow sm:p-6 ${
                isDark
                  ? 'border-accent-primary/20 bg-surface-dark/80 backdrop-blur-md'
                  : 'border-accent-primary/15 bg-white/90 backdrop-blur-md'
              }`}
            >
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="overflow-hidden whitespace-pre-wrap break-words font-mono text-xs leading-relaxed sm:text-sm">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    <span className="text-accent-secondary">
                      {line.text.includes(':') ? (
                        <>
                          <span className={isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}>
                            {line.text.split(':')[0]}:
                          </span>
                          <span className="text-accent-primary">{line.text.split(':').slice(1).join(':')}</span>
                        </>
                      ) : (
                        <span className="text-accent-primary">{line.text}</span>
                      )}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
