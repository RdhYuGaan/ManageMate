"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {AppType, SidebarMenuItem} from "./types/Apptype";


//structure of the context

type AppType={
    openSideBarObject: {
        openSideBar: boolean;
        setOpenSideBar:React.Dispatch<React.SetStateAction<boolean>>;
    };
};

//default state
const defaultState: AppType={
    openSideBarObject: {openSideBar:false, setOpenSideBar: ()=>{}},
    sideBarMenuObject: {sideBarMenu: [], setSideBarMenu: ()=>{}},
};

//create context
const ContextApp=createContext<AppType>(defaultState);

//create provider

export default function ContextappProvider({
    children,
}:{
    children: React.ReactNode;
}) {
    const [openSideBar, setOpenSideBar] =useState(false);
    const [isMobileView, setIsMobileView] =useState(false);
    const [SideBarMenu, setSideBarMenu] =useState<sidebarMenuItem[]>([
        {
            id:1,
            name:"All Projects",
            isSelected:true,
        },
        {
            id:2,
            name:"All Tasks",
            isSelected:false,
            
        },{
            id:3,
            name:"Logout",
            isSelected:false,
            
        },
        
        

    ]);


    useEffect(() =>{
        function handleResize(){
            setIsMobileView(window.innerWidth <= 940);
        }

        handleResize();

        window.addEventListener("resize", handleResize);



        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    useEffect(()=>{
        if (!isMobileView){
            setOpenSideBar(false);
        }

    }, [isMobileView]);

    useEffect(()=>{
        setOpenSideBar(false);
    }, [SideBarMenu]);
    
    
    return (
        <ContextApp.Provider
            value={{openSideBarObject: {openSideBar, setOpenSideBar} }}
        >
            {children}

        </ContextApp.Provider>
    );
}

//create the hook

export function useContextApp() {
    return useContext(ContextApp);
}