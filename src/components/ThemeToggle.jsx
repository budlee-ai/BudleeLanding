import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '', showLabel = false }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder to avoid layout shift before client hydration
    return (
      <div
        className={`w-9 h-9 md:w-10 md:h-10 rounded-xl border border-transparent bg-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center justify-center gap-2 p-2 md:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer select-none
        ${isDark
          ? 'bg-gray-800/90 hover:bg-gray-700/90 text-amber-300 border-gray-700 shadow-sm hover:border-amber-400/50 hover:shadow-amber-500/10'
          : 'bg-white/90 hover:bg-gray-100/90 text-gray-700 border-gray-200 shadow-sm hover:border-gray-300 hover:text-gray-900'
        } ${className}`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`w-5 h-5 transition-all duration-300 ${
            isDark
              ? 'rotate-0 scale-100 text-amber-300'
              : '-rotate-90 scale-0 text-amber-500 absolute'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-5 h-5 transition-all duration-300 ${
            isDark
              ? 'rotate-90 scale-0 text-slate-400 absolute'
              : 'rotate-0 scale-100 text-slate-700'
          }`}
        />
      </div>

      {showLabel && (
        <span className="text-xs font-semibold capitalize">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
