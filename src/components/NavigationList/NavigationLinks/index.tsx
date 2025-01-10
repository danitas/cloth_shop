import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { useNavigate } from 'react-router';
import useScreenSize from '@hooks/useScreenSize.ts';

const NavigationLinks = ({
  subCategories,
}: {
  subCategories?: TSharedCategory[];
}) => {
  const { isMdUp } = useScreenSize();
  const navigate = useNavigate();

  const handleClick = (url: string) => () => {
    navigate(url);
  };

  if (!subCategories?.length) return null;

  return (
    <div
      className={clsx(
        classes.customScrollbar,
        'w-full lg:w-auto',
        !isMdUp &&
          'customScrollbar flex flex-nowrap overflow-x-auto py-5 pl-[15px]'
      )}
    >
      {subCategories.map((link) => (
        <div
          onClick={handleClick(link.url)}
          key={link.id}
          className={clsx(
            'nav-link relative block cursor-pointer py-2 text-base uppercase hover:underline',
            {
              'flex flex-shrink-0 px-8 first:pl-0': !isMdUp,
              'hover:decoration-red-700': link.isSale,
            }
          )}
        >
          <div
            className={clsx(link.isSale && 'text-red-700', 'hover:underline')}
          >
            {link.name}
          </div>
          {!isMdUp && (
            <div className="absolute right-0 top-1/2 flex -translate-y-1/2">
              {'|'}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationLinks;
