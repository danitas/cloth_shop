import React from 'react';
import { SidebarProvider } from '@context/SidebarContext.tsx';
import Footer from '@components/Footer';
import Header from '@components/Header';
import PromoSlider from '@components/PromoSlider';
import { Promotions } from '@data/promotions.ts';

type LayoutProps = React.PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SidebarProvider>
        <div className="sticky top-0 z-50 h-full bg-white shadow-md lg:relative lg:shadow-none">
          <PromoSlider promotions={Promotions} />
          <Header />
        </div>

        <main>{children}</main>
        <Footer />
      </SidebarProvider>
    </div>
  );
};

export default Layout;
