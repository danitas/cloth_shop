import logo from '@assets/images/logo_xs.svg';
import NavigationList from '@components/NavigationList';
import Authorization from '@components/Authorization';
import { ShoppingBag, Search } from 'lucide-react';

const DesktopMenu = () => {
  return (
    <div className={`hidden items-center justify-between lg:flex`}>
      <img src={logo} alt="Logo" />
      <div className={`flex-grow-1 flex gap-4`}>
        <NavigationList />
      </div>
      <div className={`flex gap-4`}>
        <Search />
        <Authorization />
        <ShoppingBag />
      </div>
    </div>
  );
};

export default DesktopMenu;
