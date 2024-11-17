import React,{Dispatch,SetStateAction,setStateAction} from "react";
import {v4 as uuidv4 } from "uuid";
import { Project } from "../Data/AllProjects";
import { IconData } from "../types/Apptype";
import {FormData} from "../components/Windows/ProjectWindow";

export function addNewProject(
    data:FormData,
    allProjects: Project[],
    setAllProjects: Dispatch<SetStateAction<Project[]>>,
    setOpenProjectWindow: Dispatch<SetStateAction<boolean>>,
    selectedIcon:IconData |null,
    reset:()=> void

) {
    try {
        const newProject:Project = {
            id: uuidv4(),
            title: data.projectName,
            icon: selectedIcon?.name || "LocalLibrary",
            tasks: [],
            clerkUserId:"123",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        setAllProjects([...allProjects, newProject]);
        setOpenProjectWindow(false);
        reset();
    } catch (error){}
}