import NavigationList from '@components/NavigationList';
import { ShoppingBag, Search, Heart } from 'lucide-react';
import LangLocaleAuth from '@components/LangLocaleAuth';
import logoLG from '@assets/images/logo_lg.svg';
import Typography from '@shared/Typography';

const DesktopMenu = () => {
  return (
    <div className="relative hidden items-center justify-between lg:flex">
      <div className="flex-grow-1 flex gap-4 pt-4 lg:pt-8">
        <NavigationList />
      </div>

      <a
        href="/"
        title="Home"
        className="absolute left-1/2 z-20 flex -translate-x-1/2 transform"
      >
        <img
          className="mx-auto hidden lg:flex lg:h-6 lg:w-[150px] xl:h-9 xl:w-60"
          src={logoLG}
          alt="logo"
        />
      </a>

      <div className="flex lg:w-1/4 lg:gap-3">
        <Typography
          weight="bold"
          uppercase
          className="flex lg:mx-3 lg:px-2 lg:text-xs xl:mx-1 xl:text-base"
        >
          Customer Care
        </Typography>
        <div className="flex justify-center align-middle lg:gap-2">
          <LangLocaleAuth />
        </div>
        <div className="flex lg:gap-4">
          <Heart width="19" height="18" />
          <Search width="19" height="18" />
          <ShoppingBag width="19" height="18" />
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
