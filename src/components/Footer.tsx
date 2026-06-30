import { Code2, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t py-8 px-6 ${
      isDark ? 'bg-[#0a0a0f] border-white/5' : 'bg-blue-50/40 border-blue-100'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
            <Code2 size={13} className="text-white" />
          </div>
          <span className={`text-sm font-bold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Sabarivasan S</span>
        </div>

        <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Sabarivasan S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
