'use client'
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { AppType, SidebarMenuItem } from "./types/Apptype";

const defaultState: AppType = {
    openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
    sideBarMenu: [],  // <-- Initialize sideBarMenu as an empty array
    setSideBarMenu: () => {}, // <-- Provide default empty function for setSideBarMenu
};

const ContextApp = createContext<AppType>(defaultState);

export default function ContextAppProvider({ children }: { children: ReactNode }) {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [sideBarMenu, setSideBarMenu] = useState<SidebarMenuItem[]>([
        { id: 1, name: "All Projects", isSelected: true },
        { id: 2, name: "All Tasks", isSelected: false },
        { id: 3, name: "Logout", isSelected: false },
    ]);

    return (
        <ContextApp.Provider value={{ openSideBarObject: { openSideBar, setOpenSideBar }, sideBarMenu, setSideBarMenu }}>
            {children}
        </ContextApp.Provider>
    );
}

export function useContextApp() {
    return useContext(ContextApp);
}
