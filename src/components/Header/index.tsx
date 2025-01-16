import MobileMenu from '@components/Header/MobileMenu';
import DesktopMenu from '@components/Header/DesktopMenu';
import useScreenSize from '@hooks/useScreenSize.ts';
import clsx from 'clsx';
import classes from './styles.module.scss';

const Header = () => {
  const { isLgUp } = useScreenSize();

  return (
    <header className="relative">
      <div
        className={clsx(
          classes.headerContainer,
          'relative z-50 min-h-11 justify-center px-4 pb-4 pt-2 lg:px-3 lg:pb-0 lg:pt-0'
        )}
      >
        {isLgUp ? <DesktopMenu /> : <MobileMenu />}
      </div>
    </header>
  );
};

export default Header;
