import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";  
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout"; 
import { useContextApp } from "../contextApp";

function SideBar() {
    const {
        openSideBarObject: { openSideBar },
    } = useContextApp();

    return (
        <div 
            className={`${
                openSideBar ? "w-[280px] fixed shadow-xl" : "w-[97px] max-[940px]:hidden"
            } h-screen py-10 bg-white flex flex-col items-center
            justify-between z-[90] transition-all`}
        >
           <Logo />
           <Menu />
           <Profile />
        </div>
    );

    function Menu() {
        return (
            <div className="flex flex-col gap-6">
                {/* All Projects Icon */}
                <div className="flex items-center gap-2">
                    <BorderAllIcon 
                        sx={{ fontSize: "25px" }}
                        className="cursor-pointer text-slate-300" 
                    />
                    {openSideBar && <span className="text-slate-400">All Projects</span>}
                </div>

                {/* All Tasks Icon */}
                <div className="flex items-center gap-2">
                    <SplitscreenIcon 
                         sx={{ fontSize: "25px" }}
                         className="cursor-pointer text-orange-600"                    
                    />
                    {openSideBar && <span className="text-orange-600">All Tasks</span>}
                </div>

                {/* Logout Icon */}
                <div className="flex items-center gap-2">
                    <LogoutIcon 
                        sx={{ fontSize: "25px" }}
                        className="cursor-pointer text-slate-300"                    
                    />
                    {openSideBar && <span className="text-orange-600">Logout</span>}
                </div>
            </div>
        );
    }

    function Profile() {
        return (
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-600 rounded-md"></div>
                {openSideBar && (
                    <ul>
                        <li className="font-bold text-[14px]">Radith Yugan</li>
                        <li className="text-slate-400 text-[11px]">radithyugan22@gmail.com</li>
                    </ul>
                )}
            </div>
        );
    }

    function Logo() {
        return (
            <div className="flex items-center justify-center rounded-md">
                <TaskAltIcon 
                    className="font-bold text-orange-600"
                    sx={{ fontSize: "35px" }}
                />
                {openSideBar && (
                    <div className="text-xl flex items-center gap-1">
                        <span className="font-bold">Project</span>
                        <span className="text-slate-600">Master</span>
                    </div>    
                )}
            </div>
        );
    }
}

export default SideBar;
