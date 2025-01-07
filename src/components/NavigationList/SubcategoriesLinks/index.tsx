import clsx from 'clsx';
import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';

const SubcategoriesLinks = ({
  subCategories,
  isMobile,
}: {
  subCategories?: TSharedCategory[];
  isMobile?: boolean;
}) => {
  if (!subCategories?.length) return null;

  return (
    <div
      className={clsx(
        isMobile
          ? 'flex'
          : 'flex-grow-1 h-full flex-col lg:flex lg:w-[310px] xl:w-[510px]',
        'flex-wrap'
      )}
    >
      {subCategories.map((child) => (
        <a
          href={child.url}
          key={child.id}
          className={
            isMobile
              ? 'text-md flex w-1/2 py-2 font-baseLight'
              : 'block px-4 py-2 text-base text-black hover:text-black hover:underline'
          }
        >
          {child.name}
        </a>
      ))}
    </div>
  );
};

export default SubcategoriesLinks;
