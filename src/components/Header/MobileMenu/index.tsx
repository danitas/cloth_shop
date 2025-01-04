import Sidebar from '@components/Sidebar';
import { Heart, Search, ShoppingBag, X } from 'lucide-react';
import BurgerMobileButton from '@components/BurgerMobileButton';
import MobileLogo from '@components/MobileLogo';
import { useSidebarContext } from '@context/SidebarContext';

const MobileMenu = () => {
  const { isSmallOpen, close } = useSidebarContext();

  return (
    <div className="flex lg:hidden">
      <MobileLogo />

      <div className="flex w-full justify-end">
        <div className="flex items-center gap-4">
          <Heart width="19" height="18" />
          <Search width="19" height="18" />
          <ShoppingBag width="19" height="18" />
          <div className="flex pl-4">
            {isSmallOpen ? <X onClick={close} /> : <BurgerMobileButton />}
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default MobileMenu;
