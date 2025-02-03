import React from 'react';
// import { mobileNavigationItems } from '@data/navigation.ts';
import SubcategoriesLinks from '@components/NavigationList/SubcategoriesLinks';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useGetCategories from '@hooks/api/useGetCategories.ts';

const MobileNavigation = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const { data } = useGetCategories();
  const navigate = useNavigate();
  const toggleChevron = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNavigation = (slug: string) => () => {
    navigate(slug);
  };

  if (!data) return null;

  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item._id}>
          <div
            onClick={handleNavigation(item.slug)}
            className={clsx(
              openItems[item._id] && 'underline',
              'flex items-center py-4 text-lg font-bold uppercase text-gray-800'
            )}
          >
            {item.name}
            {item.subcategories.length && (
              <div
                onClick={(e) => {
                  toggleChevron(item._id, e);
                }}
                className="ml-2 flex"
              >
                <ChevronDown
                  size="13"
                  className={clsx(
                    'transition-transform duration-300 ease-in-out',
                    openItems[item._id] ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </div>
            )}
          </div>
          <SubcategoriesLinks
            subCategories={item.subcategories}
            isOpen={openItems[item._id]}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default MobileNavigation;
