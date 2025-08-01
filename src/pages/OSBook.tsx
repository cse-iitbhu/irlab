import React, { useState, useEffect } from 'react';
import book from "../assets/book.jpg"
import { 
  Book, 
  Download, 
  Search, 
  User, 
  Moon, 
  Sun, 
  FileText, 
  Quote,
  Mail,
  Share2,
  BookOpen,
  CheckCircle,
  Star,
  MessageCircle,
  ExternalLink,
  Eye,
  Filter,
  Globe
} from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  description: string;
  pages: number;
  fileSize: string;
  difficulty: string;
  downloadUrl: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export const OSBook: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const chapters: Chapter[] = [
  {
    id: 1,
    title: "Introduction to Operating Systems",
    description: "Introduces OS concepts, evolution, services, system calls, architectures, virtual machines, Unix/Windows case studies.",
    pages: 34,
    fileSize: "1.5 MB",
    difficulty: "Beginner",
    downloadUrl: "/irlab/os_book_chapters/CH1.pptx.pdf"
  },
  {
    id: 2,
    title: "Processes, Threads and their Scheduling",
    description: "Covers process and thread fundamentals, state transitions, PCBs, context switching, scheduling algorithms and metrics.",
    pages: 45,
    fileSize: "2.2 MB",
    difficulty: "Intermediate",
    downloadUrl: "/irlab/os_book_chapters/CH2.pptx.pdf"
  },
  {
    id: 3,
    title: "Interprocess Communication and Process Synchronization",
    description: "Explains process synchronization, critical section, semaphores, monitors, deadlock prevention, detection strategies.",
    pages: 39,
    fileSize: "1.7 MB",
    difficulty: "Intermediate",
    downloadUrl: "/irlab/os_book_chapters/CH3.pptx.pdf"
  },
  {
    id: 4,
    title: "Deadlocks",
    description: "Details main memory organization, paging, segmentation, virtual memory, page replacement algorithms.",
    pages: 23,
    fileSize: "1.0 MB",
    difficulty: "Advanced",
    downloadUrl: "/irlab/os_book_chapters/CH4.pptx.pdf"
  },
  {
    id: 5,
    title: "Memory Management",
    description: "Discusses mass storage, disk scheduling, file systems, directory implementation, allocation and free-space management.",
    pages: 40,
    fileSize: "1.6 MB",
    difficulty: "Advanced",
    downloadUrl: "/irlab/os_book_chapters/CH5.pptx.pdf"
  },
  {
    id: 6,
    title: "I/O Management",
    description: "Covers I/O systems, device drivers, protection schemes, security policies, basics of distributed operating systems.",
    pages: 38,
    fileSize: "1.4 MB",
    difficulty: "Advanced",
    downloadUrl: "/irlab/os_book_chapters/CH6.pptx.pdf"
  }
];

const faqs: FAQ[] = [
  {
    question: "Is this textbook suitable for beginners?",
    answer: "Yes. The opening unit explains what an operating system is, why it evolved and how it works ­in “the simplest possible way,” then each chapter adds new material with real-life analogies, summaries, “Know More” boxes and graded exercises, so first-time learners can build up to advanced topics step-by-step."
  },
  {
    question: "Is it possible to download the complete book at no cost?",
    answer: "Certainly! You can access and download the entire book without any charges or restrictions."
  },
  {
    question: "What sets apart this book from other books on same topics?",
    answer: "Every unit is linked to AICTE’s Outcome-Based Education framework through explicit CO-PO tables, giving teachers a ready-made toolkit while keeping learners’ progress centre-stage. Packed with Bloom-graded exercises, “Know More” boxes, QR-linked resources and recent GATE/UGC-NET questions, it guides readers from fundamentals to advanced topics in a concise, self-study-friendly way."
  },
  {
    question: "Can I use this book for commercial training?",
    answer: "The textbook is released under a Creative Commons Attribution-Non Commercial-ShareAlike 4.0 licence, which permits copying or adapting the material only for non-commercial teaching; any paid or corporate training would require advance written permission from AICTE."
  }
];

  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [userProgress, setUserProgress] = useState<number[]>([]);
  const [showCitation, setShowCitation] = useState(false);
  const [citationFormat, setCitationFormat] = useState('APA');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredChapters = chapters.filter(chapter => {
    const matchesSearch = chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chapter.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || chapter.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const toggleProgress = (chapterId: number) => {
    if (userProgress.includes(chapterId)) {
      setUserProgress(userProgress.filter(id => id !== chapterId));
    } else {
      setUserProgress([...userProgress, chapterId]);
    }
  };

  const getCitation = (format: string) => {
    const citations = {
      APA: "D. S. Pal, Operating Systems, New Delhi: All India Council for Technical Education, 2023.",
      MLA: "D. S. Pal, Operating Systems, New Delhi: All India Council for Technical Education, 2023.",
      IEEE: "D. S. Pal, Operating Systems, New Delhi: All India Council for Technical Education, 2023."
    };
    return citations[format as keyof typeof citations];
  };


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Operating Systems</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Fundamentals and Practice</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCitation(!showCitation)}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Quote className="h-4 w-4 inline mr-1" />
                Cite
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Citation Modal */}
      {showCitation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Citation Formats</h3>
              <button
                onClick={() => setShowCitation(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Format:</label>
                <select
                  value={citationFormat}
                  onChange={(e) => setCitationFormat(e.target.value)}
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="APA">APA</option>
                  <option value="MLA">MLA</option>
                  <option value="IEEE">IEEE</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Citation:</label>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{getCitation(citationFormat)}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-800 dark:to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OPERATING SYSTEMS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Concise outcome-based guide to operating-system fundamentals, processes, memory, and I/O
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="https://ekumbh.aicte-india.org/allbook.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Complete Book(from Official AICTE Website)
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
{/* Book Overview */}
<section className="mb-16">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About This Book</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              This book delivers a swift, outcome-mapped survey of OS evolution, processes and threads, CPU scheduling, memory, file and I/O management in six focused units.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Concise explanations pair with Bloom-levelled quizzes, worked examples, lab tasks and QR-linked resources, while plain language, analogies and UNIX-, Windows- and RTOS-based case studies make it equally handy for courses, exam prep or rapid professional refreshers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                First AICTE Edition
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                2023 Updated
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                249 Pages
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Outcome-based six-unit OS syllabus</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Bloom-graded quizzes, labs & QR links</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Unix, Windows & RTOS case studies</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">2023 AICTE-aligned edition</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Book Image */}
      <div className="flex justify-center items-start">
        <div className="w-full max-w-[225px]">
          <img 
            src={book}
            alt="Operating Systems Book Cover" 
            className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Search and Filter */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chapters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Table of Contents</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3"><b>Note:</b> The download links provided here correspond to the presentation slides.</p>
          <div className="space-y-4">
            {filteredChapters.map((chapter) => (
              <div key={chapter.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-3">
                        {chapter.id.toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {chapter.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {chapter.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                      <span>{chapter.pages} pages</span>
                      <span>{chapter.fileSize}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleProgress(chapter.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        userProgress.includes(chapter.id)
                          ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      title={userProgress.includes(chapter.id) ? 'Mark as unread' : 'Mark as read'}
                    >
                      <CheckCircle className="h-5 w-5" />
                    </button>
                    <a
                      href={chapter.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

{/* Author Biography */}
<section className="mb-16">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
      About the Author
    </h2>
    
    {/* Removed grid, made everything center-aligned */}
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <div className="w-32 h-32 rounded-full mb-4 overflow-hidden">
        <img 
          src="irlab/img/spalsir.jpg" 
          alt="Dr. Sukomal Pal" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Dr. Sukomal Pal
      </h3>
      
      <div className="text-blue-600 dark:text-blue-400 mb-3">
        <p>Associate Professor</p>
        <p>Department of Computer Science & Engineering, IIT (BHU)</p>
      </div>

      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 text-center">
        Dr. Sukomal Pal has authored AICTE's textbook "Operating Systems". With about two decades of teaching experience, he publishes on system-software topics and mentors both undergraduate and postgraduate researchers.
      </p>
      
      <div className="flex justify-center space-x-4">
        <a 
          href="https://www.iitbhu.ac.in/dept/cse/people/spalcse" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <User className="h-4 w-4 mr-1" />
          Profile
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
        <a 
          href="https://cse-iitbhu.github.io/irlab/spal.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <Globe className="h-4 w-4 mr-1" />
          Lab Page
          <ExternalLink className="h-3 w-3 ml-1" /> 
        </a>
      </div>
    </div>
  </div>
</section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default OSBook;
