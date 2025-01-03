import clsx from 'clsx';
import MobileMenu from '@components/MobileMenu';
import DesktopMenu from '@components/DesktopMenu';

const Header = () => {
  return (
    <header className={clsx('relative')}>
      <div className="min-h-11 justify-center border-b p-4 lg:p-8">
        <MobileMenu />
        <DesktopMenu />
      </div>
    </header>
  );
};

export default Header;
