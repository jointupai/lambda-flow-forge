
import { ListProps } from './types';

const List = ({ children }: ListProps) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};

export default List;
