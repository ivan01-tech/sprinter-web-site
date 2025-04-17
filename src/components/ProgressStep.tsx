// src/components/ProgressSteps.tsx
import React from "react";

const ProgressSteps: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-8">
        {/* Étape 1 */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-black dark:text-white mb-2">
            ÉTAPE 1
          </span>
          <div className="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
        </div>

        {/* Ligne de connexion */}
        <div className="flex-1 h-0.5 bg-black dark:bg-white"></div>

        {/* Étape 2 */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-black dark:text-white mb-2">
            ÉTAPE 2
          </span>
          <div className="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
        </div>

        {/* Ligne de connexion */}
        <div className="flex-1 h-0.5 bg-black dark:bg-white"></div>

        {/* Étape 3 */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-black dark:text-white mb-2">
            ÉTAPE 3
          </span>
          <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;