import clsx from 'clsx';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TSubcategory } from '@src/api/subcategories.ts';

type TSubcategoriesLinksProps = {
  subCategories?: TSubcategory[];
  isOpen?: boolean;
};

const SubcategoriesLinks = ({
  subCategories,
  isOpen = false,
}: TSubcategoriesLinksProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const transitionClassNames = {
    enter: 'opacity-85',
    enterActive: '-translate-y-4 opacity-50',
    enterDone: 'max-h-[350px] translate-y-0 opacity-100',
    exit: 'opacity-20',
    exitActive: 'translate-y-4 opacity-0',
  };

  if (!subCategories?.length) return null;

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={ref}
      timeout={0}
      classNames={transitionClassNames}
    >
      <div
        ref={ref}
        className={clsx(
          'md:flex-grow-1 flex max-h-0 flex-wrap overflow-hidden transition-all duration-700 ease-linear md:h-full md:flex-col lg:flex lg:max-h-full lg:w-[310px] xl:w-[510px]'
        )}
      >
        {subCategories.map((child) => (
          <a
            href={child.slug}
            key={child._id}
            className={clsx(
              subCategories.length <= 8 ? 'w-full' : 'w-1/2',
              'block flex px-0 px-4 py-3 font-baseLight text-base text-md text-black hover:text-black hover:underline'
            )}
          >
            {child.name}
          </a>
        ))}
      </div>
    </CSSTransition>
  );
};

export default SubcategoriesLinks;
