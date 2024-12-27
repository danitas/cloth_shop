import { useSidebarContext } from '../../context/SidebarContext.tsx';
import NavigationList from '@components/NavigationList';
import MobileHeader from '@components/MobileHeader';
import Locale from '@components/Locale';
import Lang from '@components/Lang';
import { UserRound, UserRoundCheck } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const { isSmallOpen } = useSidebarContext();
  const { isLoggedIn, setIsLoggedIn } = useState();
  return (
    <>
      <aside
        className={`scrollbar-hidden absolute left-0 top-0 w-full flex-col gap-2 overflow-y-auto lg:sticky ${isSmallOpen ? 'z-[999] flex min-h-screen bg-white' : 'hidden'}`}
      >
        <div className="flex flex-col p-4">
          <div className={`flex items-center justify-between lg:hidden`}>
            <MobileHeader />
          </div>
          <NavigationList />
        </div>
        <div className="sticky left-0 top-full bg-gray-950 p-4 text-white">
          <div className="flex justify-between">
            <Lang />
            <Locale />
            {isLoggedIn ? (
              <UserRoundCheck width="17" height="17" />
            ) : (
              <UserRound width="17" height="17" />
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
