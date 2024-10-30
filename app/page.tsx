'use client'
import Image from "next/image";
import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";
import AllTasks from "./Pages/AllTasks/Components/AllTasks";
import { useContextApp } from "./contextApp";

// import { useContextApp } from "./contextApp";

export default function Home() {

  const {
    openSideBarObject: {openSideBar},
    sideBarMenuObject: {sideBarMenu}, 
  }= useContextApp();

  const componentMap:Record<number,React.ReactNode>={
    1:<AllProjects />,
    2:<AllTasks/>,

  };
  const componentKey=sideBarMenu.findIndex((item) => item.isSelected);

  const selectedComponent = componentMap[componentKey + 1] || null;


  return (
    <div className="flex w-full h-screen poppins">
      {openSideBar && (
        <div className="w-full h-full z-50 bg-slate-800 fixed opacity-30"></div> // Fixed typo in "opacity"
      )}



        {/* sidebar */}
      <SideBar />
      

      {/* seleceted components */}

      {selectedComponent && selectedComponent}
      
    </div>
  );
}
