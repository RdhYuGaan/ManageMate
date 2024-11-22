'use client'
import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";
import AllTasks from "./Pages/AllTasks/Components/AllTasks";
import { useContextApp } from "./contextApp";
import ProjectWindow from "./components/Windows/ProjectWindow";
import {useCallback, useState } from "react";
import IconsWindow from "./components/Windows/IconWindow";


export default function Home() {

  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject: { sideBarMenu },
    openProjectWindowObject: { openProjectWindow } = { openProjectWindow: false }, // Ensuring openProjectWindow has a default
  } = useContextApp();

  const componentMap: Record<number, React.ReactNode> = {
    1: <AllProjects />,
    2: <AllTasks />,
  };

  const componentKey = sideBarMenu.findIndex((item) => item.isSelected);
  const selectedComponent = componentMap[componentKey + 1] || null;

  return (
    <div className="flex w-full h-screen poppins">
      <IconsWindow />
      <ProjectWindow />

      {(openSideBar || openProjectWindow) && (
        <div className={`w-full h-full ${openProjectWindow ? "z-[70]" : "z-50"} bg-slate-800 fixed opacity-30`}
        ></div>
      )}

      {/* Sidebar */}
      <SideBar />

      {/* Selected components */}
      {selectedComponent && selectedComponent}
      
    </div>
    
  );
}
