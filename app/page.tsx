import Image from "next/image";
import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";
import AllProjectsSection from "./Pages/AllProjects/Components/AllProjectsSection";
import AllTasks from "./Pages/AllTasks/Components/AllTasks";
import TasksList from "./Pages/AllTasks/Components/TasksList";



export default function Home() {
  return (
    <div className="flex w-full h-screen poppins ">
      <SideBar />
      {/* <AllProjects />    */}
      <AllTasks />  
       
    </div>
  );
}
