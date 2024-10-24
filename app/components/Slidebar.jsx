import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";  
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout"; 


function  SlideBar() {
    return (
        <div className="w-[97px] h-screen py-10 bg-white flex flex-col items-center justify-between max-[940px]:hidden">
           < Logo />
           < Menu />
           < Profile />
           
        </div>
    );

    function Menu() {
        return (
            <div className=" flex items-center flex-col gap-6 justify-center rounded-md">
                <BorderAllIcon 
                    sx={{ fontSize: "25px" }}
                    className="font-bold cursor-pointer text-orange-600"                    
                />
                <SplitscreenIcon 
                    sx={{ fontSize: "25px" }}
                    className=" cursor-pointer text-slate-300"                    
                />
                <LogoutIcon 
                    sx={{ fontSize: "25px" }}
                    className=" cursor-pointer text-slate-300"                    
                />
            </div>
        );
    
    }


    function Profile() {
        return (
        <div className="w-6 h-6 bg-orange-700 rounded-md">
        </div>
        )
    }

    function Logo() {
        return (
            <div className=" flex items-center justify-center rounded-md">
                <TaskAltIcon 
                    className="font-bold text-orange-600"
                    sx={{ fontSize: "35px" }}
                />
            </div>
        );
    }


}
 export default SlideBar