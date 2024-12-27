import logo from '@assets/images/logo_xs.svg';
import { Heart, Search, ShoppingBag, X } from 'lucide-react';
import BurgerMobileButton from '@components/BurgerMobileButton';
import { useSidebarContext } from '../../context/SidebarContext.tsx';

const MobileHeader = () => {
  const { isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <a href="/" title="Home">
        <img className="flex h-11 w-10" src={logo} alt="logo" />
      </a>

      <div className="flex items-center gap-4">
        <Heart width="19" height="18" />
        <Search width="19" height="18" />
        <ShoppingBag width="19" height="18" />
        <div className="flex pl-4">
          {isSmallOpen ? <X onClick={close} /> : <BurgerMobileButton />}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
