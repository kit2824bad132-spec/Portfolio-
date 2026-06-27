import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-red-100 bg-red-50/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
          <Code2 size={14} className="text-white" />
        </div>
        <span className="text-gray-600 text-sm font-medium">SabariVasan S</span>
      </div>
    </footer>
  );
}
