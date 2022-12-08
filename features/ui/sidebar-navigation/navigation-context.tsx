import React, { useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  isMobileMenuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMobileMenuOpen: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleSidebar: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    defaultContext.isMobileMenuOpen
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        isMobileMenuOpen,
        setMobileMenuOpen: () => setMobileMenuOpen((isOpen) => !isOpen),
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
