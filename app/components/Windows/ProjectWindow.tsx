"use client";
import React from "react";
import { useContextApp } from "@/app/contextApp"; 
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CloseOutlinedIcon  from "@mui/icons-material/CloseOutlined";
import LibraryBooks  from "@mui/icons-material/LibraryBooks";

export function ProjectWindow() {
    const {
        openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    } = useContextApp();

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
                {/* <Footer /> */}
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
                <span className="font-semibold text-lg">Add Project</span>
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
                        placeholder="enter Project Name....."
                        className="w-full rounded-md border outline-none p-[10px] text-[13px]"
                    />    
                </div>

                    {/* icon */}
                <div className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg cursor-pointer " />    
                    <LibraryBooks />
            </div>
        </div>
    )
}


export default ProjectWindow;
