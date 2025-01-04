import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import useScreenSize from '../../hooks/useScreenSize.ts';

const Header = () => {
  const { isLgUp } = useScreenSize();
  return (
    <header className="relative">
      <div className="min-h-11 justify-center border-b p-4 lg:p-8">
        {isLgUp ? <DesktopMenu /> : <MobileMenu />}
      </div>
    </header>
  );
};

export default Header;
