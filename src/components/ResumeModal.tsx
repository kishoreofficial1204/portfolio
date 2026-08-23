import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
} from 'lucide-react';
import {
  personalInfo,
  workExperience,
  education,
  skillCategories,
  projects,
  achievements,
  certifications,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const resumeMd = `# KISHORE A
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
[LinkedIn](${personalInfo.socials.linkedin}) | [GitHub](${personalInfo.socials.github}) | [LeetCode](${personalInfo.socials.leetcode})

## EDUCATION
- **Sri Krishna College of Technology**, Coimbatore, India
  Bachelor of Engineering – Computer Science & Engineering | CGPA: 8.21 / 10 (2024 – 2028)
- **Sri Vijay Vidyalaya Matriculation Higher Secondary School**, Hosur, India
  Class 12: 92.00% (2023 – 2024)
- **Sri Vivekananda Matriculation School**, Vaniyambadi, India
  Class 10: 88.60% (2021 – 2022)

## WORK EXPERIENCE
**Blastorz** | Software Engineer (Freelance)
- Developed & enhanced web applications by implementing new features, fixing bugs, and improving existing functionality.
- Built and integrated REST APIs and backend services to support application features and data flow.
- Collaborated with development team to write maintainable code, test features, and deploy software updates.

## TECHNICAL SKILLS
- **Languages:** Java, Python, C, C++, JavaScript, TypeScript, SQL, HTML, CSS
- **Frameworks & Libraries:** React.js, Node.js, Express.js, Spring Boot, FastAPI, Tailwind CSS, Mongoose, Axios
- **Databases:** MySQL, MongoDB, PostgreSQL, Oracle SQL, SQLite
- **AI & Machine Learning:** LLMs, Retrieval-Augmented Generation (RAG), Prompt Engineering, Gemini API
- **Cloud & Development Tools:** AWS, Git, GitHub, Postman, Swagger, VirtualBox, Kali Linux
- **Testing:** Selenium, JUnit, TestNG, API Testing, Unit Testing
- **Core CS Concepts:** Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks

## PROJECTS
- **CodeStreak | Gamified Coding Practice & Progress Tracking Platform**
  Technologies: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios, Chart.js
- **Gift Application | Gift Provider Application Management Platform**
  Technologies: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios, Chart.js
- **Earth Material Operating System (EMOS) | AI-Powered Material Intelligence Platform**
  Technologies: React.js, TypeScript, Vite, Tailwind CSS, Node.js, Express.js, Google Gemini API, RAG, JWT, bcrypt

## ACHIEVEMENTS
- MSME Hackathon 2025: Top 50 teams, MSME Internal Hackathon at SKCT [Hydes Nexus]
- Smart India Hackathon 2025: Top 20 teams, SIH Internal Hackathon at SKCT [Hydes Nexus 2.0]
- Civil Showdown: 1st Place, Technical Skills at PSG (Prize: Rs. 2000)
- Grand Finalist: Dev Hackathon – AI-based Autonomous Hiring & Talent Management System [AETHER]

## CERTIFICATIONS
- Python for Data Science @ NPTEL (2025)
- SoftSkill Development @ NPTEL (2024)
- Advanced Diploma in Java Programming (ADJP) @ CSC Computer Software College (2024)
- Certificate in Computer Basics (SUITS) @ Bharathidasan University (2018)
- Certificate in Office Automation (SUITS) @ Bharathidasan University (2019)
`;
    navigator.clipboard.writeText(resumeMd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1120] border border-slate-700 w-full max-w-4xl max-h-[94vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-[#0F172A] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span className="font-display font-semibold text-slate-100 text-sm sm:text-base">
              Kishore A — Official Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Paper View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans text-xs sm:text-sm selection:bg-slate-200">
          {/* Resume Header */}
          <div className="text-center pb-4 border-b border-slate-400 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-serif uppercase">
              KISHORE A
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="font-semibold text-blue-700 hover:underline">LinkedIn</a>
              <span>|</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:underline">GitHub</a>
              <span>|</span>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="font-semibold text-amber-700 hover:underline">LeetCode</a>
              <span>|</span>
              <span className="font-mono">{personalInfo.email}</span>
              <span>|</span>
              <span className="font-mono">{personalInfo.phone}</span>
              <span>|</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">• Sri Krishna College of Technology</span>
                  <span className="text-slate-600 block sm:inline sm:ml-2">
                    Bachelor of Engineering – Computer Science & Engineering | <strong>CGPA: 8.21 / 10</strong> (As of 4th Semester)
                  </span>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-slate-700">Coimbatore, India</span>
                  <span className="block font-mono text-[11px] text-slate-600">2024 – 2028</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">• Sri Vijay Vidyalaya Matriculation Higher Secondary School</span>
                  <span className="text-slate-600 block sm:inline sm:ml-2">
                    Class 12: <strong>92.00%</strong>
                  </span>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-slate-700">Hosur, India</span>
                  <span className="block font-mono text-[11px] text-slate-600">2023 – 2024</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">• Sri Vivekananda Matriculation School</span>
                  <span className="text-slate-600 block sm:inline sm:ml-2">
                    Class 10: <strong>88.60%</strong>
                  </span>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-slate-700">Vaniyambadi, India</span>
                  <span className="block font-mono text-[11px] text-slate-600">2021 – 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
              WORK EXPERIENCE
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>
                  <a href="https://www.blastorz.fun" target="_blank" rel="noreferrer" className="hover:text-emerald-700 hover:underline">Blastorz</a>
                  {' '}| Software Engineer (Freelance)
                </span>
                <span className="text-xs text-slate-700">July 2026 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-800 text-xs">
                <li>Developed & enhanced web applications by implementing new features, fixing bugs, and improving existing application functionality.</li>
                <li>Built and integrated REST APIs and backend services to support application features and data flow.</li>
                <li>Collaborated with the development team to understand requirements, write maintainable code, test features, deploy software updates.</li>
              </ul>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <p>• <strong>Languages:</strong> Java, Python, C, C++, JavaScript, TypeScript, SQL, HTML, CSS</p>
              <p>• <strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Spring Boot, FastAPI, Tailwind CSS, Mongoose, Axios</p>
              <p>• <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL, Oracle SQL, SQLite</p>
              <p>• <strong>AI & Machine Learning:</strong> LLMs, Retrieval-Augmented Generation (RAG), Prompt Engineering, Gemini API</p>
              <p>• <strong>Cloud & Development Tools:</strong> AWS, Git, GitHub, Postman, Swagger, VirtualBox, Kali Linux</p>
              <p>• <strong>Testing:</strong> Selenium, JUnit, TestNG, API Testing, Unit Testing</p>
              <p>• <strong>Core CS Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks</p>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
              PROJECTS
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <a href="https://github.com/kishoreofficial1204/codestreak" target="_blank" rel="noreferrer" className="font-bold hover:text-emerald-700 hover:underline">CodeStreak | Gamified Coding Practice & Progress Tracking Platform</a>
                  <span className="text-xs font-semibold text-blue-700">GitHub</span>
                </div>
                <p className="text-[11px] text-slate-600 italic">
                  Technologies: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios, Chart.js
                </p>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-slate-800">
                  <li>Developed a full-stack coding practice platform enabling users to solve programming assignments, submit solutions, track progress, and maintain consistent coding streaks through a gamified experience.</li>
                  <li>Implemented JWT-based authentication, bcrypt password hashing, role-based access, and RESTful APIs with MongoDB/Mongoose for secure user, assignment, submission, and reward management.</li>
                  <li>Built gamification and analytics features including coding streaks, reward points, badges, leaderboards, wallet transactions, and interactive dashboard visualizations.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <a href="https://github.com/kishoreofficial1204/Gift_Application" target="_blank" rel="noreferrer" className="font-bold hover:text-emerald-700 hover:underline">Gift Application | Gift Provider Application Management Platform</a>
                  <span className="text-xs font-semibold text-blue-700">GitHub</span>
                </div>
                <p className="text-[11px] text-slate-600 italic">
                  Technologies: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios, Chart.js
                </p>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-slate-800">
                  <li>Engineered a full-stack MERN-style platform for coding practice/gift workflows, enabling assignment discovery, solution submission, progress tracking, and personalized coding streaks.</li>
                  <li>Developed secure authentication and REST APIs using JWT, bcrypt, Express.js, and MongoDB/Mongoose with role-based access for users and administrators.</li>
                  <li>Integrated a gamification system featuring reward points, streak tracking, badges, leaderboards, wallet transactions, and dashboard analytics to encourage consistent coding practice.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <a href="https://github.com/kishoreofficial1204/Earth-Material-Operating-System" target="_blank" rel="noreferrer" className="font-bold hover:text-emerald-700 hover:underline">Earth Material Operating System (EMOS) | AI-Powered Material Intelligence Platform</a>
                  <span className="text-xs font-semibold text-blue-700">GitHub</span>
                </div>
                <p className="text-[11px] text-slate-600 italic">
                  Technologies: React.js, TypeScript, Vite, Tailwind CSS, Node.js, Express.js, Google Gemini API, RAG, JWT, bcrypt
                </p>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-slate-800">
                  <li>Built an AI-powered platform that analyzes product images, materials, and condition to recommend sustainable lifecycle pathways such as Repair, Reuse, Remanufacture, or Recycle.</li>
                  <li>Developed a circular lifecycle decision engine using multi-criteria analysis (MCDA) and RAG-based knowledge retrieval to provide evidence-backed recommendations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-800">
              <li><strong>MSME Hackathon 2025:</strong> Top 50 teams, MSME Internal Hackathon at SKCT [Hydes Nexus]</li>
              <li><strong>Smart India Hackathon 2025:</strong> Top 20 teams, SIH Internal Hackathon at SKCT [Hydes Nexus 2.0]</li>
              <li><strong>Civil Showdown:</strong> 1st Place, Technical Skills at PSG (Prize: Rs. 2000)</li>
              <li><strong>Grand Finalist:</strong> Dev Hackathon – AI-based Autonomous Hiring & Talent Management System [AETHER]</li>
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-800">
              <li>SoftSkill Development @ NPTEL (2024)</li>
              <li>Python for Data Science @ NPTEL (2025)</li>
              <li>Advanced Diploma in Java Programming (ADJP) @ CSC Computer Software College (2024)</li>
              <li>Certificate in Computer Basics (SUITS) @ Bharathidasan University (2018)</li>
              <li>Certificate in Office Automation (SUITS) @ Bharathidasan University (2019)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
