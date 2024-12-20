import { useContextApp } from "@/app/contextApp";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function MoreDropDown() {
    const {
        openDropDownObject: { openDropDown, setOpenDropDown },
        dropDownPositionsObject: { setDropDownPositions, dropDownPositions },
        selectedProjectObject: {setSelectedProject},
        openConfirmationWindowObject: {setOpenConfirmationWindow},
        openProjectWindowObject: {setOpenProjectWindow}, 
    } = useContextApp();

    const [dropDownOptions, setDropDownOptions] = useState([
        { id: 1, name: "edit", icon: <EditOutlinedIcon /> },
        { id: 2, name: "delete", icon: <DeleteIcon /> },
    ]);

    const menuRef = React.useRef<HTMLDivElement>(null);

    function clickedItemHandler(id: number) {
        if (id===1){
            //open project window
            setOpenProjectWindow(true);
        }
        if (id===2){
            //open the window to confirm the delection
            setOpenConfirmationWindow(true);
        }
         //close drop down menu
         setOpenDropDown(false);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                //close drop down menu if user click outside of it
                setOpenDropDown(false);
                //set the select project to null if user click outside
                setSelectedProject(null);
            }
        }
        function handleResize(){
            //close dropdown menu when the window is resize
            setOpenDropDown(false);
        }

        if (openDropDown) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("resize", handleReSize);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleReSize);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleReSize);
        };
    }, [openDropDown, setOpenDropDown]);

    return (
        <div
            ref={menuRef}
            style={{
                top: dropDownPositions?.top,
                left: dropDownPositions?.left,
            }}
            className={`bg-white fixed z-[90] px-5 py-6 w-[130px] border-slate-50 
                shadow-md rounded-lg flex flex-col gap-7 ${
                openDropDown ? "block" : "hidden"
            }`}
        >
            {dropDownOptions.map((dropDownOption) => (
                <div
                    key={dropDownOption.id}
                    onClick={()=> clickedItemHandler(dropDownOption.id)}
                    className={`flex gap-1 items-center text-slate-400 cursor-pointer
                     hover:text-orange-600 ${
                         dropDownOption.id === 2 ? "hover:text-red-600" : ""
                     }`}
                >
                    {dropDownOption.icon}
                    <span className="text-[14px]">{dropDownOption.name}</span>
                </div>
            ))}
        </div>
    );
}

export default MoreDropDown;
