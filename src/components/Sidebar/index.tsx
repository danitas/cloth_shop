import { useSidebarContext } from '@context/SidebarContext.tsx';
import MobileHeader from '@components/Mobile/Header';
import LangLocaleAuth from '@components/LangLocaleAuth';
import NavigationList from '@components/NavigationList';
import NavigationLinks from '@components/NavigationList/NavigationLinks';
import { navigationLinks } from '@data/navigation.ts';

const Sidebar = () => {
  const { isSmallOpen } = useSidebarContext();

  return (
    <>
      <aside
        className={`scrollbar-hidden absolute left-0 top-0 w-full flex-col gap-2 overflow-y-auto lg:sticky ${isSmallOpen ? 'z-[999] flex min-h-screen bg-white' : 'hidden'}`}
      >
        <div className="flex flex-col px-4">
          <div className={`flex items-center justify-between py-2 lg:hidden`}>
            <MobileHeader />
          </div>
          <div className="bg-beige -mx-4">
            <NavigationLinks subCategories={navigationLinks} isMobile={true} />
          </div>
          <NavigationList />
        </div>
        <div className="sticky left-0 top-full bg-black p-4 text-white">
          <div className="flex justify-between">
            <LangLocaleAuth />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
