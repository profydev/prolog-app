import React, { useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  toggleSidebar: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
