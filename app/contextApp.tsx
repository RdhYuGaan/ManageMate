"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppType, IconData, SidebarMenuItem } from "./types/Apptype";
import { allIconsArray } from "./Data/AllIcons";

// Default state
const defaultState: AppType = {
    openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
    sideBarMenuObject: { sideBarMenu: [], setSideBarMenu: () => {} },
    openProjectWindowObject: {
        openProjectWindow:false,
        setOpenProjectWindow: ()=>{},
    },
    allIconsDataObject: {allIconsData:[], setAllIconsData: ()=> {} },
    openIconWindowObject: {openIconWindow:false, setOpenIconWindow: () => {}},
    selectedIconObject: {selectedIcon:null, setSelectedIcon: () => {}},
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
    const [allIconsData, setAllIconsData] = useState<IconData[]>(allIconsArray);
    


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

                allIconsDataObject: {allIconsData, setAllIconsData},
                openIconWindowObject: {openIconWindow, setOpenIconWindow},
                selectedIconObject: {selectedIcon, setSelectedIcon},
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
