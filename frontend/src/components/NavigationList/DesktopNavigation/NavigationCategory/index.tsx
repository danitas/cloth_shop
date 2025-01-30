import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import Subcategories from '../../Subcategories';
import classes from './styles.module.scss';
import useGetSubcategories from '@hooks/api/useGetSubcategories.ts';

export type TSharedCategory = {
  _id: string;
  name: string;
};

type TCategoryProps = TSharedCategory & {
  isLastItem: boolean;
};

const NavigationCategory = ({ _id, name, isLastItem }: TCategoryProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const { data } = useGetSubcategories({ category_id: _id });

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const url = _id;

  return (
    <div
      className="flex items-center pb-4 lg:pb-8"
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={url} className={clsx(classes.dropDownTitle)}>
        {name}
        {data?.length && (
          <ChevronDown
            size="13"
            className={clsx(
              'ml-2 transition-transform duration-300 ease-in-out',
              isDropdownVisible ? 'rotate-0' : 'rotate-180'
            )}
          />
        )}
      </a>
      <Subcategories
        subCategories={data}
        isLastItem={isLastItem}
        isVisible={isDropdownVisible}
      />
    </div>
  );
};

export default NavigationCategory;
