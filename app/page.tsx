'use client';
import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Components/AllProjects";
import AllTasks from "./Pages/AllTasks/Components/AllTasks";
import { useContextApp } from "./contextApp";
import ProjectWindow from "./components/Windows/ProjectWindow";
import IconsWindow from "./components/Windows/IconWindow";
import MoreDropDown from "./components/Windows/DropDowns/MoreDropDown";
import ConfirmationWindow from "./components/Windows/DropDowns/ConfirmationWindow";

export default function Home() {
  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject: { sideBarMenu },
    openProjectWindowObject: { openProjectWindow },
    openConfirmationWindowObject: { openConfirmationWindow }, // Destructure here
  } = useContextApp();

  const componentMap: Record<number, React.ReactNode> = {
    1: <AllProjects />,
    2: <AllTasks />,
  };

  const componentKey = sideBarMenu.findIndex((item) => item.isSelected);
  const selectedComponent = componentMap[componentKey + 1] || null;

  return (
    <div className="flex w-full h-screen poppins">
      <ConfirmationWindow />
      <MoreDropDown />
      <IconsWindow />
      <ProjectWindow />

      {/* Soft layer */}
      {(openSideBar || openProjectWindow || openConfirmationWindow) && (
        <div
          className={`w-full h-full ${
            openProjectWindow || openConfirmationWindow ? "z-[70]" : "z-50"
          } bg-slate-800 fixed opacity-30`}
        ></div>
      )}

      {/* Sidebar */}
      <SideBar />

      {/* Selected components */}
      {selectedComponent && selectedComponent}
    </div>
  );
}
