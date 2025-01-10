import clsx from 'clsx';
import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';
import useScreenSize from '@hooks/useScreenSize.ts';

const SubcategoriesLinks = ({
  subCategories,
}: {
  subCategories?: TSharedCategory[];
}) => {
  const { isMdUp } = useScreenSize();

  if (!subCategories?.length) return null;

  return (
    <div
      className={clsx('flex-wrap', {
        'mb-4 flex': !isMdUp,
        'flex-grow-1 h-full flex-col lg:flex lg:w-[310px] xl:w-[510px]': isMdUp,
      })}
    >
      {subCategories.map((child) => (
        <a
          href={child.url}
          key={child.id}
          className={clsx(
            'block px-4 py-2 text-base text-black hover:text-black hover:underline',
            {
              'text-md flex px-0 font-baseLight': !isMdUp,
              'w-full': !isMdUp && subCategories.length < 8,
              'w-1/2': !isMdUp && subCategories.length > 8,
            }
          )}
        >
          {child.name}
        </a>
      ))}
    </div>
  );
};

export default SubcategoriesLinks;
