import { useSidebarContext } from '@context/SidebarContext.tsx';
import MobileHeader from '@components/Mobile/Header';
import LangLocaleAuth from '@components/LangLocaleAuth';
import clsx from 'clsx';
import NavigationList from '@components/NavigationList';
import NavigationLinks from '@components/NavigationList/NavigationLinks';
import { navigationLinks } from '@data/navigation.ts';
import classes from './styles.module.scss';

const Sidebar = () => {
  const { isSmallOpen } = useSidebarContext();

  return (
    <aside
      className={clsx(
        'scrollbar-hidden absolute left-0 top-0 w-full flex-col gap-2 lg:sticky',
        {
          'z-[999] flex min-h-[calc(100vh-42px)] overflow-hidden bg-white':
            isSmallOpen,
          hidden: !isSmallOpen,
        }
      )}
    >
      <div className="flex h-full max-h-[calc(100vh-110px)] flex-col px-4 lg:h-auto">
        <div className="flex items-center justify-between py-2 lg:hidden">
          <MobileHeader />
        </div>

        <div className="-mx-4 bg-beige">
          <NavigationLinks subCategories={navigationLinks} />
        </div>

        <div className="mt-5 overflow-y-auto">
          <div className="flex min-h-0 flex-1 flex-col">
            <NavigationList />
          </div>
        </div>
      </div>
      <div className={classes.sidebarStickyFooter}>
        <LangLocaleAuth />
      </div>
    </aside>
  );
};

export default Sidebar;
