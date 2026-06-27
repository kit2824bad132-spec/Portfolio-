import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink, X } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kit28.24bad132@gmail.com',
    href: 'mailto:kit28.24bad132@gmail.com',
    color: 'red',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7540061497',
    href: 'tel:+917540061497',
    color: 'rose',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Coimbatore, India',
    href: null,
    color: 'red',
  },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/kit2824bad132-spec' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabarivasan-s-32484333a' },
  { icon: ExternalLink, label: 'LeetCode', href: 'https://leetcode.com/u/sabari_26/' },
];

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSend = () => {
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:kit28.24bad132@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setModalOpen(false);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Message Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-6">I'll get back to you as soon as possible.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Hi SabariVasan, I'd love to connect..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all resize-none"
                />
              </div>
            </div>

            <button
              onClick={handleSend}
              disabled={!form.name || !form.email || !form.message}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-red-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              Send Message
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let's Connect</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Open to internship opportunities, collaborative projects, and interesting conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: contact info */}
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className={`group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 transition-all duration-300 ${
                    item.href
                       ? `cursor-pointer ${item.color === 'red' ? 'hover:border-red-300' : 'hover:border-rose-300'} hover:shadow-sm`
                      : ''
                  }`}>
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                      item.color === 'red'
                        ? 'text-red-600 bg-red-50 border-red-200'
                        : 'text-rose-600 bg-rose-50 border-rose-200'
                    }`}>
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                      <p className={`text-sm font-medium ${
                        item.color === 'red' ? 'text-red-700' : 'text-rose-700'
                      }`}>{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>{inner}</a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}

              <div className="flex gap-3 pt-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== '#' ? '_blank' : undefined}
                    rel={href !== '#' ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-gray-500 text-sm font-medium hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>

              {/* Send Message Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-red-500/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>

            {/* Right: CTA card */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-red-200/30 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-rose-200/20 blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-6 text-xl font-bold text-white shadow-md shadow-red-300">
                  SV
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">Open to Opportunities</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  I'm currently looking for internships and entry-level roles in full-stack
                  development and AI/ML engineering. If you have an interesting project or
                  opportunity, I'd love to hear from you.
                </p>

                <div className="space-y-3">
                  {['Full-Stack Development', 'AI / ML Engineering', 'Competitive Programming', 'Open Source Collaboration'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 pt-6 border-t border-red-200">
                <p className="text-gray-400 text-xs">
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
