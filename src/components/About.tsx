import { User, GraduationCap, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { label: 'Projects', value: '3+' },
  { label: 'Certifications', value: '8+' },
  { label: 'Hackathons', value: '2' },
  { label: 'GPA', value: '7.0' },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 px-6 ${isDark ? 'bg-[#0d0d14]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: image + stats */}
          <div className="relative reveal">
            <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
              <div className={`absolute inset-0 rounded-full border border-dashed animate-spin-slow ${
                isDark ? 'border-red-800/50' : 'border-red-200'
              }`} />
              <div
                className={`absolute -inset-4 rounded-full border border-dashed ${
                  isDark ? 'border-rose-900/30' : 'border-rose-100'
                }`}
                style={{ animation: 'spin 30s linear infinite reverse' }}
              />
              <div className={`absolute inset-4 rounded-full overflow-hidden border ${
                isDark ? 'border-red-900/40' : 'border-red-100'
              }`}>
                <img
                  src="/profile.jpg"
                  alt="Sabarivasan S"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`border rounded-xl p-3 text-center transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-[#16161f] border-[#1e1e2e] hover:border-red-900'
                      : 'bg-red-50 border-red-100 hover:border-red-300'
                  }`}
                >
                  <p className="text-red-500 font-bold text-xl">{s.value}</p>
                  <p className={`text-xs mt-1 leading-tight ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="reveal">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 section-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Who I Am
            </h2>
            <div className={`mt-8 space-y-4 text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              <p>
                I'm a motivated B.Tech student specializing in{' '}
                <span className="text-red-500 font-medium">Artificial Intelligence & Data Science</span>{' '}
                at Kalaignar Karunanidhi Institute of Technology, Coimbatore.
              </p>
              <p>
                With hands-on experience building full-stack web applications and AI-powered
                systems, I love turning complex problems into elegant, scalable solutions.
                My tech stack spans from React frontends to FastAPI microservices and
                PyTorch-based deep learning models.
              </p>
              <p>
                Beyond coding, I'm an active competitive programmer on LeetCode, CodeChef, and
                Codeforces — constantly sharpening my problem-solving skills with DSA challenges.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                { icon: GraduationCap, text: 'B.Tech AI & Data Science — KIT, Coimbatore' },
                { icon: Zap, text: 'Full-Stack & AI/ML Development' },
                { icon: User, text: 'Competitive Programmer & Hackathon Participant' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-red-950/40 border-red-800/50' : 'bg-red-50 border-red-100'
                  }`}>
                    <Icon size={15} className="text-red-500" />
                  </div>
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
