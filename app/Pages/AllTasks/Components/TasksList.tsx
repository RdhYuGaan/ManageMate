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
    tabsOptionsObject: {tabsOptions, setTabsOptions},
  } = useContextApp();

  function countOnGoingTasks() {
    if (chosenProject) {
      return chosenProject.tasks.reduce((accTask, task) => {
        return accTask + (task.status === "In Progress" ? 1 : 0);
      }, 0);
    }

    return allProjects.reduce((accProjects, project) => {
      return (
        accProjects +
        project.tasks.reduce((accTasks, task) => {
          return accTasks + (task.status === "In Progress" ? 1 : 0);
        }, 0)
      );
    }, 0);
  }

  function completedTasks() {
    if (chosenProject) {
      return chosenProject.tasks.length - countOnGoingTasks();
    }

    const totalTasksInAllProjects = allProjects.reduce((acc, project) => {
      return acc + project.tasks.length;
    }, 0);

    return totalTasksInAllProjects - countOnGoingTasks();
  }

  function switchTabs(index: number) {
    setTabsOptions((prevState)=> 
      prevState.map((tab, i) => ({
        ...tab,
        isSelected: index === i,
      }))
    );
  }

  return (
    <div className="flex items-center mt-8 ml-3 gap-6 mb-5">
      {tabsOptions.map((singleTabOptions, index)=> (
        <div 
          key={index}
          onClick={()=> switchTabs(index)}
          className={`flex gap-2 cursor-pointer ${
            singleTabOptions.isSelected
              ? "text-orange-600 font-semibold"
              : "text-slate-300"
          }`}
        >
          <span>{singleTabOption.name}</span>
          <span 
            className={`${
              singleTabOption.isSelected 
              ? "bg-orange-600 " 
              : "bg-slate-300"
            }text-white px-2 rounded-md max-[420px]:hidden`}
          >
            {singleTabOptions.id === 1 ? countOnGoingTasks() : completedTasks()}
          </span>
        </div>
      ))}
    </div>
  );
}

function SingleTask() {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox />
      <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6 max-sm:p-4">
        <div className="flex gap-3 items-center">
          <div>
            <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
              <ListIcon className="text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-black hover:text-orange-600 cursor-pointer max-sm:text-sm">
              Create the UI design of the Task
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]">Project</span>
            </div>
          </div>
        </div>

        <div className="flex gap-36 font-bold items-center max-[770px]:hidden">
          <div className="flex gap-2 items-center">
            <CachedIcon className="text-[24px] text-slate-400" />
            <span className="text-[14px] text-slate-400">In Progress </span>
          </div>

          <div className="flex gap-2 items-center max-[940px]:hidden">
            <CircleIcon className="text-[10px] text-green-600" />
            <span className="text-slate-400 text-[14px]">Low</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="rounded-lg p-2 flex items-center transition-all justify-center cursor-pointer bg-orange-200 hover:bg-orange-300">
              <EditOutlinedIcon sx={{ fontSize: "17px" }} className="text-orange-600" />
            </div>

            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
              <DeleteOutlineOutlinedIcon sx={{ fontSize: "17px" }} className="text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
