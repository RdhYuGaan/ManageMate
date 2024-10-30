import React from "react";

export type SidebarMenuItem ={
    id:number;
    name:string;
    isSelected:boolean;
};


export type AppType = {
    openSideBarObject: {
        openSideBar: boolean;
        setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    },
    sideBarMenuObject: {
        sideBarMenu: SidebarMenuItem[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SidebarMenuItem[]>>;
    },
    openProjectWindowObject:{
        openProjectWindow: boolean;
        setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>>;
    }
};
export type sideBarMenuObject= {
    sideBarMenuObject: {
        sideBarMenu: SidebarMenuItem[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SidebarMenuItem[]>>;
    }
}



