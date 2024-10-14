import Image from "next/image";
import SlideBar from "./components/Slidebar";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";
import AllProjectsSection from "./Pages/AllProjects/Components/AllProjectsSection";
import AllTasks from "./Pages/AllTasks/Components/AllTasks";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins ">
      <SlideBar />
       {/* <AllProjects />  */}
       <AllTasks />
       
    </div>
  );
}
