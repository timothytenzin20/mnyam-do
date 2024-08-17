import React from 'react';

const GradientFillButton = ({ href }) => {
  return (
    <a href={href} className="group/button">
      <button className="relative overflow-hidden rounded-md border border-red-500/20 bg-flag-blue px-4 py-1 text-xs font-medium text-white transition-all duration-150 hover:border-red-500 active:scale-95">
        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-red-700 to-red-900 transition-all duration-500 group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
          Start Exploring
        </span>
      </button>
    </a>
  );
};

export default GradientFillButton;
