import React from 'react';
import { SidebarProvider } from '@context/SidebarContext.tsx';
import Footer from '@components/Footer';
import Header from '@components/Header';

type LayoutProps = React.PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex max-h-screen flex-col">
      <SidebarProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </SidebarProvider>
    </div>
  );
};

export default Layout;
