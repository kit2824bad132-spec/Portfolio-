import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

type AppView = 'portfolio' | 'login' | 'dashboard';

export default function App() {
  const [view, setView] = useState<AppView>(() => {
    return localStorage.getItem('admin-authenticated') === 'true' ? 'dashboard' : 'portfolio';
  });

  useEffect(() => {
    // Secret keyboard shortcut: Ctrl + Shift + A
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setView('login');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  return (
    <ThemeProvider>
      <PortfolioProvider>
        {view === 'login' && (
          <AdminLogin
            onLogin={() => setView('dashboard')}
            onBack={() => setView('portfolio')}
          />
        )}
        {view === 'dashboard' && (
          <AdminDashboard onLogout={() => setView('portfolio')} />
        )}
        {view === 'portfolio' && (
          <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
            <Navbar onAdminClick={() => setView('login')} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </PortfolioProvider>
    </ThemeProvider>
  );
}
