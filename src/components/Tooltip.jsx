import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ title, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center ml-2 cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}
    >
      <HelpCircle className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-64 p-4 mt-2 text-sm text-slate-200 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl left-1/2 -translate-x-1/2 top-full"
          >
            {/* Kichik uchburchak (strelka) */}
            <div className="absolute w-3 h-3 bg-slate-800 border-t border-l border-slate-700 transform rotate-45 -top-1.5 left-1/2 -translate-x-1/2"></div>
            
            <h4 className="font-bold text-blue-400 mb-1">{title}</h4>
            <p className="leading-relaxed">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
