
import { ListProps } from './types';
import { Check, X } from 'lucide-react';

const List = ({ children, variant = "check" }: ListProps) => {
  return (
    <div className="flex items-center gap-3">
      {variant === "check" ? (
        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
      ) : (
        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
      )}
      <p className="text-base flex-1">{children}</p>
    </div>
  );
};

export default List;
