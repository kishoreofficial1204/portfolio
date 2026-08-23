import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HackathonsAndAchievements } from './components/HackathonsAndAchievements';
import { EducationCertifications } from './components/EducationCertifications';
import { InteractiveStreakWidget } from './components/InteractiveStreakWidget';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Global keyboard shortcut: Cmd+K / Ctrl+K opens Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setTerminalOpen(false);
        setResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 2. About & Engineering Philosophy */}
        <AboutSection />

        {/* 3. Technical Skills Matrix */}
        <SkillsSection />

        {/* 4. Industry Experience (Blastorz) */}
        <ExperienceSection />

        {/* 5. Featured Projects (CodeStreak, Gift App, AETHER, Hydes Nexus) */}
        <ProjectsSection />

        {/* 6. Gamified CodeStreak Interactive Challenge */}
        <InteractiveStreakWidget />

        {/* 7. Hackathons, Honors & Trophies */}
        <HackathonsAndAchievements />

        {/* 8. Education & Certifications */}
        <EducationCertifications />

        {/* 9. Contact & Message Dispatcher */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Modals */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
