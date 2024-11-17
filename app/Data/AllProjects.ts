import { LocalLibrary } from "@mui/icons-material";
import {v4 as uuidv4 } from "uuid";

//define structure for task
export type Task={
    id: string;
    title: string;
    icon:string;
    projectName:string;
    status: "In Prograss" |"Completed";
    priority: "low" | "Medium"|"High";
    createdAt: string;
    updatedAt: string;

};

//define the structure of a project

export type Project = {
    id: string;
    clerkUserId:string;
    title: string;
    createdAt: string;
    updatedAt: string;
    icon:string;

    tasks: Task[]; 

};


//sample data with tasks
export const projectsdata: Project[]= [

    {
        id: uuidv4(),
        clerkUserId:"123",
        title:"Project Title",
        createdAt:"2024-08-26T10:00:00Z",
        updatedAt: "2024-08-28T14:30:00Z",
        icon: " LocalLibrary",

        tasks:[

            {
                id:uuidv4(),
                title: "Create the UI Design of the Task",
                icon:"Movie",
                projectName:"Project",
                status: "In Prograss" ,
                priority: "low" ,
                createdAt:"2024-08-26T10:00:00Z",
                updatedAt: "2024-08-28T14:30:00Z",
            },
            {
                id:uuidv4(),
                title: "Develop the Backend API",
                icon:"code",
                projectName:"Project",
                status: "In Prograss" ,
                priority: "High" ,
                createdAt:"2024-08-26T10:00:00Z",
                updatedAt: "2024-08-28T14:30:00Z",
            },
            {
                id:uuidv4(),
                title: "Connect Database",
                icon:"code",
                projectName:"Project",
                status: "In Prograss" ,
                priority: "Medium" ,
                createdAt:"2024-08-26T10:00:00Z",
                updatedAt: "2024-08-28T14:30:00Z",
            },

        ]
    },
    
    
    
    

]