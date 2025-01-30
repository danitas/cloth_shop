import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import Subcategories from '../../Subcategories';
import classes from './styles.module.scss';
import { TCategory } from '@src/api/categories.ts';

type TCategoryProps = TCategory & {
  isLastItem: boolean;
};

const NavigationCategory = ({
  slug,
  name,
  isLastItem,
  subcategories,
}: TCategoryProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const url = `/category/${slug}`;

  return (
    <div
      className="flex items-center pb-4 lg:pb-8"
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={url} className={clsx(classes.dropDownTitle)}>
        {name}
        {subcategories.length && (
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
        subCategories={subcategories}
        isLastItem={isLastItem}
        isVisible={isDropdownVisible}
      />
    </div>
  );
};

export default NavigationCategory;
