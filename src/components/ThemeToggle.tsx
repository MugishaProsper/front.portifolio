"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          p-2 rounded-lg transition-all duration-300 relative overflow-hidden
          ${isDark 
            ? 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
          }
        `}
        aria-label="Toggle theme"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-ai-primary/20 to-ai-secondary/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
