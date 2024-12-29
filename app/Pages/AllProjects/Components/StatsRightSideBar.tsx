import React, { useMemo } from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import { useContextApp } from "@/app/contextApp";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/style.css";
import { Project } from "@/app/Data/AllProjects";
import SingleProjectCard from "./SingleProjectCard";

function StatsRightSideBar() {
    const {
        allProjectsObject: { allProjects },
    } = useContextApp();

    const { completedProjects, completedTasks, completionPercentage } = useMemo(() => {
        let completedProjects: Project[] = [];
        let totalTasks = 0;
        let completedTasks = 0;

        allProjects.forEach((project) => {
            const projectCompleted = project.tasks.every(
                (task) => task.status === "Completed"
            );

            if (projectCompleted) completedProjects.push(project);

            project.tasks.forEach((task) => {
                totalTasks++;
                if (task.status === "Completed") completedTasks++;
            });
        });

        const percentage =
            completedProjects.length > 0
                ? Math.round((completedProjects.length / allProjects.length) * 100)
                : 0;

        return {
            completedProjects: completedProjects,
            completedTasks,
            completionPercentage: percentage,
        };
    }, [allProjects]);

    return (
        <div className="w-[22%] flex justify-end items-center max-lg:hidden">
            {/* white background */}
            <div className="h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col">
                {/* header */}
                <Header />
                {/* circular chart and labels */}
                <div className="flex-col flex gap-11 items-center justify-center mt-6">
                    <CircularChart percentage={completionPercentage} />
                    <ProjectsCompletedLabels
                        completedProjects={completedProjects}
                        completedTasks={completedTasks}
                    />
                </div>
                {/* project list */}
                <ProjectsList completedProjects={completedProjects} />
            </div>
        </div>
    );
}

function ProjectsList({
    completedProjects,
}: {
    completedProjects: Project[];
}) {
    return (
        <ul className="flex flex-col gap-3 mt-16 mx-4 overflow-auto">
            {completedProjects.map((project, index) => (
                <div key={project.id}>
                    <SingleProject project={project} />
                    {index < completedProjects.length - 1 && (
                        <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
                    )}
                </div>
            ))}
        </ul>
    );
}

function SingleProject({ project }: { project: Project }) {
    return (
        <li className="p-3 flex gap-2 items-center">
            <div className="w-8 h-8 bg-orange-600 rounded-md flex text-white justify-center items-center">
                <SplitscreenIcon sx={{ fontSize: "19px" }} />
            </div>
            <ul>
                <li className="text-[14px] text-slate-800 font-semibold">
                    {truncateString(project.title, 40)}
                </li>
                <li className="text-[12px] text-slate-500">
                    {project.tasks.length} tasks
                </li>
            </ul>
        </li>
    );
}

function Header() {
    return (
        <h2 className="text-[22px] font-bold text-center mt-7">
            Projects Completed
        </h2>
    );
}

function ProjectsCompletedLabels({
    completedProjects,
    completedTasks,
}: {
    completedProjects: Project[];
    completedTasks: number;
}) {
    return (
        <div className="flex justify-center flex-col gap-1 items-center">
            <p className="font-bold text-[17px]">{completedProjects.length} Completed</p>
            <p className="text-slate-400 text-[13px]">{completedTasks} Tasks done</p>
        </div>
    );
}

function CircularChart({ percentage }: { percentage: number }) {
    return (
        <div className="w-40 h-40 mt-7 mb-1">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    textSize: "16px",
                    pathColor: `rgba(234, 88, 12, 2)`,
                    textColor: "#f97316",
                    trailColor: "#f1f5f9",
                    backgroundColor: "#3e98c7",
                })}
            />
        </div>
    );
}

function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str; // No truncation needed
    }
    return str.slice(0, maxLength) + "..."; // Truncate and add ellipsis
}

export default StatsRightSideBar;
