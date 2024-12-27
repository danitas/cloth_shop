import clsx from 'clsx';
import { SidebarProvider } from '../../context/SidebarContext.tsx';
import MobileMenu from '@components/MobileMenu';
import DesktopMenu from '@components/DesktopMenu';
import FooterSocials from '@components/FooterSocials';
import Subscribe from '@components/Subscribe';
import FooterNavigation from '@components/FooterNavigation';

const Home = () => {
  return (
    <div className={`flex max-h-screen flex-col`}>
      <SidebarProvider>
        <header className={clsx('relative')}>
          <div className="flex-grow-1 grid min-h-11 overflow-auto border-b p-4 sm:grid-cols-[auto,1fr] sm:justify-center sm:p-6 lg:grid-cols-[1fr,auto,auto] lg:p-8">
            <MobileMenu />
            <DesktopMenu />
          </div>
        </header>
        Test
        <footer className="border-t p-4">
          <FooterSocials />
          <Subscribe />
          <FooterNavigation />
        </footer>
      </SidebarProvider>
    </div>
  );
};

export default Home;
