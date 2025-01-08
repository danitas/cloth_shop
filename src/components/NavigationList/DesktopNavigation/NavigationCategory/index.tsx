import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import Subcategories from '../../Subcategories';
import classes from './styles.module.scss';

export type TSharedCategory = {
  id: string;
  url: string;
  name: string;
};

type TCategoryProps = TSharedCategory & {
  subCategories?: TSharedCategory[];
  isLastItem: boolean;
};

const NavigationCategory = ({
  url,
  name,
  subCategories,
  isLastItem,
}: TCategoryProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div
      className="flex items-center pb-4 lg:pb-8"
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={url} className={clsx(classes.dropDownTitle)}>
        {name}
        {subCategories?.length && (
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
        subCategories={subCategories}
        isLastItem={isLastItem}
        isVisible={isDropdownVisible}
      />
    </div>
  );
};

export default NavigationCategory;
