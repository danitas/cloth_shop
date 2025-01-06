import clsx from 'clsx';
import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';

const SubcategoriesLinks = ({
  subCategories,
}: {
  subCategories?: TSharedCategory[];
}) => {
  if (!subCategories?.length) return null;

  return (
    <div
      className={clsx(
        'flex-grow-1 h-full flex-col flex-wrap lg:flex lg:w-[310px] xl:w-[510px]'
      )}
    >
      {subCategories.map((child) => (
        <a
          href={child.url}
          key={child.id}
          className="block px-4 py-2 text-base text-black hover:text-black hover:underline"
        >
          {child.name}
        </a>
      ))}
    </div>
  );
};

export default SubcategoriesLinks;
