import { useState } from 'react';
import {
  LayoutDashboard, FolderOpen, Award, MessageSquare, Upload,
  LogOut, Plus, Pencil, Trash2, Code2, Menu, X, Eye,
  ChevronRight, FileUp, Wrench
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio, ProjectData, CertData } from '../context/PortfolioContext';

interface AdminDashboardProps {
  onLogout: () => void;
}

type View = 'overview' | 'projects' | 'certifications' | 'messages' | 'resume' | 'skills';



export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { projects, setProjects, certs, setCerts, skillGroups, setSkillGroups, messages } = usePortfolio();
  
  const [view, setView] = useState<View>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [resumeFile, setResumeFile] = useState<string | null>(null);

  const [editingProject, setEditingProject] = useState<ProjectData | null>(null);
  const [newProject, setNewProject] = useState({ title: '', stack: '', status: 'Live' });
  const [showAddProject, setShowAddProject] = useState(false);

  const [editingCert, setEditingCert] = useState<CertData | null>(null);
  const [newCert, setNewCert] = useState({ title: '', issuer: '' });
  const [showAddCert, setShowAddCert] = useState(false);

  // Skills CRUD
  const [editingSkill, setEditingSkill] = useState<{ groupId: number; index: number; value: string } | null>(null);
  const [newSkillInputs, setNewSkillInputs] = useState<Record<number, string>>({});

  const addSkill = (groupId: number) => {
    const val = (newSkillInputs[groupId] || '').trim();
    if (!val) return;
    setSkillGroups(prev => prev.map(g => g.id === groupId ? { ...g, skills: [...g.skills, val] } : g));
    setNewSkillInputs(prev => ({ ...prev, [groupId]: '' }));
  };

  const deleteSkill = (groupId: number, index: number) => {
    setSkillGroups(prev => prev.map(g => g.id === groupId ? { ...g, skills: g.skills.filter((_, i) => i !== index) } : g));
  };

  const saveSkill = () => {
    if (!editingSkill) return;
    const { groupId, index, value } = editingSkill;
    setSkillGroups(prev => prev.map(g => g.id === groupId
      ? { ...g, skills: g.skills.map((s, i) => i === index ? value : s) }
      : g
    ));
    setEditingSkill(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-authenticated');
    onLogout();
  };

  const addProject = () => {
    if (!newProject.title) return;
    setProjects(prev => [...prev, {
      id: Date.now(),
      iconName: 'Code2', // Default icon
      title: newProject.title,
      subtitle: '',
      stack: newProject.stack.split(',').map(s => s.trim()),
      accent: 'red',
      description: '',
      points: [],
      image: '',
      demoUrl: '',
      githubUrl: ''
    }]);
    setNewProject({ title: '', stack: '', status: 'Live' });
    setShowAddProject(false);
  };

  const deleteProject = (id: number) => setProjects(prev => prev.filter(p => p.id !== id));

  const saveProject = () => {
    if (!editingProject) return;
    setProjects(prev => prev.map(p => p.id === editingProject.id ? editingProject : p));
    setEditingProject(null);
  };

  const addCert = () => {
    if (!newCert.title) return;
    setCerts(prev => [...prev, { id: Date.now(), title: newCert.title, issuer: newCert.issuer, color: 'red' }]);
    setNewCert({ title: '', issuer: '' });
    setShowAddCert(false);
  };

  const deleteCert = (id: number) => setCerts(prev => prev.filter(c => c.id !== id));

  const saveCert = () => {
    if (!editingCert) return;
    setCerts(prev => prev.map(c => c.id === editingCert.id ? editingCert : c));
    setEditingCert(null);
  };

  const bg = isDark ? 'bg-[#0a0a0f]' : 'bg-slate-50';
  const sidebar = isDark ? 'bg-[#12121a] border-white/5' : 'bg-white border-gray-100';
  const card = isDark ? 'bg-[#16161f] border-[#1e1e2e]' : 'bg-white border-gray-100';
  const text = isDark ? 'text-slate-100' : 'text-gray-900';
  const muted = isDark ? 'text-slate-400' : 'text-gray-500';
  const inputCls = isDark
    ? 'bg-[#1a1a28] border-white/10 text-slate-100 placeholder-slate-600 focus:border-blue-500'
    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500';

  const navItems: { id: View; label: string; icon: typeof LayoutDashboard }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'resume', label: 'Resume', icon: Upload },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center gap-3 px-6 py-5 border-b ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
          <Code2 size={16} className="text-white" />
        </div>
        <div>
          <p className={`text-xs font-bold ${text}`}>Sabarivasan S</p>
          <p className={`text-xs ${muted}`}>Admin Dashboard</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => { setView(id); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              view === id
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20'
                : `${muted} hover:${text} ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`
            }`}
          >
            <Icon size={17} />
            {label}
            {view === id && <ChevronRight size={14} className="ml-auto" />}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className={`px-3 py-4 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
        >
          <LogOut size={17} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen flex ${bg} transition-colors duration-300`}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className={`absolute left-0 top-0 h-full w-64 border-r ${sidebar}`}>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className={`hidden md:flex flex-col w-64 border-r fixed h-full z-30 ${sidebar}`}>
        <SidebarContent />
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Top bar */}
        <div className={`sticky top-0 z-20 flex items-center gap-4 px-6 py-4 border-b ${isDark ? 'bg-[#0a0a0f]/90 border-white/5' : 'bg-white/90 border-gray-100'} backdrop-blur-md`}>
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} className={muted} />
          </button>
          <div>
            <h1 className={`text-lg font-bold ${text}`}>{navItems.find(n => n.id === view)?.label}</h1>
            <p className={`text-xs ${muted}`}>Manage your portfolio content</p>
          </div>
        </div>

        <div className="p-6">

          {/* ===== OVERVIEW ===== */}
          {view === 'overview' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Projects', value: projects.length, icon: FolderOpen, color: 'from-blue-600 to-blue-500' },
                  { label: 'Certifications', value: certs.length, icon: Award, color: 'from-violet-600 to-purple-500' },
                  { label: 'Messages', value: messages.length, icon: MessageSquare, color: 'from-blue-600 to-cyan-500' },
                  { label: 'Resume', value: resumeFile ? '✓' : '—', icon: FileUp, color: 'from-emerald-600 to-teal-500' },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className={`admin-card rounded-2xl border p-5 ${card}`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-lg`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <p className={`text-2xl font-bold ${text}`}>{value}</p>
                    <p className={`text-xs mt-1 ${muted}`}>{label}</p>
                  </div>
                ))}
              </div>

              <div className={`rounded-2xl border p-6 ${card}`}>
                <h2 className={`text-base font-bold mb-4 ${text}`}>Quick Actions</h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Add Project', action: () => { setView('projects'); setShowAddProject(true); } },
                    { label: 'Add Certification', action: () => { setView('certifications'); setShowAddCert(true); } },
                    { label: 'Edit Skills', action: () => setView('skills') },
                    { label: 'View Messages', action: () => setView('messages') },
                  ].map(({ label, action }) => (
                    <button
                      key={label}
                      onClick={action}
                      className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900/50 text-blue-600 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
                    >
                      {label}
                      <ChevronRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== PROJECTS ===== */}
          {view === 'projects' && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <p className={`text-sm ${muted}`}>{projects.length} projects</p>
                <button
                  onClick={() => setShowAddProject(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all"
                >
                  <Plus size={15} /> Add Project
                </button>
              </div>

              {showAddProject && (
                <div className={`rounded-2xl border p-5 ${card} animate-fade-in-up`}>
                  <h3 className={`font-bold mb-4 ${text}`}>New Project</h3>
                  <div className="space-y-3">
                    <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} />
                    <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} placeholder="Tech Stack (comma separated)" value={newProject.stack} onChange={e => setNewProject({ ...newProject, stack: e.target.value })} />
                    <div className="flex gap-2">
                      <button onClick={addProject} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all">Save</button>
                      <button onClick={() => setShowAddProject(false)} className={`px-4 py-2 rounded-xl border text-sm ${muted} ${isDark ? 'border-white/10' : 'border-gray-200'} hover:opacity-80`}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}

              {projects.map(p => (
                <div key={p.id} className={`rounded-2xl border p-5 ${card}`}>
                  {editingProject?.id === p.id ? (
                    <div className="space-y-3">
                      <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} value={editingProject.title} onChange={e => setEditingProject({ ...editingProject, title: e.target.value })} />
                      <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} value={editingProject.stack.join(', ')} onChange={e => setEditingProject({ ...editingProject, stack: e.target.value.split(',').map(s => s.trim()) })} />
                      <div className="flex gap-2">
                        <button onClick={saveProject} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all">Save</button>
                        <button onClick={() => setEditingProject(null)} className={`px-4 py-2 rounded-xl border text-sm ${muted} ${isDark ? 'border-white/10' : 'border-gray-200'}`}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`font-semibold ${text}`}>{p.title}</p>
                        <p className={`text-xs mt-1 ${muted}`}>{p.stack.join(', ')}</p>
                        <span className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">Live</span>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button onClick={() => setEditingProject(p)} className={`p-2 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} text-blue-500 transition-all`}><Pencil size={15} /></button>
                        <button onClick={() => deleteProject(p.id)} className={`p-2 rounded-lg ${isDark ? 'hover:bg-blue-950/30' : 'hover:bg-blue-50'} text-blue-500 transition-all`}><Trash2 size={15} /></button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== CERTIFICATIONS ===== */}
          {view === 'certifications' && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <p className={`text-sm ${muted}`}>{certs.length} certifications</p>
                <button onClick={() => setShowAddCert(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all">
                  <Plus size={15} /> Add Cert
                </button>
              </div>

              {showAddCert && (
                <div className={`rounded-2xl border p-5 ${card} animate-fade-in-up`}>
                  <h3 className={`font-bold mb-4 ${text}`}>New Certification</h3>
                  <div className="space-y-3">
                    <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} placeholder="Certificate Title" value={newCert.title} onChange={e => setNewCert({ ...newCert, title: e.target.value })} />
                    <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} placeholder="Issuing Organization" value={newCert.issuer} onChange={e => setNewCert({ ...newCert, issuer: e.target.value })} />
                    <div className="flex gap-2">
                      <button onClick={addCert} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all">Save</button>
                      <button onClick={() => setShowAddCert(false)} className={`px-4 py-2 rounded-xl border text-sm ${muted} ${isDark ? 'border-white/10' : 'border-gray-200'}`}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {certs.map(c => (
                  <div key={c.id} className={`rounded-2xl border p-5 ${card}`}>
                    {editingCert?.id === c.id ? (
                      <div className="space-y-3">
                        <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} value={editingCert.title} onChange={e => setEditingCert({ ...editingCert, title: e.target.value })} />
                        <input className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`} value={editingCert.issuer} onChange={e => setEditingCert({ ...editingCert, issuer: e.target.value })} />
                        <div className="flex gap-2">
                          <button onClick={saveCert} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all">Save</button>
                          <button onClick={() => setEditingCert(null)} className={`px-4 py-2 rounded-xl border text-sm ${muted} ${isDark ? 'border-white/10' : 'border-gray-200'}`}>Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <div>
                          <Award size={16} className="text-blue-500 mb-2" />
                          <p className={`font-semibold text-sm ${text}`}>{c.title}</p>
                          <p className={`text-xs mt-1 ${muted}`}>{c.issuer}</p>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => setEditingCert(c)} className={`p-2 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} text-blue-500 transition-all`}><Pencil size={14} /></button>
                          <button onClick={() => deleteCert(c.id)} className={`p-2 rounded-lg ${isDark ? 'hover:bg-blue-950/30' : 'hover:bg-blue-50'} text-blue-500 transition-all`}><Trash2 size={14} /></button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== SKILLS ===== */}
          {view === 'skills' && (
            <div className="space-y-5 animate-fade-in-up">
              <p className={`text-sm ${muted}`}>{skillGroups.length} skill categories</p>
              {skillGroups.map(group => (
                <div key={group.id} className={`rounded-2xl border p-5 ${card}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench size={15} className="text-blue-500" />
                    <h3 className={`font-bold text-sm ${text}`}>{group.category}</h3>
                    <span className={`ml-auto text-xs ${muted}`}>{group.skills.length} skills</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        {editingSkill?.groupId === group.id && editingSkill?.index === idx ? (
                          <div className="flex items-center gap-1">
                            <input
                              className={`px-2 py-1 rounded-lg border text-xs w-28 focus:outline-none focus:ring-1 focus:ring-blue-500 ${inputCls}`}
                              value={editingSkill.value}
                              onChange={e => setEditingSkill({ ...editingSkill, value: e.target.value })}
                            />
                            <button onClick={saveSkill} className="px-2 py-1 rounded-lg bg-blue-600 text-white text-xs">✓</button>
                            <button onClick={() => setEditingSkill(null)} className={`px-2 py-1 rounded-lg border text-xs ${muted} ${isDark ? 'border-white/10' : 'border-gray-200'}`}>✕</button>
                          </div>
                        ) : (
                          <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                            isDark ? 'bg-blue-950/30 text-blue-400 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}>
                            {skill}
                            <button onClick={() => setEditingSkill({ groupId: group.id, index: idx, value: skill })} className="text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={10} /></button>
                            <button onClick={() => deleteSkill(group.id, idx)} className="text-blue-400 hover:text-blue-600 transition-colors"><X size={10} /></button>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Add new skill */}
                  <div className="flex gap-2">
                    <input
                      className={`flex-1 px-3 py-2 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputCls}`}
                      placeholder={`Add skill to ${group.category}...`}
                      value={newSkillInputs[group.id] || ''}
                      onChange={e => setNewSkillInputs(prev => ({ ...prev, [group.id]: e.target.value }))}
                      onKeyDown={e => e.key === 'Enter' && addSkill(group.id)}
                    />
                    <button
                      onClick={() => addSkill(group.id)}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all"
                    >
                      <Plus size={13} /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===== MESSAGES ===== */}
          {view === 'messages' && (
            <div className="space-y-4 animate-fade-in-up">
              <p className={`text-sm ${muted}`}>{messages.length} messages received</p>
              {messages.map(m => (
                <div key={m.id} className={`rounded-2xl border p-5 ${card}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                        {m.name[0]}
                      </div>
                      <div>
                        <p className={`font-semibold text-sm ${text}`}>{m.name}</p>
                        <p className={`text-xs ${muted}`}>{m.email}</p>
                      </div>
                    </div>
                    <span className={`text-xs ${muted}`}>{m.date}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{m.message}</p>
                  <div className="flex gap-2 mt-3">
                    <a href={`mailto:${m.email}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-xs font-medium hover:opacity-80 transition-all">
                      <Eye size={12} /> Reply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===== RESUME ===== */}
          {view === 'resume' && (
            <div className="space-y-4 animate-fade-in-up">
              <div className={`rounded-2xl border p-8 ${card} text-center`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                  <FileUp size={28} className="text-white" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${text}`}>Upload Resume</h3>
                <p className={`text-sm mb-6 ${muted}`}>Upload your latest resume (PDF format)</p>

                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) setResumeFile(file.name);
                    }}
                  />
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-dashed border-blue-300 text-blue-600 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all`}>
                    <Upload size={16} />
                    Choose File
                  </div>
                </label>

                {resumeFile && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 text-sm font-medium animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {resumeFile} uploaded successfully
                  </div>
                )}
              </div>

              <div className={`rounded-2xl border p-5 ${card}`}>
                <p className={`text-sm font-semibold mb-2 ${text}`}>Current Resume</p>
                <a
                  href="https://drive.google.com/file/d/1DeKhsV9okXe9p91lrFEfWbimhTQ8EFX-/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 text-sm hover:underline"
                >
                  <Eye size={14} /> View on Google Drive
                </a>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
