import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  CornerDownLeft,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  personalInfo,
  workExperience,
  projects,
  skillCategories,
  achievements,
  education,
  certifications,
} from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-2 text-slate-300">
          <p className="text-emerald-400 font-bold">
            ╔═══════════════════════════════════════════════════════════════╗
          </p>
          <p className="text-emerald-400 font-bold">
            ║  KISHORE A — DEVELOPER CLI & INTERACTIVE PORTFOLIO CONSOLE   ║
          </p>
          <p className="text-emerald-400 font-bold">
            ╚═══════════════════════════════════════════════════════════════╝
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-emerald-400 font-semibold">help</span> to view available commands, or click any command shortcut below.
          </p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistoryList, setCommandHistoryList] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCommand: string) => {
    const cmd = rawCommand.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistoryList((prev) => [...prev, rawCommand]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-400">
              <div><span className="text-emerald-400 font-mono font-semibold">about</span> - Brief summary & background</div>
              <div><span className="text-emerald-400 font-mono font-semibold">skills</span> - Technical skills breakdown</div>
              <div><span className="text-emerald-400 font-mono font-semibold">projects</span> - Featured software projects</div>
              <div><span className="text-emerald-400 font-mono font-semibold">exp</span> - Work experience at Blastorz</div>
              <div><span className="text-emerald-400 font-mono font-semibold">edu</span> - College, degrees & CGPA</div>
              <div><span className="text-emerald-400 font-mono font-semibold">awards</span> - Hackathon wins (SIH, MSME, AETHER)</div>
              <div><span className="text-emerald-400 font-mono font-semibold">cert</span> - NPTEL & University certifications</div>
              <div><span className="text-emerald-400 font-mono font-semibold">contact</span> - Direct contact details</div>
              <div><span className="text-emerald-400 font-mono font-semibold">hire</span> - Open email to recruit Kishore</div>
              <div><span className="text-emerald-400 font-mono font-semibold">cat resume</span> - Print full text resume</div>
              <div><span className="text-emerald-400 font-mono font-semibold">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-emerald-400 font-semibold">{personalInfo.name} — {personalInfo.title}</p>
            <p className="text-slate-400 leading-relaxed">{personalInfo.bio}</p>
            <p className="text-cyan-400">Location: {personalInfo.location} | College: {personalInfo.college}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-3 text-xs text-slate-300">
            {skillCategories.map((cat) => (
              <div key={cat.id}>
                <span className="text-cyan-400 font-semibold">[{cat.name}]: </span>
                <span className="text-slate-400">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-3 text-xs text-slate-300">
            {projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900/80 border border-slate-800">
                <p className="text-emerald-400 font-semibold">{p.title} <span className="text-slate-500">({p.category})</span></p>
                <p className="text-slate-400 text-[11px] mt-0.5">{p.subtitle}</p>
                <p className="text-slate-300 mt-1">{p.description}</p>
                <p className="text-cyan-400 mt-1 text-[11px]">Stack: {p.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            {workExperience.map((exp) => (
              <div key={exp.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-emerald-400 font-bold">{exp.company} — {exp.role}</p>
                <p className="text-cyan-400 text-[11px]">{exp.period} | {exp.location}</p>
                <p className="text-slate-400 mt-1">{exp.description}</p>
                <ul className="list-disc list-inside mt-2 text-slate-300 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'edu':
      case 'education':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            {education.map((e) => (
              <div key={e.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-emerald-400 font-semibold">{e.institution}</p>
                <p className="text-slate-300">{e.degree} — <span className="text-cyan-400 font-bold">{e.score}</span></p>
                <p className="text-slate-500 text-[11px]">{e.period} | {e.location}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'awards':
      case 'hackathons':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            {achievements.map((a) => (
              <div key={a.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-amber-400 font-semibold">🏆 {a.title} ({a.year})</p>
                <p className="text-slate-400">{a.description}</p>
                {a.prize && <p className="text-emerald-400 font-bold">{a.prize}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'cert':
      case 'certifications':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            {certifications.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-200">{c.title}</span>
                <span className="text-cyan-400 font-mono text-[11px]">{c.issuer} ({c.year})</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Direct Contact Channels:</p>
            <p>📧 Email: <span className="text-emerald-400 font-mono">{personalInfo.email}</span></p>
            <p>📱 Phone: <span className="text-emerald-400 font-mono">{personalInfo.phone}</span></p>
            <p>📍 Location: <span className="text-slate-300">{personalInfo.location}</span></p>
            <p>🔗 LinkedIn: <span className="text-blue-400">{personalInfo.socials.linkedin}</span></p>
            <p>🐙 GitHub: <span className="text-slate-300">{personalInfo.socials.github}</span></p>
          </div>
        );
        break;

      case 'hire':
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
        outputNode = (
          <div className="space-y-2 text-xs text-emerald-400">
            <p className="font-bold text-sm">🎉 Thank you for considering Kishore A for your team!</p>
            <p className="text-slate-300">
              Opening default email client to reach out to <span className="text-emerald-400 font-mono">{personalInfo.email}</span>...
            </p>
            <a
              href={`mailto:${personalInfo.email}?subject=Opportunity for Kishore A&body=Hi Kishore, We reviewed your portfolio and would like to discuss an opportunity.`}
              className="inline-block mt-2 px-3 py-1.5 rounded bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              Send Direct Email Now
            </a>
          </div>
        );
        break;

      case 'cat resume':
      case 'resume':
        outputNode = (
          <div className="space-y-3 text-xs text-slate-300 font-mono p-3 bg-slate-950 rounded border border-slate-800 max-h-96 overflow-y-auto">
            <p className="text-emerald-400 font-bold text-center text-sm">KISHORE A — RESUME</p>
            <p className="text-center text-slate-400">{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
            <p className="text-cyan-400 font-bold mt-2">=== EDUCATION ===</p>
            <p>• Sri Krishna College of Technology (B.E. CSE | CGPA: 8.21 / 10 | 2024 - 2028)</p>
            <p>• Sri Vijay Vidyalaya MHSS (Class 12: 92.00% | 2023 - 2024)</p>
            <p>• Sri Vivekananda Matriculation School (Class 10: 88.60% | 2021 - 2022)</p>
            <p className="text-cyan-400 font-bold mt-2">=== WORK EXPERIENCE ===</p>
            <p>• Blastorz — Software Engineer (Freelance)</p>
            <p className="text-cyan-400 font-bold mt-2">=== KEY PROJECTS ===</p>
            <p>• CodeStreak (Gamified Coding Practice & Streak System)</p>
            <p>• Gift Application (Management Platform with Role Access)</p>
            <p>• AETHER (AI-Based Autonomous Hiring System - Dev Hackathon Grand Finalist)</p>
            <p className="text-cyan-400 font-bold mt-2">=== ACHIEVEMENTS ===</p>
            <p>• MSME Hackathon 2025: Top 50 Teams</p>
            <p>• Smart India Hackathon 2025: Top 20 Teams</p>
            <p>• Civil Showdown: 1st Place (PSG College)</p>
            <p>• Grand Finalist: Dev Hackathon [AETHER]</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: <span className="font-bold">"{rawCommand}"</span>. Type <span className="text-emerald-400 font-semibold cursor-pointer underline" onClick={() => handleCommand('help')}>help</span> to view available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: rawCommand,
        output: outputNode,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistoryList.length > 0) {
        const nextIndex =
          historyIndex === -1
            ? commandHistoryList.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistoryList[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistoryList.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistoryList[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`bg-[#0A0E17] border border-slate-700 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 font-mono ${
          isMaximized
            ? 'w-full h-full max-w-none rounded-none'
            : 'w-full max-w-3xl h-[650px] max-h-[90vh]'
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0E1524] border-b border-slate-800 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
                title="Close"
              />
              <button
                onClick={() => handleCommand('clear')}
                className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors"
                title="Clear screen"
              />
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
                title="Maximize/Minimize"
              />
            </div>
            <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              kishore@terminal ~ zsh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
            >
              {isMaximized ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Command Suggestion Bar */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-500 shrink-0">Quick run:</span>
          {['help', 'skills', 'projects', 'exp', 'awards', 'cat resume', 'hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-emerald-500/10 hover:text-emerald-400 border border-slate-800 text-slate-300 shrink-0 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">kishore@portfolio:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 pt-1">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 bg-[#0E1524] border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs shrink-0">
            kishore@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. 'help', 'skills', 'projects', 'hire')..."
            className="flex-1 bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
