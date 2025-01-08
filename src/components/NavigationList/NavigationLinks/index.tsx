import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';
import clsx from 'clsx';
import classes from './styles.module.scss';

const NavigationLinks = ({
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
        classes.customScrollbar,
        'w-full lg:w-auto',
        isMobile &&
          'customScrollbar flex flex-nowrap overflow-x-auto py-5 pl-[15px]'
      )}
    >
      {subCategories.map((link) => (
        <a
          href={link.url}
          key={link.id}
          className={clsx(
            'nav-link relative py-2 text-base uppercase',
            isMobile ? 'flex flex-shrink-0 px-8 first:pl-0' : 'block'
          )}
        >
          {link.name}
          {isMobile && (
            <div className="absolute right-0 top-1/2 flex -translate-y-1/2">
              {'|'}
            </div>
          )}
        </a>
      ))}
    </div>
  );
};

export default NavigationLinks;
