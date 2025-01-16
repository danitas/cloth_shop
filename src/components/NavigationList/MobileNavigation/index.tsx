import React from 'react';
import { mobileNavigationItems } from '@data/navigation.ts';
import SubcategoriesLinks from '@components/NavigationList/SubcategoriesLinks';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const MobileNavigation = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const navigate = useNavigate();

  const toggleChevron = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNavigation = (url: string) => () => {
    navigate(url);
  };

  return (
    <>
      {mobileNavigationItems.map((item) => (
        <React.Fragment key={item.id}>
          <div
            onClick={handleNavigation(item.url)}
            className={clsx(
              openItems[item.id] && 'underline',
              'flex items-center py-4 text-lg font-bold uppercase text-gray-800'
            )}
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
          </div>
          <SubcategoriesLinks
            subCategories={item.subCategories}
            isOpen={openItems[item.id]}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default MobileNavigation;
