import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { personal } from '../data/personal';

const codeLines = [
  { text: 'const engineer = {', indent: 0 },
  { text: 'name: "Tayyab Mansoor",', indent: 1 },
  { text: 'role: "Software Engineer",', indent: 1 },
  { text: 'stack: ["React", "Next.js", "TypeScript"],', indent: 1 },
  { text: 'focus: "SaaS · GraphQL · Real-time",', indent: 1 },
  { text: 'available: true,', indent: 1 },
  { text: '};', indent: 0 },
];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero({ isDark }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-80, 80], [6, -6]);
  const rotateY = useTransform(mouseX, [-80, 80], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className={`noise-bg relative min-h-screen overflow-hidden pt-24 pb-16 mesh-gradient ${
        isDark ? 'bg-dark text-text-primary-dark' : 'bg-light text-text-primary-light'
      }`}
    >
      <div className="section-container relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <motion.p
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mb-5 font-mono text-sm text-accent-primary"
          >
            Available for work
          </motion.p>

          <motion.h1
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(2.6rem,10vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-5 h-9 font-display text-xl font-semibold text-accent-primary sm:text-2xl"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2200,
                'Front End Developer',
                2200,
                'React · Next.js · TypeScript',
                2200,
                'SaaS & Real-time UIs',
                2200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            custom={3}
            variants={reveal}
            initial="hidden"
            animate="show"
            className={`mt-6 max-w-md text-lg leading-relaxed ${
              isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
            }`}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            custom={4}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link to="projects" smooth duration={500} offset={-70} className="btn-primary cursor-pointer">
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
          </motion.div>

          <motion.div
            custom={5}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-8 flex gap-3"
          >
            {[
              { icon: FaGithub, href: personal.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: FaGlobe, href: personal.website, label: 'Website' },
              { icon: FaEnvelope, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={`rounded-md p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-primary ${
                  isDark
                    ? 'text-text-secondary-dark hover:bg-accent-primary/10'
                    : 'text-text-secondary-light hover:bg-accent-primary/10'
                }`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-w-0 justify-center lg:justify-end"
          style={{ perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="animate-float relative w-full min-w-0 max-w-md"
          >
            <div
              className={`overflow-hidden rounded-lg border p-5 sm:p-6 ${
                isDark
                  ? 'border-white/10 bg-surface-dark/90 backdrop-blur-md'
                  : 'border-black/8 bg-white/95 backdrop-blur-md shadow-glow'
              }`}
            >
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span
                  className={`ml-3 font-mono text-[11px] ${
                    isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                  }`}
                >
                  engineer.ts
                </span>
              </div>
              <pre className="overflow-hidden whitespace-pre-wrap break-words font-mono text-xs leading-relaxed sm:text-[13px]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.07 }}
                    style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  >
                    {line.text.includes(':') ? (
                      <>
                        <span className={isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}>
                          {line.text.split(':')[0]}:
                        </span>
                        <span className="text-accent-primary">{line.text.split(':').slice(1).join(':')}</span>
                      </>
                    ) : (
                      <span className={isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}>
                        {line.text}
                      </span>
                    )}
                  </motion.div>
                ))}
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          to="about"
          smooth
          duration={500}
          offset={-70}
          className={`flex cursor-pointer flex-col items-center gap-1 text-xs ${
            isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
          }`}
        >
          <span className="font-mono">scroll</span>
          <HiArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
