"use client";
import React ,{useEffect, useLayoutEffect, useRef, useState} from "react";
import { useContextApp } from "@/app/contextApp"; 
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CloseOutlinedIcon  from "@mui/icons-material/CloseOutlined";
import LibraryBooks  from "@mui/icons-material/LibraryBooks";



import {
    useForm,
    SubmitHandler,
    UseFormRegister,
    FieldErrors,
}from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

    const schema = z.object({
        projectName: z
        .string()
        .min(1, {message: "project name is required"})
        .max(20, {message: "project name must be 20 characters"}),
    });
    type FormData =z.infer<typeof schema>;

export function ProjectWindow() {
    const {
        openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    } = useContextApp();

    
    console.log(openProjectWindow);

    return (
        <div
            className={`${
                openProjectWindow ? "block" : "hidden"
            } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2
            -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md`}
        >
            {/* header */}
            <Header setOpenProjectWindow={setOpenProjectWindow} />
           
            {/* body */}
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2 pt-8 px-7 mt-3"
            >
                {/* project input */}
                <ProjectInput />

                {/* footer */}
                <Footer />
            </form>    
        </div>
    );
}

// Inside ProjectWindow component
function Header({ setOpenProjectWindow }: { setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">
                {/* Project Icon */}
                <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
                    <BorderAllIcon
                        sx={{ fontSize: "21px" }}
                        className="text-orange-600"
                        onClick={() => setOpenProjectWindow(false)}
                    />
                </div>

                {/* project header */}
                <span className="font-semibold text-lg text-slate-600">Add Project</span>
            </div>
            <CloseOutlinedIcon
                sx={{ fontSize: "18px" }}
                className="text-slate-300 cursor-pointer"
                onClick={() => setOpenProjectWindow(false)}
            />

        </div>
    );
}

function ProjectInput(){
    return (
        <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-slate-600">
                Project Name
            </span>
            <div className="flex gap-3 justify-between">

                {/* input */}
                <div className="w-full">
                    <input
                        placeholder="enter Project Name...."
                        className="w-full rounded-md border text-slate-400 outline-none p-[10px] text-[13px]"
                    />    
                </div>

                    {/* icon */}
                <div className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg cursor-pointer " />    
                    <LibraryBooks  />
            </div>
        </div>
    )
}



function Footer(){
    const {
        openProjectWindowObject:{ openProjectWindow, setOpenProjectWindow},
    } = useContextApp();
    

    return (
        <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">

            {/* cancel button */}
            <button 
                onClick={()=> setOpenProjectWindow(false)}
                className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md
                hover:border-slate-300 transition-all"
            >
                Cancel
            </button>

            <button
                type="submit"
                className="bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
            >
                Add Project
            </button>    

        </div>
    );


    

}


export default ProjectWindow;
