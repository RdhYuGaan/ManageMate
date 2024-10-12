import React from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";

function SingleProjectCard() {
    return (
        <li className="w-[300px] flex flex-col gap-8 rounded-lg p-7 bg-white">
            <ProjectCardHeader />
            <ProjectCardBody />
            <ProjectCardFooter />
        </li>
    );

    function ProjectCardHeader() {
        return (
            <div className="flex justify-between items-center">
                {/* Left section with icon and project info */}
                <div className="flex gap-3 items-center">
                    <div className="bg-orange-600 flex justify-center w-[38px] h-[38px] rounded-md">
                        <SplitscreenIcon sx={{ fontSize: "19px" }} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-[19px]">Project title</span>
                        <span className="text-slate-200 text-[13px]">2 days ago..</span>
                    </div>
                </div>
                <div>
                    <MoreVertIcon className="text-slate-400 text-[19px] cursor-pointer" />
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

    function ProjectCardFooter() {
        return (
            <div className="flex gap-4 mt-2 flex-col">
                <div className="text-[12px] gap-3 items-center flex w-full">
                    <div className="w-full h-[7px] bg-slate-100 overflow-hidden rounded-xl">
                        <div className="w-1/2 bg-orange-600 h-full rounded-r-xl"></div>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-[13px] text-slate-400">On Progress</p>
                        <div className="flex gap-1 text-[13px]">
                            <p>78%</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProjectCard;