"use client"

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-xl border-1.5 transition-all relative overflow-hidden ${
        isDark 
          ? 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900' 
          : 'border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 hover:bg-gray-50'
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        className="relative z-10"
      >
        {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
