import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Layers,
  Cpu,
  Award,
  CheckCircle,
  X,
  Copy,
  Check,
  Terminal,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', 'Full Stack', 'AI & ML', 'Hackathon'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Full-stack MERN systems, generative AI pipelines, and award-winning hackathon architectures.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#0D1424] border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-2xl group"
              >
                <div>
                  {/* Top Bar: Category Chip & Links */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900 text-emerald-400 border border-slate-800">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.a
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl || 'https://github.com'}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Metrics Pill Grid */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-slate-900/80 border border-slate-800/80 rounded-lg p-2 text-center"
                        >
                          <p className="text-[10px] text-slate-400">{m.label}</p>
                          <p className="text-xs font-mono font-semibold text-slate-200 mt-0.5 truncate">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Highlight Bullets */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Deep Dive Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5 group-hover:border-emerald-500/30"
                  >
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Project Architecture & Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0B1120] border border-slate-700 w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Engineering Blueprint
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Problem & Solution */}
              {selectedProject.problemStatement && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-1.5">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    The Problem & Motivation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.problemStatement}
                  </p>
                </div>
              )}

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Key Technical Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Details if present */}
              {selectedProject.architecture && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    System Architecture & Data Flow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.architecture.map((arch, archIdx) => (
                      <div
                        key={archIdx}
                        className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono"
                      >
                        {arch}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet if present */}
              {selectedProject.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-slate-300">
                        {selectedProject.codeSnippet.filename}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        selectedProject.codeSnippet &&
                        handleCopyCode(selectedProject.codeSnippet.code)
                      }
                      className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-400 px-2 py-1 rounded bg-slate-900 border border-slate-800"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">
                    <code>{selectedProject.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Technologies */}
              <div className="pt-2 border-t border-slate-800">
                <p className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-medium"
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl || 'https://github.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
