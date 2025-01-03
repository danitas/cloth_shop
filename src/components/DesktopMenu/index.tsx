import NavigationList from '../NavigationList';
import { ShoppingBag, Search, Heart } from 'lucide-react';
import LangLocaleAuth from '@components/LangLocaleAuth';
import logoLG from '@assets/images/logo_lg.svg';

const DesktopMenu = () => {
  return (
    <div className={`relative hidden items-center justify-between lg:flex`}>
      <div className={`flex-grow-1 flex gap-4`}>
        <NavigationList />
      </div>

      <a
        href="/"
        title="Home"
        className="absolute left-1/2 flex -translate-x-1/2 transform"
      >
        <img
          className="mx-auto hidden h-9 w-60 lg:flex"
          src={logoLG}
          alt="logo"
        />
      </a>

      <div className={`flex gap-6`}>
        <div className="flex justify-center align-middle">
          <div className="text-gray-800 mx-5 flex px-9 text-base font-bold uppercase">
            Customer Care
          </div>
          <LangLocaleAuth />
        </div>
        <Heart width="19" height="18" />
        <Search width="19" height="18" />
        <ShoppingBag width="19" height="18" />
      </div>
    </div>
  );
};

export default DesktopMenu;
