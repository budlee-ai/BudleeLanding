import React, { useState, useMemo, useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { boardsData, curriculumSyllabus } from '../data/curriculumTopics';
import { BookOpen, Search, Sparkles, CheckCircle2, HelpCircle, ArrowRight, Atom, FlaskConical, Dna } from 'lucide-react';

const CurriculumPage = () => {
  const [selectedBoard, setSelectedBoard] = useState('cbse');
  const [selectedGrade, setSelectedGrade] = useState('10');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');

  useEffect(() => {
    mixpanel.track('Curriculum Page Viewed', { board: selectedBoard, grade: selectedGrade });
  }, [selectedBoard, selectedGrade]);

  const activeGradeData = curriculumSyllabus[selectedGrade] || curriculumSyllabus["10"];

  const filteredChapters = useMemo(() => {
    return activeGradeData.chapters.filter((chapter) => {
      const matchesSearch =
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.keyConcepts.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDiscipline = selectedDiscipline === 'All' || chapter.discipline === selectedDiscipline;
      return matchesSearch && matchesDiscipline;
    });
  }, [activeGradeData, searchTerm, selectedDiscipline]);

  const currentBoardObj = boardsData.find((b) => b.id === selectedBoard) || boardsData[0];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${currentBoardObj.name} Grade ${selectedGrade} Science Syllabus & AI Learning Guide`,
    "description": `Comprehensive syllabus outline, chapter summaries, key concepts, and AI tutoring for ${currentBoardObj.name} Grade ${selectedGrade} Science.`,
    "provider": {
      "@type": "Organization",
      "name": "Budlee AI",
      "sameAs": "https://budlee.ai"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online"
    }
  };

  const getDisciplineIcon = (discipline) => {
    switch (discipline) {
      case 'Physics':
        return <Atom className="w-4 h-4 text-sky-500" />;
      case 'Chemistry':
        return <FlaskConical className="w-4 h-4 text-amber-500" />;
      case 'Biology':
        return <Dna className="w-4 h-4 text-emerald-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <SEO
        title={`${currentBoardObj.name} Grade ${selectedGrade} Science Syllabus & Chapter Notes`}
        description={`Explore ${currentBoardObj.name} Grade ${selectedGrade} Science chapters, formulas, key concepts, and practice problems with Budlee AI personal voice tutor.`}
        canonical={`/curriculum`}
        schema={courseSchema}
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="pt-28 pb-12 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-emerald-50/60 via-white to-white dark:from-emerald-950/20 dark:via-gray-950 dark:to-gray-950 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Syllabus & Learning Directory</span>
            </span>
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {currentBoardObj.name} Grade {selectedGrade} <span className="gradient-text">Science Syllabus</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Step-by-step chapter guides, key definitions, and practice questions aligned with your official school board curriculum.
            </p>

            {/* Board Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {boardsData.map((board) => (
                <button
                  key={board.id}
                  onClick={() => setSelectedBoard(board.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    selectedBoard === board.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-400'
                  }`}
                >
                  {board.name}
                </button>
              ))}
            </div>

            {/* Grade Selector Pills */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {['10', '9', '8'].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    selectedGrade === grade
                      ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Grade {grade}
                </button>
              ))}
            </div>

            {/* Search & Discipline Filter Bar */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chapters, reactions, formulas, or concepts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>

              <div className="flex gap-1.5 justify-center">
                {['All', 'Physics', 'Chemistry', 'Biology'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDiscipline(d)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                      selectedDiscipline === d
                        ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapters Grid */}
        <section className="py-12 px-4 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {currentBoardObj.name} Grade {selectedGrade} Chapters ({filteredChapters.length})
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400">Aligned with {currentBoardObj.tag}</span>
          </div>

          {filteredChapters.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold">No chapters found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChapters.map((chapter, idx) => (
                <div
                  key={chapter.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {getDisciplineIcon(chapter.discipline)}
                        <span>{chapter.discipline}</span>
                      </span>
                      <span className="text-xs font-mono text-gray-400">Chapter {idx + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {chapter.summary}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                        Core Concepts
                      </span>
                      {chapter.keyConcepts.map((concept, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{concept}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-emerald-50/70 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40 mb-5">
                      <div className="flex items-start gap-2">
                        <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-emerald-900 dark:text-emerald-200 font-medium italic">
                          "{chapter.sampleQuestion}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://app.budlee.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white font-semibold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Ask Budlee AI About This Chapter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer
        ctaText="Start Learning on Budlee"
        ctaLink="https://app.budlee.ai"
        headline="Master your board exams with AI that actually understands you."
        subtext="Available on Web, iOS, and Android. Built for CBSE and State Board students."
      />
    </div>
  );
};

export default CurriculumPage;
