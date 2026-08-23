import React, { useState } from 'react';
import {
  ArrowRight,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Copy,
  Check,
  Award,
  Sparkles,
  Briefcase,
  Play,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  GraduationCap,
  ShieldCheck,
  Activity,
  ChevronRight,
  Flame,
  Globe,
  Database,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { personalInfo, projects, achievements } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

type MatrixTab = 'overview' | 'tech' | 'milestones' | 'diagnostics';

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<MatrixTab>('overview');
  const [isRunningDiag, setIsRunningDiag] = useState(false);
  const [diagMessage, setDiagMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleRunDiagnostics = () => {
    setIsRunningDiag(true);
    setDiagMessage(null);

    setTimeout(() => {
      setIsRunningDiag(false);
      setDiagMessage('✓ All subsystems operational: Full-Stack MERN, GenAI/RAG, and DSA engines ready for production deployment!');

      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#10B981', '#06B6D4', '#6366F1', '#F59E0B'],
      });
    }, 700);
  };

  const coreSkills = [
    { name: 'React 18 & Next.js', category: 'Frontend', level: 'Advanced' },
    { name: 'Node.js & Express', category: 'Backend', level: 'Production' },
    { name: 'Generative AI & RAG', category: 'AI/LLM', level: 'Specialized' },
    { name: 'Java & Python DSA', category: 'Algorithms', level: 'Problem Solver' },
    { name: 'MongoDB & Cloud SQL', category: 'Database', level: 'Scalable' },
    { name: 'REST APIs & JWT Auth', category: 'Security', level: 'Secure' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Ambient Glows with Motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-emerald-600/20 via-cyan-600/15 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          y: [-10, 15, -10],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          y: [15, -10, 15],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro, Bio, CTAs & Quick Info (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                Software Engineer & AI Developer
              </span>
              <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                B.E. CSE (CGPA 8.21)
              </span>
            </motion.div>

            {/* Main Headline with Animated Gradient */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.1]"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Kishore A
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-slate-300 font-medium"
              >
                Full-Stack Software Engineer & GenAI Builder
              </motion.p>
            </div>

            {/* Value Proposition / Summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Computer Science & Engineering student at{' '}
              <span className="text-slate-200 font-semibold">Sri Krishna College of Technology</span>{' '}
              with freelance software engineering experience at{' '}
              <span className="text-emerald-400 font-semibold">Blastorz</span>. Specializing in high-performance MERN applications, secure REST APIs, and generative AI systems (LLMs & RAG).
            </motion.p>

            {/* Quick Contact & Location Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-all group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-all group"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-cyan-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-emerald-500/30 text-emerald-400 font-mono text-sm transition-all hover:border-emerald-400/60 shadow-sm"
                title="Launch Developer Interactive Terminal (Cmd+K)"
              >
                <Terminal className="w-4 h-4" />
                <span>Open Terminal</span>
              </motion.button>
            </motion.div>

            {/* Social Profile Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <span className="text-xs font-mono text-slate-400">Find me on:</span>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-blue-400 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-amber-400 transition-all"
                title="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Sleek Interactive Engineering Architecture & Profile Matrix Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Outer glowing halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/25 via-cyan-500/25 to-indigo-500/25 rounded-3xl blur-xl opacity-75 animate-pulse-slow"></div>

              {/* Glassmorphic Engineering Hub Card */}
              <div className="relative bg-[#0D1424] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col justify-between">
                {/* Header: Engineer Hub Bar */}
                <div className="px-5 py-4 bg-[#090E1A] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-display font-black text-sm shadow-md shadow-emerald-500/20">
                      KA
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-display font-bold text-slate-100">
                          Kishore A
                        </h3>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          SKCT • CSE
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Software Engineer & AI Builder
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRunDiagnostics}
                    disabled={isRunningDiag}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition-all shadow-sm"
                    title="Execute live engineering diagnostics"
                  >
                    <Activity className={`w-3.5 h-3.5 text-emerald-400 ${isRunningDiag ? 'animate-spin' : ''}`} />
                    <span className="font-semibold">{isRunningDiag ? 'Running...' : 'Diagnostics'}</span>
                  </motion.button>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="flex items-center justify-between px-3 pt-2.5 bg-[#0A101D] border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-3 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
                        activeTab === 'overview'
                          ? 'bg-[#0D1424] text-emerald-400 border-t-2 border-emerald-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Overview</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('tech')}
                      className={`px-3 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
                        activeTab === 'tech'
                          ? 'bg-[#0D1424] text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Tech Matrix</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('milestones')}
                      className={`px-3 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
                        activeTab === 'milestones'
                          ? 'bg-[#0D1424] text-amber-400 border-t-2 border-amber-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Milestones</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('diagnostics')}
                      className={`px-3 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
                        activeTab === 'diagnostics'
                          ? 'bg-[#0D1424] text-indigo-400 border-t-2 border-indigo-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Telemetry</span>
                    </button>
                  </div>
                </div>

                {/* Tab Body Content */}
                <div className="p-5 min-h-[260px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        {/* Live Experience Highlight */}
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-xs font-semibold text-slate-100">
                                Software Engineer (Freelance)
                              </p>
                              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                Blastorz
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                              Engineered scalable REST APIs, authentication modules, and user-centric features.
                            </p>
                          </div>
                        </div>

                        {/* Core Competencies Chips */}
                        <div>
                          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                            Key Competencies:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {coreSkills.slice(0, 4).map((s) => (
                              <div
                                key={s.name}
                                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between"
                              >
                                <span className="text-xs text-slate-200 font-medium">{s.name}</span>
                                <span className="text-[10px] font-mono text-cyan-400">{s.level}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'tech' && (
                      <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 font-medium flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                              Full Stack Web (MERN / React / Node)
                            </span>
                            <span className="text-[11px] font-mono text-emerald-400">95%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 font-medium flex items-center gap-1.5">
                              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                              Generative AI, RAG & Vector Embeddings
                            </span>
                            <span className="text-[11px] font-mono text-cyan-400">90%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500 rounded-full w-[90%]" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 font-medium flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-indigo-400" />
                              Data Structures & Algorithms (Java / Python)
                            </span>
                            <span className="text-[11px] font-mono text-indigo-400">92%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full w-[92%]" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 font-medium flex items-center gap-1.5">
                              <Database className="w-3.5 h-3.5 text-amber-400" />
                              Database Systems & REST Architecture
                            </span>
                            <span className="text-[11px] font-mono text-amber-400">88%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full w-[88%]" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'milestones' && (
                      <motion.div
                        key="milestones"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-2.5"
                      >
                        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Award className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-slate-100 truncate">
                                Grand Finalist @ Dev Hackathon
                              </p>
                              <p className="text-[10px] text-slate-400">AETHER Autonomous AI Platform</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                            2025
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-slate-100 truncate">
                                SIH 2025 Top 20 Teams
                              </p>
                              <p className="text-[10px] text-slate-400">Hydes Nexus 2.0 • Smart India Hackathon</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 shrink-0">
                            National
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-slate-100 truncate">
                                1st Place Winner @ PSG Civil Showdown
                              </p>
                              <p className="text-[10px] text-slate-400">PSG Tech • Software Solution</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                            1st Place
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'diagnostics' && (
                      <motion.div
                        key="diagnostics"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <p className="text-[10px] font-mono text-slate-400">LATENCY</p>
                            <p className="text-sm font-mono font-bold text-emerald-400 mt-0.5">~12ms (Optimal)</p>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <p className="text-[10px] font-mono text-slate-400">TYPE SAFETY</p>
                            <p className="text-sm font-mono font-bold text-cyan-400 mt-0.5">100% Strict</p>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <p className="text-[10px] font-mono text-slate-400">DEGREE / CGPA</p>
                            <p className="text-sm font-mono font-bold text-indigo-400 mt-0.5">8.21 / 10</p>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                            <p className="text-[10px] font-mono text-slate-400">AVAILABILITY</p>
                            <p className="text-sm font-mono font-bold text-emerald-400 mt-0.5">Immediate / Open</p>
                          </div>
                        </div>

                        {diagMessage && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono leading-relaxed"
                          >
                            {diagMessage}
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Floating Metric Bento Row */}
                <div className="p-3 bg-[#090E1A] border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                  >
                    <p className="text-emerald-400 font-display font-bold text-lg">8.21</p>
                    <p className="text-[10px] text-slate-400 font-medium">B.E. CSE CGPA</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <p className="text-cyan-400 font-display font-bold text-lg">4+</p>
                    <p className="text-[10px] text-slate-400 font-medium">Hackathons</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                  >
                    <p className="text-indigo-400 font-display font-bold text-lg">MERN+AI</p>
                    <p className="text-[10px] text-slate-400 font-medium">Core Stack</p>
                  </motion.div>
                </div>

                {/* Live Engineering Status Footer */}
                <div className="px-4 py-3 bg-[#0B1120] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono text-slate-300">
                      Open to SDE Roles & AI Internships
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
                  >
                    <span>Connect</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

