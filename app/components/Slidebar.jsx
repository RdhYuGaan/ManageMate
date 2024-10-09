import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAltIcon";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import splitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/logout";


function SlideBar() {
    return (
        <div className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
           < Logo />
           < Menu />
           < Profile />
           
        </div>
    );

    function Menu() {
        return (
            <div className="text-slate-300 cursor-pointer">
                
            </div>
        );
    }


    function Profile() {
        return 
        <div className="w-7 h-7 bg-orange-700 rounded-md">
        </div>
    }





    function Logo() {
        return (
            <div className=" flex items-center justify-center rounded-md">
                <TaskAltIcon 
                    className="font-bold text-orange-600"
                    sx={{ fontSize: "41px" }}
                />
            </div>
        );
    }


}
