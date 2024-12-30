import { useContextApp } from "@/app/contextApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import AllProjects from "../../AllProjects/Components/AllProjects";

function TasksSubHeader() {
    return (
        <div className="mt-24 flex justify-between items-center">
            <MyProjectsText />
            <SortByButton />
        </div>
    );
}

function MyProjectsText() {
    const {
        chosenProjectObject: { chosenProject },
        allProjectObject: { allProjects },
    } = useContextApp();

    // Calculate total number of tasks across all projects
    function allTasksInAllProjects() {
        return allProjects.reduce((acc, project) => acc + project.tasks.length, 0);
    }

    // Calculate the number of completed tasks in a project
    function calculateCompletedTasks(tasks) {
        return tasks.filter((task) => task.status === "Completed").length;
    }

    // Total tasks and completed tasks calculation
    const totalTasks = chosenProject
        ? chosenProject.tasks.length
        : allTasksInAllProjects();

    const completedTasks = chosenProject
        ? calculateCompletedTasks(chosenProject.tasks)
        : allProjects.reduce(
              (acc, project) => acc + calculateCompletedTasks(project.tasks),
              0
          );

    // Completion percentage
    const completionPercentage =
        totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="flex items-center max-sm:gap-2 gap-3">
            <div className="w-[40px] h-[40px] -mt-10 flex justify-center items-center bg-orange-100 rounded-md">
                <SplitscreenIcon
                    sx={{ fontSize: "21px" }}
                    className="text-orange-600"
                />
            </div>
            <ul className="flex flex-col gap-[7px] max-sm:gap-[10px]">
                <li className="text-[17px] gap-2 flex font-semibold items-center">
                    <div className="text-slate-700 flex gap-2 items-center">
                        <span className="text-lg">
                            {chosenProject?.title || "All Projects"}
                        </span>
                        <span className="bg-slate-700 text-white text-[14px] p-[2px] px-2 rounded-md max-[420px]:hidden">
                            {totalTasks}
                        </span>
                    </div>
                    <KeyboardArrowDownIcon className="text-slate-600 text-lg" />
                </li>
                <li>
                    <div className="flex items-center gap-1">
                        <div
                            className="text-[12px] h-[4px] w-[280px] max-sm:w-[170px] max-[420px]:w-[130px] bg-slate-200 rounded-md overflow-hidden"
                        >
                            <div
                                className="h-full bg-orange-600 rounded-r-xl"
                                style={{ width: `${completionPercentage}%` }}
                            ></div>
                        </div>
                        <p className="text-[12px] text-slate-400 ml-3 max-sm:hidden">
                            {completionPercentage.toFixed(0)}%
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

function SortByButton() {
    return (
        <div className="flex text-[15px] max-sm:flex-col max-sm:gap-1 font-semibold gap-3">
            <span className="text-slate-600">Sort By</span>
            <div className="flex gap-1 items-center cursor-pointer">
                <span className="text-slate-800">Recent Projects</span>
                <KeyboardArrowDownIcon
                    sx={{ fontSize: "19px" }}
                    className="text-slate-800"
                />
            </div>
        </div>
    );
}

export default TasksSubHeader;
