"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppType, IconData, SidebarMenuItem } from "./types/Apptype";
import { allIconsArray } from "./Data/AllIcons";
import { Project, projectsdata } from "./Data/AllProjects";


// Default state
const defaultState: AppType = {
    openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
    sideBarMenuObject: { sideBarMenu: [], setSideBarMenu: () => {} },
    openProjectWindowObject: {
        openProjectWindow: false,
        setOpenProjectWindow: () => {},
    },
    allIconsDataObject: { allIconsData: [], setAllIconsData: () => {} },
    openIconWindowObject: { openIconWindow: false, setOpenIconWindow: () => {} },
    selectedIconObject: { selectedIcon: null, setSelectedIcon: () => {} },
    allProjectsObject: { allProjects: [], setAllProjects: () => {} }, // Corrected property name
    dropDownPositionsObject: { dropDownPositions: { top: 0, left: 0 }, setDropDownPositions: () => {} },
    openDropDownObject: { openDropDown: false, setOpenDropDown: () => {} },
};


// Create context
const ContextApp = createContext<AppType>(defaultState);

// Create provider
export default function ContextappProvider({ children }: { children: React.ReactNode }) {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [sideBarMenu, setSideBarMenu] = useState<SidebarMenuItem[]>([
        { id: 1, name: "All Projects", isSelected: true },
        { id: 2, name: "All Tasks", isSelected: false },
        { id: 3, name: "Logout", isSelected: false },
    ]);

    const [openProjectWindow, setOpenProjectWindow] = useState(false);
    const [allIconsData, setAllIconsData] = useState<IconData[]>(allIconsArray);
    const [openIconWindow, setOpenIconWindow] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [dropDownPositions, setDropDownPositions] = useState({ top: 0, left: 0 });


    // select project window
    const [selectedProject, setSelectedProject]= useState<Project | null>(null);
    const [openConfirmationWindow, setConfirmationWindow] = useState<boolean>(false);
        

    // Handle screen resizing
    useEffect(() => {
        function handleResize() {
            setIsMobileView(window.innerWidth <= 940);
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fetch project data on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
                setAllProjects(projectsdata); // Update state with project data
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchData();
    }, []);

    // Close sidebar if not in mobile view
    useEffect(() => {
        if (!isMobileView) setOpenSideBar(false);
    }, [isMobileView]);

    return (
        <ContextApp.Provider
            value={{
                openSideBarObject: { openSideBar, setOpenSideBar },
                sideBarMenuObject: { sideBarMenu, setSideBarMenu },
                openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
                allIconsDataObject: { allIconsData, setAllIconsData },
                openIconWindowObject: { openIconWindow, setOpenIconWindow },
                selectedIconObject: { selectedIcon, setSelectedIcon },
                allProjectsObject: { allProjects, setAllProjects },
                dropDownPositionsObject: { dropDownPositions, setDropDownPositions },
                openDropDownObject: { openDropDown, setOpenDropDown },
                selectedProjectObject:{selectedProject, setSelectedProject},
                openConfirmationWindowObject:{openConfirmationWindow, setOpenConfirmationWindow,},
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
