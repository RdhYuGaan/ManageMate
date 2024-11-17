"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppType, IconData, SidebarMenuItem } from "./types/Apptype";
import { allIconsArray } from "./Data/AllIcons";
import { Project, projectsdata } from "./Data/AllProjects";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";

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
    allProjectsObject: {AllProjects: [] , setAllProjects:() =>{} },
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
    const [openIconWindow, setOpenIconWindow]= useState(false);
    const [selectedIcon, setSelectedIcon] =useState<IconData | null>(null);
    const [allProjects, setallProjects] = useState<Project[]>([]);
    


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


    useEffect(()=>{
        const fetchData= async () => {
            try {
                //simulate a network delay
                await new Promise((reslove) => setTimeout(reslove,1000));

                //update state
                setallProjects(projectsdata);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    //close the sidebar on mobile view is flase
    useEffect(() => {
        if (!isMobileView) {
            setOpenSideBar(false);
        }
    }, [isMobileView]);

    // clicked bar menuclicked and its close
    useEffect(() => {
        setOpenSideBar(false);
    }, [sideBarMenu]);

    return (
        <ContextApp.Provider
            value={{
                openSideBarObject: { openSideBar, setOpenSideBar },
                sideBarMenuObject: {  sideBarMenu, setSideBarMenu },
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
