import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-dark text-text-primary-dark' : 'bg-light text-text-primary-light'
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
