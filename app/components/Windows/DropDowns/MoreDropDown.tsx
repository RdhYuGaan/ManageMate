import { useContextApp } from "@/app/contextApp";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function MoreDropDown() {
    const {
        openDropDownObject: { openDropDown, setOpenDropDown },
        dropDownPositionsObject: { setDropDownPositions, dropDownPositions },
    } = useContextApp();

    const [dropDownOptions, setDropDownOptions] = useState([
        { id: 1, name: "edit", icon: <EditOutlinedIcon /> },
        { id: 2, name: "delete", icon: <DeleteIcon /> },
    ]);

    const menuRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenDropDown(false);
            }
        }

        if (openDropDown) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            document.body.style.overflow = ""; // Restore scrolling
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = ""; // Restore scrolling on cleanup
        };
    }, [openDropDown, setOpenDropDown]);

    return (
        <div
            ref={menuRef}
            style={{
                top: dropDownPositions?.top || 0,
                left: dropDownPositions?.left || 0,
            }}
            className={`bg-white fixed z-[90] px-5 py-6 w-[130px] border-slate-50 shadow-md rounded-lg flex flex-col gap-7 ${
                openDropDown ? "block" : "hidden"
            }`}
        >
            {dropDownOptions.map((dropDownOption) => (
                <div
                    key={dropDownOption.id}
                    className={`flex gap-1 items-center text-slate-400 cursor-pointer hover:text-orange-600 ${
                        dropDownOption.id === 2 ? "hover:text-red-600" : ""
                    }`}
                >
                    {/* Icon */}
                    {dropDownOption.icon}
                    <span className="text-[14px]">{dropDownOption.name}</span>
                </div>
            ))}
        </div>
    );
}

export default MoreDropDown;
