import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { personal } from '../data/personal';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact({ isDark }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/50 ${
    isDark
      ? 'border-accent-primary/20 bg-dark text-text-primary-dark placeholder:text-text-secondary-dark'
      : 'border-accent-primary/15 bg-light text-text-primary-light placeholder:text-text-secondary-light'
  }`;

  const contactCards = [
    { icon: FaEnvelope, text: personal.email, href: `mailto:${personal.email}` },
    { icon: FaMapMarkerAlt, text: personal.location },
    { icon: FaBriefcase, text: 'Open to Remote Work' },
  ];

  return (
    <section
      id="contact"
      className={`py-24 ${isDark ? 'bg-surface-dark' : 'bg-surface-light'}`}
    >
      <div className="section-container grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`font-display text-[clamp(2rem,4vw,3rem)] font-semibold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Let&apos;s Work Together
          </h2>
          <p
            className={`mt-4 leading-relaxed ${
              isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
            }`}
          >
            I&apos;m currently open to new opportunities. Whether you have a project in mind or
            just want to connect, my inbox is always open.
          </p>

          <div className="mt-8 space-y-4">
            {contactCards.map(({ icon: Icon, text, href }) => (
              <div
                key={text}
                className={`flex items-center gap-4 rounded-xl border p-4 ${
                  isDark
                    ? 'border-accent-primary/15 bg-dark'
                    : 'border-accent-primary/10 bg-light'
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/20 text-accent-primary">
                  <Icon className="h-5 w-5" />
                </div>
                {href ? (
                  <a href={href} className="text-sm hover:text-accent-primary">
                    {text}
                  </a>
                ) : (
                  <span className={`text-sm ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}>
                    {text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className={`rounded-xl border p-6 shadow-glow sm:p-8 ${
              isDark
                ? 'border-accent-primary/15 bg-dark'
                : 'border-accent-primary/10 bg-light'
            }`}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-4 flex items-center gap-2 rounded-lg p-4 text-sm ${
                  status === 'success'
                    ? 'bg-success/10 text-success'
                    : 'bg-red-500/10 text-red-400'
                }`}
              >
                {status === 'success' ? (
                  <>
                    <HiCheckCircle className="h-5 w-5" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </>
                ) : (
                  <>
                    <HiXCircle className="h-5 w-5" />
                    Failed to send message. Please try again or email me directly.
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
