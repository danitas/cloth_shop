import { useSidebarContext } from '@context/SidebarContext.tsx';
import NavigationList from '../NavigationList';
import MobileHeader from '../Mobile/Header';
import LangLocaleAuth from '@components/LangLocaleAuth';
import clsx from 'clsx';

const Sidebar = () => {
  const { isSmallOpen } = useSidebarContext();

  return (
    <aside
      className={clsx(
        'scrollbar-hidden absolute left-0 top-0 w-full flex-col gap-2 overflow-y-auto lg:sticky',
        {
          'z-[999] flex min-h-screen bg-white': isSmallOpen,
          hidden: !isSmallOpen,
        }
      )}
    >
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between lg:hidden">
          <MobileHeader />
        </div>
        <NavigationList />
      </div>
      <div className="sticky left-0 top-full bg-black p-4 text-white">
        <div className="flex justify-between">
          <LangLocaleAuth />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
