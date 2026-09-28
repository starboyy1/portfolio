import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
} from 'react-icons/fa';
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

  const inputClass = `w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/40 ${
    isDark
      ? 'border-white/10 bg-dark text-text-primary-dark placeholder:text-text-secondary-dark'
      : 'border-black/10 bg-light text-text-primary-light placeholder:text-text-secondary-light'
  }`;

  const contactCards = [
    { icon: FaEnvelope, text: personal.email, href: `mailto:${personal.email}` },
    { icon: FaPhone, text: personal.phone, href: `tel:${personal.phone}` },
    { icon: FaMapMarkerAlt, text: personal.location },
    { icon: FaGlobe, text: 'tayyabmansoor.com', href: personal.website },
  ];

  return (
    <section
      id="contact"
      className={`noise-bg relative py-24 mesh-gradient ${
        isDark ? 'bg-surface-dark' : 'bg-surface-light'
      }`}
    >
      <div className="section-container relative z-10 grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
            Contact
          </span>
          <h2
            className={`mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold ${
              isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
            }`}
          >
            Let&apos;s work together
          </h2>
          <p
            className={`mt-4 max-w-md leading-relaxed ${
              isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
            }`}
          >
            Open to new opportunities — remote or Islamabad-based. Send a message or reach out
            directly.
          </p>

          <div className="mt-8 space-y-3">
            {contactCards.map(({ icon: Icon, text, href }) => (
              <div
                key={text}
                className={`flex items-center gap-4 rounded-lg border p-4 ${
                  isDark ? 'border-white/8 bg-dark/80' : 'border-black/6 bg-white/90'
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-primary/15 text-accent-primary">
                  <Icon className="h-4 w-4" />
                </div>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm transition-colors hover:text-accent-primary"
                  >
                    {text}
                  </a>
                ) : (
                  <span
                    className={`text-sm ${
                      isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'
                    }`}
                  >
                    {text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
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
                className={`rounded-md p-3 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-primary ${
                  isDark
                    ? 'text-text-secondary-dark hover:bg-accent-primary/10'
                    : 'text-text-secondary-light hover:bg-accent-primary/10'
                }`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className={`rounded-lg border p-6 sm:p-8 ${
              isDark ? 'border-white/8 bg-dark/90' : 'border-black/6 bg-white/95'
            }`}
          >
            <div className="space-y-4">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry' },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className={`mb-1.5 block text-sm font-medium ${
                      isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={form[field.id]}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className={`mb-1.5 block text-sm font-medium ${
                    isDark ? 'text-text-primary-dark' : 'text-text-primary-light'
                  }`}
                >
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
                className={`mt-4 flex items-center gap-2 rounded-md p-4 text-sm ${
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
                    Failed to send. Email me directly at {personal.email}.
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
