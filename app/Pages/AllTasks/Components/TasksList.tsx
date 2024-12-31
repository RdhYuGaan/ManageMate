import React from 'react';
import ListIcon from '@mui/icons-material/List';
import CachedIcon from '@mui/icons-material/Cached';
import CircleIcon from '@mui/icons-material/Circle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Checkbox from '@mui/icons-material/CheckBox';
import { useContextApp } from '@/app/contextApp';

function TasksList() {
  return (
    <div className="ml-12 mt-11 max-sm:ml-0 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
}

export default TasksList;

function Tabs() {
  const {
    chosenProjectObject: { chosenProject },
    allProjectsObject: { allProjects },
  } = useContextApp();

  const countOnGoingTasks = () => {
    // If a chosen project is selected, count tasks in progress using reduce method based on its status
    if (chosenProject) {
      return chosenProject.tasks.reduce(
        (count, task) => count + (task.status === "In Progress" ? 1 : 0),
        0
      );
    }

    // Count tasks in progress for all projects using nested reduce
    return allProjects.reduce(
      (projectCount, project) =>
        projectCount +
        project.tasks.reduce(
          (taskCount, task) => taskCount + (task.status === "In Progress" ? 1 : 0),
          0
        ),
      0
    );
  };

  const completedTasks = () => {
    // If a chosen project is selected, calculate the difference between ongoing tasks and the total number of tasks in the project
    if (chosenProject) {
      return chosenProject.tasks.length - countOnGoingTasks();
    }

    // For all projects, first count the total tasks, then calculate completed tasks
    const totalTasks = allProjects.reduce((total, project) => total + project.tasks.length, 0);
    return totalTasks - countOnGoingTasks();
  };

  return (
    <div className="flex items-center mt-8 ml-3 gap-6 mb-5">
      <div className="flex gap-2 text-orange-400 font-semibold">
        <span>On Going Tasks</span>
        {/* Display the count of ongoing tasks */}
        <span className="px-2 bg-orange-400 text-white rounded-md max-[420px]:hidden">{countOnGoingTasks()}</span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        {/* Display the count of completed tasks */}
        <span className="rounded-md bg-slate-200 px-2 max-[420px]:hidden">{completedTasks()}</span>
      </div>
    </div>
  );
}

function SingleTask() {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox />
      <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6 max-sm:p-4">
        <div className="flex gap-3 items-center">
          {/* Wallet icon */}
          <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
            <ListIcon className="text-orange-600" />
          </div>
          {/* Wallet name */}
          <div className="flex flex-col">
            <span className="font-bold text-black hover:text-orange-600 cursor-pointer max-sm:text-sm">
              Create the UI design of the Task
            </span>
            {/* Project label */}
            <span className="text-slate-400 text-[13px]">Project</span>
          </div>
        </div>
        <div className="flex gap-36 font-bold items-center max-[770px]:hidden">
          <div className="flex gap-2 items-center">
            {/* Status icon and label */}
            <CachedIcon className="text-[24px] text-slate-400" />
            <span className="text-[14px] text-slate-400">In Progress</span>
          </div>
          <div className="flex gap-2 items-center max-[940px]:hidden">
            {/* Priority icon and label */}
            <CircleIcon className="text-[10px] text-green-600" />
            <span className="text-slate-400 text-[14px]">Low</span>
          </div>
          <div className="flex gap-2 items-center">
            {/* Edit button */}
            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-orange-200 hover:bg-orange-300">
              <EditOutlinedIcon sx={{ fontSize: "17px" }} className="text-orange-600" />
            </div>
            {/* Delete button */}
            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
              <DeleteOutlineOutlinedIcon sx={{ fontSize: "17px" }} className="text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
