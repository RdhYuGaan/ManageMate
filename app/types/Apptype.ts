export type SidebarMenuItem ={
    id:number;
    name:string;
    isSelected:boolean;
};


export type AppType ={
    openSideBarObject: {
        openSidebar: boolean;
        setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

sideBarMenuObject: {
    sideBarMenuObject: {
        sideBarMenu: SidebarMenuItem[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SidebarMenuItem[]>>;
    }
}