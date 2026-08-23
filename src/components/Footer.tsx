import React from 'react';
import {
  ArrowUp,
  Heart,
  Code2,
  Terminal,
  FileText,
  Mail,
  Linkedin,
  Github,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070A12] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-display font-bold text-emerald-400 text-sm">
                K
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-slate-200 text-sm">
                Kishore A
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                B.E. CSE • Sri Krishna College of Technology
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-emerald-400 transition-colors">Achievements</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors">Resume</button>
            <button onClick={onOpenTerminal} className="hover:text-emerald-400 transition-colors">Terminal</button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-[11px]">Back to top</span>
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Kishore A. Built with React, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              All Systems Operational
            </span>
            <span>•</span>
            <span>Coimbatore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
