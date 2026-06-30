import { Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';

export default function Certifications() {
  const { theme } = useTheme();
  const { certs } = usePortfolio();
  const isDark = theme === 'dark';

  const card = isDark ? 'bg-[#16161f] border-[#1e1e2e]' : 'bg-white border-gray-100';

  const getColors = (color: string) => {
    if (color === 'red') return {
      card: isDark ? 'hover:border-blue-800' : 'hover:border-blue-300 hover:shadow-blue-50',
      icon: isDark ? 'text-blue-400 bg-blue-950/50 border-blue-800/50' : 'text-blue-600 bg-blue-50 border-blue-200',
      badge: isDark ? 'bg-blue-950/40 text-blue-400 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200',
    };
    return {
      card: isDark ? 'hover:border-blue-800' : 'hover:border-blue-300 hover:shadow-blue-50',
      icon: isDark ? 'text-blue-400 bg-blue-950/50 border-blue-800/50' : 'text-blue-600 bg-blue-50 border-blue-200',
      badge: isDark ? 'bg-blue-950/40 text-blue-400 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200',
    };
  };

  return (
    <section id="certifications" className={`py-24 px-6 ${isDark ? 'bg-[#0d0d14]' : 'bg-blue-50/30'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            Continuous learning through structured courses and certification programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => {
            const c = getColors(cert.color);
            return (
              <div
                key={cert.title}
                className={`reveal group border rounded-2xl p-5 transition-all duration-300 hover:shadow-lg cursor-default ${card} ${c.card}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${c.icon}`}>
                  <Award size={18} />
                </div>
                <h3 className={`font-semibold text-sm leading-snug mb-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs border ${c.badge}`}>
                  {cert.issuer}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
