import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Code2, ArrowLeft, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

export default function AdminLogin({ onLogin, onBack }: AdminLoginProps) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call delay
    await new Promise(r => setTimeout(r, 900));

    if (email === 'admin@portfolio.com' && password === 'admin@123') {
      if (remember) {
        localStorage.setItem('admin-remembered', 'true');
        localStorage.setItem('admin-email', email);
      }
      localStorage.setItem('admin-authenticated', 'true');
      onLogin();
    } else {
      setError('Invalid credentials. Try admin@portfolio.com / admin@123');
    }
    setLoading(false);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-all duration-300 ${
      isDark ? 'bg-[#0a0a0f]' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-blue-50'
    }`}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${isDark ? 'bg-blue-950/20' : 'bg-blue-100/30'} rounded-bl-full blur-3xl`} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Back button */}
      <button
        onClick={onBack}
        className={`absolute top-6 left-6 flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 ${
          isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </button>

      {/* Card */}
      <div className={`relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up ${
        isDark
          ? 'bg-[#12121a] border border-white/5'
          : 'bg-white/80 backdrop-blur-xl border border-white/60'
      }`}>
        {/* Top gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400" />

        <div className="p-8 sm:p-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Code2 size={20} className="text-white" />
            </div>
            <div>
              <p className={`text-xs font-medium uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>Sabarivasan S</p>
              <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Admin Portal</p>
            </div>
          </div>

          <h1 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Welcome back</h1>
          <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Sign in to manage your portfolio.</p>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2 mb-5 px-4 py-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-blue-600 text-sm animate-fade-in-up">
              <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Email Address</label>
              <div className="relative">
                <Mail size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-gray-400'}`} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@portfolio.com"
                  required
                  className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${
                    isDark
                      ? 'bg-[#1a1a28] border border-white/10 text-white placeholder-slate-600'
                      : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-300'
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className={`block text-xs font-semibold mb-2 uppercase tracking-wide ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Password</label>
              <div className="relative">
                <Lock size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-gray-400'}`} />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`w-full pl-10 pr-12 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${
                    isDark
                      ? 'bg-[#1a1a28] border border-white/10 text-white placeholder-slate-600'
                      : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-gray-400 hover:text-gray-700'}`}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                    remember
                      ? 'bg-blue-600 border-blue-600'
                      : isDark ? 'border-slate-600 bg-transparent' : 'border-gray-300 bg-white'
                  }`}>
                    {remember && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                onClick={() => alert('Password reset link sent to your email!')}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm
                hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-blue-500/25
                disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>

          <p className={`mt-8 text-center text-xs ${isDark ? 'text-slate-600' : 'text-gray-400'}`}>
            Protected admin area · Sabarivasan S Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
