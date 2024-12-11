import React,{Dispatch,SetStateAction,} from "react";
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

export function deleteProject(
    selectedProject: Project | null,
    setSelectedProject: React.Dispatch<React.setStateAction<Project | null>>,
    allProjects: Project[],
    setAllProjects: React.Dispach<React.setStateAction<Project[]>>,
    setOpenConfirmationWindow: React.Dispach<React.setStateAction<boolean>>
) {
    if (selectedProject) {
        const updateAllProjects = allProjects.filter(
            (project)=> project.id !==selectedProject.id
        );

        setAllProjects(updateAllProjects);
        setSelectedProject(null);
        setOpenConfirmationWindow(false);
    }
}