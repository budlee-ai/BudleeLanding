import React from 'react';
import { FlaskConical } from 'lucide-react';
import { curriculumData } from '../data/mock';

const CurriculumSection = () => {
  const boards = curriculumData.boards || [];
  const classes = curriculumData.classes || [];

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-3xl text-gray-800 font-bold mb-3">
            {curriculumData.title}{' '}
            <span className="gradient-text font-extrabold">{curriculumData.highlight}</span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto flex items-center justify-center gap-2">
            <FlaskConical className="w-4 h-4 text-emerald-600" />
            <span>Comprehensive {curriculumData.subject} across Grades 6 to 10</span>
          </p>
        </div>

        {/* Board Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {boards.map((b) => (
            <span
              key={b.id}
              className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-white border border-gray-200 text-gray-700 shadow-2xs"
            >
              {b.name}
            </span>
          ))}
        </div>

        {/* Class Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {classes.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl px-8 py-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 cursor-pointer min-w-[150px] transform hover:-translate-y-1"
            >
              <h4 className="text-emerald-600 font-bold text-lg md:text-xl mb-1 group-hover:text-emerald-700 transition-colors">
                {item.class}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">
                {item.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
