import React from 'react';
import { Zap } from 'lucide-react';
interface AnimatedCodeBlockProps {
  code: string;
}
const AnimatedCodeBlock: React.FC<AnimatedCodeBlockProps> = ({
  code
}) => {
  return <div className="relative">
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
          <code>{code}<span className="animate-pulse">|</span></code>
        </pre>
      </div>
      <div className="absolute -bottom-6 -right-6 bg-[#EBF214] text-white p-3 rounded-lg shadow-lg bg-[brand-secondary-700]">
        <Zap size={24} />
      </div>
    </div>;
};
export default AnimatedCodeBlock;