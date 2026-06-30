import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'kit28.24bad132@gmail.com', href: 'mailto:kit28.24bad132@gmail.com', color: 'red' },
  { icon: Phone, label: 'Phone', value: '+91 7540061497', href: 'tel:+917540061497', color: 'rose' },
  { icon: MapPin, label: 'Location', value: 'Coimbatore, India', href: null, color: 'red' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/kit2824bad132-spec' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabarivasan-s-32484333a' },
  { icon: ExternalLink, label: 'LeetCode', href: 'https://leetcode.com/u/sabari_26/' },
];

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSend = () => {
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:kit28.24bad132@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setModalOpen(false);
    setForm({ name: '', email: '', message: '' });
  };

  const card = isDark ? 'bg-[#16161f] border-[#1e1e2e]' : 'bg-white border-gray-100';
  const inputCls = isDark
    ? 'bg-[#1a1a28] border-white/10 text-slate-100 placeholder-slate-600 focus:border-red-500 focus:ring-red-500/20'
    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-300 focus:border-red-400 focus:ring-red-100';

  const getIconCls = (color: string) => color === 'red'
    ? isDark ? 'text-red-400 bg-red-950/50 border-red-800/50' : 'text-red-600 bg-red-50 border-red-200'
    : isDark ? 'text-rose-400 bg-rose-950/50 border-rose-800/50' : 'text-rose-600 bg-rose-50 border-rose-200';

  const getValueCls = (color: string) => color === 'red'
    ? isDark ? 'text-red-400' : 'text-red-700'
    : isDark ? 'text-rose-400' : 'text-rose-700';

  return (
    <>
      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={`relative rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in-up ${
              isDark ? 'bg-[#16161f] border border-white/5' : 'bg-white'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                isDark ? 'text-slate-400 hover:text-red-400 hover:bg-red-950/30' : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <X size={18} />
            </button>

            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-gray-400'}`}>I'll get back to you as soon as possible.</p>

            <div className="space-y-4">
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${inputCls}`}
                  />
                </div>
              ))}
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Hi Sabari, I'd love to connect..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none ${inputCls}`}
                />
              </div>
            </div>

            <button
              onClick={handleSend}
              disabled={!form.name || !form.email || !form.message}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-red-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={15} /> Send Message
            </button>
          </div>
        </div>
      )}

      <section id="contact" className={`py-24 px-6 ${isDark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h2>
            <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              Open to internship opportunities, collaborative projects, and interesting conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal">
            {/* Left: info */}
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className={`group flex items-center gap-4 border rounded-2xl p-5 transition-all duration-300 ${card} ${
                    item.href ? 'cursor-pointer hover:shadow-sm' : ''
                  } ${item.color === 'red'
                    ? isDark ? 'hover:border-red-800' : 'hover:border-red-300'
                    : isDark ? 'hover:border-rose-800' : 'hover:border-rose-300'
                  }`}>
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${getIconCls(item.color)}`}>
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>{item.label}</p>
                      <p className={`text-sm font-medium ${getValueCls(item.color)}`}>{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? <a key={item.label} href={item.href}>{inner}</a> : <div key={item.label}>{inner}</div>;
              })}

              <div className="flex gap-3 pt-1">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 border rounded-xl text-sm font-medium transition-all ${card} ${
                      isDark
                        ? 'text-slate-400 hover:text-red-400 hover:border-red-800 hover:bg-red-950/20'
                        : 'text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50'
                    }`}
                  >
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-red-500/20"
              >
                <Send size={16} /> Send Message
              </button>
            </div>

            {/* Right: CTA card */}
            <div className={`border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden ${
              isDark ? 'bg-[#12121a] border-[#1e1e2e]' : 'bg-red-50 border-red-100'
            }`}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-red-200/20 dark:bg-red-900/10 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-rose-200/10 blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 flex items-center justify-center mb-6 text-lg font-bold text-white shadow-md shadow-red-300/30">
                  SS
                </div>
                <h3 className={`font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Open to Opportunities</h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  Looking for internships and entry-level roles in full-stack development
                  and AI/ML engineering. If you have an interesting project or opportunity,
                  I'd love to hear from you.
                </p>
                <div className="space-y-3">
                  {['Full-Stack Development', 'AI / ML Engineering', 'Competitive Programming', 'Open Source Collaboration'].map(item => (
                    <div key={item} className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative mt-8 pt-6 border-t ${isDark ? 'border-white/5' : 'border-red-200'}`}>
                <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-gray-400'}`}>
                  Based in Coimbatore, India · Available for remote & on-site roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
