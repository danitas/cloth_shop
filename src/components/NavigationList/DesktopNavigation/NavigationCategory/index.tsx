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
  const [isChevronDown, setIsChevronDown] = useState(true);

  const toggleChevron = () => {
    setIsChevronDown(!isChevronDown);
  };

  return (
    <div
      className="group flex items-center"
      onMouseEnter={toggleChevron}
      onMouseLeave={toggleChevron}
    >
      <a href={url} className={clsx(classes.dropDownTitle)}>
        {name}
        {subCategories?.length && (
          <ChevronDown
            size="13"
            className={clsx(
              'ml-2 transition-transform duration-300 ease-in-out',
              isChevronDown ? 'rotate-0' : 'rotate-180'
            )}
          />
        )}
      </a>
      <Subcategories subCategories={subCategories} isLastItem={isLastItem} />
    </div>
  );
};

export default NavigationCategory;
