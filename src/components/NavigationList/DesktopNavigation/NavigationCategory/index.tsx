import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import Subcategories from '../../Subcategories';

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
      <a
        href={url}
        className="flex items-center font-bold uppercase text-black first:ml-0 hover:text-black lg:mx-2 lg:text-xs xl:mx-7 xl:text-base"
      >
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
