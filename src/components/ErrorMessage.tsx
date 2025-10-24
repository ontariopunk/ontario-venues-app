import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 rounded-md my-4 flex flex-col sm:flex-row items-center justify-between" role="alert">
      <div>
        <p className="font-bold">Oops! Something went wrong.</p>
        <p>{message}</p>
      </div>
      <button
        onClick={onRetry}
        className="mt-3 sm:mt-0 sm:ml-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
