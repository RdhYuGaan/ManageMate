import React from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import { Project } from "@/app/Data/AllProjects";
import { getIconComponent } from "@/app/functions/IconsAction";

function SingleProjectCard({project}: {project:Project}) {
    return (
        <li className="w-[300px] flex flex-col max-md:w-[96%] gap-8 rounded-lg p-7 bg-white">
            <ProjectCardHeader />
            <ProjectCardBody />
            <ProjectCardFooter />
        </li>
    );

    
    function ProjectCardFooter() {
        return (
            <div className="flex gap-4 mt-2 flex-col">
                <div className="text-[12px] gap-3 items-center flex w-full">
                    <div className="w-full h-[7px] bg-slate-200 overflow-hidden rounded-xl">
                        <div className="w-3/4 bg-orange-600 h-full rounded-r-xl"></div>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-[13px] text-slate-400">On Progress</p>
                        <div className="flex gap-1 text-[13px] text-slate-700">
                            <p>78%</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



function ProjectCardHeader() {
    return (
        <div className="flex justify-between items-center">

            {/* title and icon */}
            <div className="flex gap-3 items-center">

                {/* project icon */}
                <div className="bg-orange-600 flex justify-center w-[30px] h-[30px] items-center rounded-md">
                   {getIconComponent(project.icon, "text-white","23px")}
                </div>
                {/* project title */}
                <div className="flex flex-col">
                <span className="font-semibold text-[19px] text-slate-800">{project.title}</span>
                    <span className="text-slate-600 text-[13px]">2 days ago..</span>
                </div>
            </div>
            <div>
                <MoreVertIcon className="text-slate-800 text-[19px] cursor-pointer " />
            </div>
        </div>
    );
}



function ProjectCardBody() {
    return (
        <ul className="text-[13px] text-slate-400 flex flex-col gap-2 ml-3">
            <li className="flex gap-2 items-center">
                <CircleIcon className="text-[8px]" />
                <span>
                    Task details or description go here for task 1.
                </span>
            </li>
            <li className="flex gap-2 items-center">
                <CircleIcon className="text-[8px]" />
                <span>
                    Task details or description go here for task 2.
                </span>
            </li>
        </ul>
    );
}
export default SingleProjectCard;
