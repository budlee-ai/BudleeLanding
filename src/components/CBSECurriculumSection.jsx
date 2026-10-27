import React, { useState } from 'react';
import { FlaskConical, Sparkles, CheckCircle2 } from 'lucide-react';
import { curriculumData } from '../data/mock.js';

const CBSECurriculumSection = () => {
  const [selectedBoardId, setSelectedBoardId] = useState('cbse');

  const boards = curriculumData.boards || [
    { id: 'cbse', name: 'CBSE', tag: 'Central Board' },
    { id: 'kerala', name: 'Kerala', tag: 'State Syllabus' },
    { id: 'tamilnadu', name: 'Tamil Nadu', tag: 'State Board' },
    { id: 'karnataka', name: 'Karnataka', tag: 'State Board' },
    { id: 'andhra', name: 'Andhra Pradesh', tag: 'State Board' },
    { id: 'telangana', name: 'Telangana', tag: 'State Board' },
    { id: 'maharashtra', name: 'Maharashtra State Board', tag: 'State Board' },
    { id: 'gujarat', name: 'Gujarat', tag: 'State Board' }
  ];

  const subjectLabel = curriculumData.subject || 'Science (Physics, Chemistry, Biology)';

  return (
    <section 
      aria-label="Supported Curricula and Grades"
      className="w-full bg-gradient-to-b from-white via-emerald-50/20 to-white py-6 md:py-8 px-4 md:px-12 lg:px-20 border-t border-b border-gray-100 relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Row: Aligned With + Science Subject Badge & Grades 6-10 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 mb-5 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md border border-emerald-200/60 flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Now Live
            </span>
            <h3 className="text-gray-800 font-bold text-base md:text-lg lg:text-xl">
              Aligned with <span className="gradient-text font-extrabold">CBSE & 7 State Syllabuses</span>
            </h3>
          </div>

          {/* Science Badge + Grades 6 to 10 */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-emerald-200/80 shadow-xs px-3.5 py-1.5 rounded-full">
            <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <FlaskConical className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            </div>
            <span className="text-xs md:text-sm font-bold text-gray-700 whitespace-nowrap">
              {subjectLabel}
            </span>
            <span className="text-gray-300 font-light">•</span>
            <span className="text-xs md:text-sm font-extrabold text-emerald-700 whitespace-nowrap">
              Grades 6–10
            </span>
          </div>
        </div>

        {/* Board Selection Pills (Horizontal Touch-Scroll on Mobile, Wrap on Desktop) */}
        <div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide pt-1 px-1 -mx-1">
            {boards.map((board) => {
              const isSelected = board.id === selectedBoardId;
              return (
                <button
                  key={board.id}
                  type="button"
                  onClick={() => setSelectedBoardId(board.id)}
                  className={`flex-shrink-0 group relative px-3.5 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer border select-none ${
                    isSelected
                      ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 border-emerald-400 scale-[1.02]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900 shadow-2xs'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-1.5">
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/90 shrink-0" />
                    )}
                    <span>{board.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CBSECurriculumSection;