
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface AnimatedCodeBlockProps {
  code: string;
  speed?: number;
}

const AnimatedCodeBlock: React.FC<AnimatedCodeBlockProps> = ({ code, speed = 30 }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => prev + code[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, code, speed]);

  return (
    <div className="relative">
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg">
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <div className="flex space-x-2 mr-auto">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono">lambda_function.py</div>
        </div>
        <pre className="font-mono text-sm text-gray-800 overflow-x-auto">
          <code>{displayedCode}</code>
          {!isComplete && <span className="animate-pulse">|</span>}
        </pre>
      </div>
      <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-3 rounded-lg shadow-lg">
        <Zap size={24} />
      </div>
    </div>
  );
};

export default AnimatedCodeBlock;
