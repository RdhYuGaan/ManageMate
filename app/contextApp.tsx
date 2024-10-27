"use client";

import {createContext, useContext, useEffect, useState} from "react";

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