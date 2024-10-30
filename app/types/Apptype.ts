import { Dispatch, SetStateAction } from "react";

export type SidebarMenuItem = {
    id: number;
    name: string;
    isSelected: boolean;
};

export type AppType = {
    openSideBarObject: {
        openSideBar: boolean;
        setOpenSideBar: Dispatch<SetStateAction<boolean>>;
    };
    sideBarMenu: SidebarMenuItem[]; // <-- Add sideBarMenu here
    setSideBarMenu: Dispatch<SetStateAction<SidebarMenuItem[]>>; // <-- Add setSideBarMenu here
};
