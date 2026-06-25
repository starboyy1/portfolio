import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '../data/personal';

export default function Footer({ isDark }) {
  return (
    <footer className={`border-t py-8 ${isDark ? 'border-accent-primary/15 bg-dark' : 'border-accent-primary/10 bg-surface-light'}`}>
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-display text-2xl font-bold gradient-text">TM</span>

          <p className={`text-sm ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}>
            Designed &amp; Built by {personal.name}
          </p>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: personal.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-colors hover:text-accent-primary ${
                  isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                }`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p
          className={`mt-6 text-center text-xs ${
            isDark ? 'text-text-secondary-dark/70' : 'text-text-secondary-light/70'
          }`}
        >
          © 2025 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
