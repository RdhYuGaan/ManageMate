import Image from "next/image";
import SlideBar from "./components/Slidebar";
import AllProjects from "./Pages/AllProjects/Components/ProjectsubHeader";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins ">
      <SlideBar />
      {/* <AllProjects /> */}
    </div>
  );
}
