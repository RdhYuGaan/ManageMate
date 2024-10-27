'use client'
import Image from "next/image";
import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";
import AllTasks from "./Pages/AllTasks/Components/AllTasks";
import { useContextApp } from "./contextApp";

// import { useContextApp } from "./contextApp";

export default function Home() {
  const { openSideBarObject: { openSideBar },} = useContextApp(); // Corrected destructuring and function usage

  return (
    <div className="flex w-full h-screen poppins">
      {openSideBar && (
        <div className="w-full h-full z-50 bg-slate-800 opacity-30"></div> // Fixed typo in "opacity"
      )}

      <SideBar />
      {/* <AllProjects />  */}
      <AllTasks />
    </div>
  );
}
