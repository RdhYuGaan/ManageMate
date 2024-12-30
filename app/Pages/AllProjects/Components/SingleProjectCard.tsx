import React, { useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import { Project } from "@/app/Data/AllProjects";
import { getIconComponent } from "@/app/functions/IconsAction";
import { LibraryAdd } from "@mui/icons-material";
import { useContextApp } from "@/app/contextApp";

function SingleProjectCard({ project }: { project: Project }) {
    const daysLeft = calculateDaysLeft(project.createdAt);
    const progressPercentage = calculateProgressPercentage(
        project.tasks.length,
        project.tasks.filter((task) => task.status === "Completed").length
    );

    return (
        <li className="flex flex-col max-md:w-[96%] h-[306px] gap-8 rounded-lg p-7 bg-white shadow-sm">
            <ProjectCardHeader  />
            <ProjectCardBody />
            <ProjectCardFooter  />
        </li>
    );
}

function ProjectCardHeader(){

    const threeDotsRef = useRef<HTMLDivElement>(null);
    const {
        dropDownPositionsObject: { setDropDownPositions },
        openDropDownObject: { setOpenDropDown },
        selectedProjectObject: {setSelectedProject, },
        chosenProjectObject: {setChosenProject},
        sideBarMenuObject : {setSideBarMenu},
    } = useContextApp();

    function openDropDown(event: React.MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        if (threeDotsRef.current) {
            const rect = threeDotsRef.current.getBoundingClientRect();
            const { top, left } = rect;
            setDropDownPositions({
                top: top + window.scrollY + 30,
                left: left + window.scrollX,
            });
            setOpenDropDown(true);
            //select the project when clicked
            setSelectedProject(project);
        }
    }
    
    function showAllTasksOfProject(){
        //update the chosen project variable
        setChosenProject(project);

        //go to all tasks page by using the size menu items
        setSideBarMenu((prevState)=>
            prevState.map((item)=>({
                ...item,
                isSelected: item.id === 2 ? true: false,

            }))
        );
    }

    return (
        <div className="flex justify-between items-center mb-1">
            {/* title and iCon */}
            <div className="flex gap-3 items-center">
                {/* project icon */}
                <div className="bg-orange-600 flex justify-center w-[30px] h-[30px] items-center rounded-md">
                    {getIconComponent(project.icon, "text-white", "23px")}
                </div>
                {/* project title */}
                <div className="flex flex-col">
                    <span className="font-semibold text-[19px] hover:text-orange-600 cursor-pointer">
                        {truncateString(project.title, 25)}
                    </span>
                    <span className="text-slate-600 text-[13px]">
                        {daysLeft === 0
                            ? "Today"
                            : `${daysLeft} day${daysLeft > 1 ? "s" : ""} ago`}
                    </span>
                </div>
            </div>
            <div
                ref={threeDotsRef}
                onClick={openDropDown}
                className="w-6 h-6 flex justify-center items-center rounded-full bg-slate-100 cursor-pointer"
            >
                <MoreVertIcon className="text-slate-800 text-[19px]" />
            </div>
        </div>
    );
}

function ProjectCardBody({ project }: { project: Project }) {
    return (
        <div className="h-[80px] flex flex-col gap-3 mb-1">
            {project.tasks.length === 0 && (
                <div className="flex justify-center flex-col gap-3 mt-[15px] items-center h-full">
                    <LibraryAdd className="text-slate-400 opacity-40 text-[26px] cursor-pointer hover:opacity-100 hover:text-orange-600" />
                    <span className="text-slate-400 opacity-45 text-[13px]">
                        No tasks created yet...
                    </span>
                </div>
            )}
            <ul className="text-slate-400 text-[13px] flex flex-col gap-2 ml-3">
                {project.tasks.slice(0, 3).map((task) => (
                    <li key={task.id} className="flex gap-2 items-center">
                        <CircleIcon className="text-[8px]" />
                        <span>{truncateString(task.title, 40)}</span>
                    </li>
                ))}
            </ul>
            {project.tasks.length > 3 && (
                <div className="text-[11px] text-orange-600">
                    +{project.tasks.length - 3} tasks
                </div>
            )}
        </div>
    );
}

function ProjectCardFooter({ progressPercentage }: { progressPercentage: number }) {
    return (
        <div className="flex gap-4 mt-2 flex-col">
            <div className="text-[12px] gap-3 items-center flex w-full">
                <div className="w-full h-[7px] bg-slate-200 overflow-hidden rounded-xl">
                    <div
                        style={{ width: `${progressPercentage}%` }}
                        className="bg-orange-600 h-full rounded-r-xl"
                    ></div>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-[13px] text-slate-400">On Progress</p>
                    <div className="flex gap-1 text-[13px] text-slate-700">
                        <p>{progressPercentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

function calculateDaysLeft(creationDate: string): number {
    const creation = new Date(creationDate);
    const now = new Date();
    const differenceInTime = now.getTime() - creation.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
}

function calculateProgressPercentage(totalTasks: number, completedTasks: number): number {
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
}

export default SingleProjectCard;
