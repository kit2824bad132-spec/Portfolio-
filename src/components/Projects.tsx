import { ExternalLink, Github, Cpu, Users, ShoppingBag } from 'lucide-react';

const projects = [
  {
    icon: Cpu,
    title: 'AgroIntel-AI',
    subtitle: 'AI Powered Plant Disease Detection System',
    stack: ['React', 'Node.js', 'FastAPI', 'PyTorch'],
    color: 'red',
    description:
      'Microservices-based full-stack application for real-time plant disease detection using leaf images, powered by a ResNet-18 deep learning model.',
    points: [
      'Microservices architecture with async API communication',
      'ResNet-18 model via FastAPI for disease classification',
      'Responsive UI for image upload and result visualization',
      'Asynchronous frontend-backend communication for scalability',
    ],
    image: 'https://images.pexels.com/photos/1374294/pexels-photo-1374294.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://drive.google.com/file/d/1tHeEwJb72DP4Gv0TdJIPrDCRBv14oLKc/view?usp=sharing',
  },
  {
    icon: Users,
    title: 'Split',
    subtitle: 'Group Payment & Expense Splitting Platform',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
    color: 'rose',
    description:
      'Full-stack expense management platform enabling users to create groups, track expenses, and split payments with secure auth and modern UI.',
    points: [
      'Secure JWT authentication and session management',
      'Centralized state management with Redux',
      'Modern glassmorphism UI design',
      'Optimized MongoDB queries for performance',
    ],
    image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://drive.google.com/file/d/1DibE-zDwDhjnfLCKUms-_g9r3oZl7CE2/view?usp=drivesdk',
  },
  {
    icon: ShoppingBag,
    title: 'Menswear E-Commerce',
    subtitle: 'Full-Featured Fashion Shopping Platform',
    stack: ['React', 'Vite', 'Context API'],
    color: 'red',
    description:
      'Responsive e-commerce application with product browsing, advanced filtering, shopping cart, and checkout — built for performance and UX.',
    points: [
      'Product browsing with filtering and search',
      'Shopping cart with localStorage persistence',
      'Global state via React Context API',
      'Modular, reusable component architecture',
    ],
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const colorMap: Record<string, { tag: string; btn: string; dot: string; icon: string }> = {
  red: {
    tag: 'bg-red-50 text-red-700 border border-red-200',
    btn: 'bg-red-50 border border-red-200 text-red-600 hover:bg-red-100',
    dot: 'bg-red-500',
    icon: 'text-red-600',
  },
  rose: {
    tag: 'bg-rose-50 text-rose-700 border border-rose-200',
    btn: 'bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100',
    dot: 'bg-rose-500',
    icon: 'text-rose-600',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Work</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Real-world applications built end-to-end — from database design to deployed UI.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`project-card bg-white border border-gray-100 rounded-2xl overflow-hidden ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:flex`}
              >
                {/* Image */}
                <div className="md:w-2/5 h-52 md:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${p.color === 'red' ? 'from-red-500/20 to-transparent' : 'from-rose-500/20 to-transparent'}`} />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur border border-gray-100 flex items-center justify-center shadow-sm">
                    <Icon size={20} className={c.icon} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((t) => (
                      <span key={t} className={`px-2.5 py-0.5 rounded-full text-xs font-mono ${c.tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>

                  <ul className="space-y-2 mb-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-gray-500 text-sm">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href="https://github.com/kit2824bad132-spec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:text-gray-900 hover:border-gray-300 transition-all"
                    >
                      <Github size={15} /> Source
                    </a>
                    <a
                      href={p.demoUrl || '#'}
                      target={p.demoUrl ? '_blank' : undefined}
                      rel={p.demoUrl ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${c.btn}`}
                    >
                      <ExternalLink size={15} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
