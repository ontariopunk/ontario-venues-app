import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary-500"></div>
      <p className="mt-4 text-lg font-semibold text-slate-600 dark:text-slate-300">Finding the best stages...</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">Powered by Gemini</p>
    </div>
  );
};

export default LoadingSpinner;
