import { createContext, useContext, useState } from 'react';

type SidebarProviderProps = React.PropsWithChildren;

type SidebarContextType = {
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebarContext() {
  const value = useContext(SidebarContext);

  if (value == undefined)
    throw Error('useSidebarContext must be used within context');

  return value;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function toggle() {
    setIsSmallOpen((s) => !s);
  }

  function close() {
    setIsSmallOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ isSmallOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}
