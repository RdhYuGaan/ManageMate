"use client";
import React from "react";
import { useContextApp } from "@/app/contextApp"; 
import BorderAllIcon from "@mui/icons-material/BorderAll";

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
                {/* <ProjectInput /> */}

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
            </div>
        </div>
    );
}


export default ProjectWindow;
