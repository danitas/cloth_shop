import clsx from 'clsx';
import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';
import useScreenSize from '@hooks/useScreenSize.ts';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

type TSubcategoriesLinksProps = {
  subCategories?: TSharedCategory[];
  isOpen?: boolean;
};

const SubcategoriesLinks = ({
  subCategories,
  isOpen = false,
}: TSubcategoriesLinksProps) => {
  const { isMdUp } = useScreenSize();
  const ref = useRef<HTMLDivElement>(null);

  if (!subCategories?.length) return null;

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={ref}
      timeout={0}
      classNames={{
        enter: 'opacity-85',
        enterActive: '-translate-y-4 opacity-50',
        enterDone: 'max-h-[350px] translate-y-0 opacity-100',
        exit: 'opacity-20',
        exitActive: 'translate-y-4 opacity-0',
      }}
    >
      <div
        ref={ref}
        className={clsx(
          'max-h-0 flex-wrap overflow-hidden transition-all duration-700 ease-linear lg:max-h-full',
          {
            flex: !isMdUp,
            'flex-grow-1 h-full flex-col lg:flex lg:w-[310px] xl:w-[510px]':
              isMdUp,
          }
        )}
      >
        {subCategories.map((child) => (
          <a
            href={child.url}
            key={child.id}
            className={clsx(
              'block px-4 py-3 text-base text-black hover:text-black hover:underline',
              {
                'flex px-0 font-baseLight text-md': !isMdUp,
                'w-full': !isMdUp && subCategories.length < 8,
                'w-1/2': !isMdUp && subCategories.length > 8,
              }
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
