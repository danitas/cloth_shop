import { mobileNavigationItems } from '@data/navigation.ts';
import SubcategoriesLinks from '@components/NavigationList/SubcategoriesLinks';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

const MobileNavigation = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleChevron = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex-col py-4 sm:flex lg:hidden">
      {mobileNavigationItems.map((item) => (
        <div key={item.id}>
          <a
            href={item.url}
            className="flex py-4 text-lg font-bold uppercase text-gray-800"
          >
            {item.name}
            {item.subCategories?.length && (
              <div
                onClick={(e) => {
                  toggleChevron(item.id, e);
                }}
                className="ml-2 flex"
              >
                <ChevronDown
                  size="13"
                  className={clsx(
                    'transition-transform duration-300 ease-in-out',
                    openItems[item.id] ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </div>
            )}
          </a>

          {openItems[item.id] && ( // Only show the dropdown for the current open item
            <SubcategoriesLinks
              subCategories={item.subCategories}
              isMobile={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileNavigation;
