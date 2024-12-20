import { useContextApp } from "@/app/contextApp";
import React, { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function MoreDropDown() {
    const {
        openDropDownObject: { openDropDown, setOpenDropDown },
        dropDownPositionsObject: { dropDownPositions },
        selectedProjectObject: { setSelectedProject },
        openConfirmationWindowObject: { setOpenConfirmationWindow },
        openProjectWindowObject: { setOpenProjectWindow },
    } = useContextApp();

    const [dropDownOptions] = useState([
        { id: 1, name: "Edit", icon: <EditOutlinedIcon /> },
        { id: 2, name: "Delete", icon: <DeleteIcon /> },
    ]);

    const menuRef = useRef<HTMLDivElement>(null);

    const clickedItemHandler = (id: number) => {
        if (id === 1) {
            // Open project edit window
            setOpenProjectWindow(true);
        } else if (id === 2) {
            // Open confirmation window for deletion
            setOpenConfirmationWindow(true);
        }
        // Close dropdown menu
        setOpenDropDown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                // Close dropdown menu if clicked outside
                setOpenDropDown(false);
                // Reset selected project if clicked outside
                setSelectedProject(null);
            }
        };

        const handleResize = () => {
            // Close dropdown menu on window resize
            setOpenDropDown(false);
        };

        if (openDropDown) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("resize", handleResize);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [openDropDown, setOpenDropDown, setSelectedProject]);

    return (
        <div
            ref={menuRef}
            style={{
                top: dropDownPositions?.top,
                left: dropDownPositions?.left,
            }}
            className={`bg-white fixed z-[90] px-5 py-6 w-[130px] border border-slate-200 
                shadow-md rounded-lg flex flex-col gap-4 ${
                openDropDown ? "block" : "hidden"
            }`}
        >
            {dropDownOptions.map((option) => (
                <div
                    key={option.id}
                    onClick={() => clickedItemHandler(option.id)}
                    className={`flex gap-2 items-center text-slate-600 cursor-pointer
                        hover:text-orange-600 ${
                            option.id === 2 ? "hover:text-red-600" : ""
                        }`}
                >
                    {option.icon}
                    <span className="text-sm">{option.name}</span>
                </div>
            ))}
        </div>
    );
}

export default MoreDropDown;
