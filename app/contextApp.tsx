"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppType, SidebarMenuItem } from "./types/Apptype";

// Default state
const defaultState: AppType = {
    openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
    sideBarMenuObject: { sideBarMenu: [], setSideBarMenu: () => {} },
    openProjectWindowObject: {
        openProjectWindow:false,
        setOpenProjectWindow: ()=>{},
    },
};

// Create context
const ContextApp = createContext<AppType>(defaultState);

// Create provider
export default function ContextappProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [sideBarMenu, setSideBarMenu] = useState<SidebarMenuItem[]>([
        {
            id: 1,
            name: "All Projects",
            isSelected: true,
        },
        {
            id: 2,
            name: "All Tasks",
            isSelected: false,
        },
        {
            id: 3,
            name: "Logout",
            isSelected: false,
        },
    ]);

    const [openProjectWindow, setOpenProjectWindow] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobileView(window.innerWidth <= 940);
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobileView) {
            setOpenSideBar(false);
        }
    }, [isMobileView]);

    useEffect(() => {
        setOpenSideBar(false);
    }, [sideBarMenu]);

    return (
        <ContextApp.Provider
            value={{
                openSideBarObject: { openSideBar, setOpenSideBar },
                sideBarMenuObject: { sideBarMenu: sideBarMenu, setSideBarMenu },
                openProjectWindowObject: {
                    openProjectWindow,
                    setOpenProjectWindow,
                } ,
            }}
        >
            {children}
        </ContextApp.Provider>
    );
}

// Create the hook
export function useContextApp() {
    return useContext(ContextApp);
}
