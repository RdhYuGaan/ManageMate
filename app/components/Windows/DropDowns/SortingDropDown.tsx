"use client";
import { useContextApp } from "@/app/contextApp";
import React, {useState, useEffect, useRef} from "react";

function SortingDropDown() {
    const {
        sortingOptionObject: { sortingOptions, setSortingOptions},
        openSortingDropDownObject: {openSortingDropDown, setOpentSortingDropDown},
        sortingDropDownPositionsObject:{sortingDropDownPositions},
    } = useContextApp();

    const dropDownRef=useRef<HTMLDivElement>(null);

    useEffect(()=>{
        function handleClickOutside(event:MouseEvent) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node)
            ) {
                //close drop down menu if user click outsize
                setOpentSortingDropDown(false);

            }
        }

        function handleReSize(){
            //close dropdown menu when window is  resize
            setOpentSortingDropDown(false);

        }

        if(openSortingDropDown) {
            document.addEventListener("mousedown", handleClickOutsize);
            window.addEventListener("resize" , handleReSize);

        }else {
            document.removeEventListener("mousedown", handleClickOutsize);
            window.removeEventListener("resize" , handleReSize);
            //restore scrolling

        }
        return ()=> {
            document.removeEventListener("mousedown", handleClickOutsize);
            window.removeEventListener("resize" , handleReSize);
            //restore scrolling to cleanup
            
        };
    },[openSortingDropDown, setOpenSortingDropDown]);

    


    return (
        <div
            ref={dropDownRef}
            style={{
                top: `${sortingDropDownPositions.top}px`,
                left: `${sortingDropDownPositions.left}px`,
                width: `${sortingDropDownPositions.width}px`,
            }}
            className={`bg-white text-sm top-[226px] right-60 z-[60] px-5 border-slate-50
            fixed py-6 w-[160px] select-none shadow-md rounded-lg flex flex-col ${openSortingDropDown ? "block": "hidden"}`}
        >
            {/* Each category */}
            {sortingOptions.map((catagory, catagoryIndex) => (
                <div
                    key={catagoryIndex}
                    className="flex flex-col gap-1 text-slate-700 cursor-pointer"
                >
                    <span
                        className={`text-[13px] font-bold ${
                            catagory.catagory === "Date" ? "mt-5" : ""
                        }`}
                    >
                        {catagory.catagory}
                    </span>

                    {/* Each option */}
                    <div className="flex flex-col gap-2 ml-2 mt-[5px]">
                        {catagory.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <span
                                    className={`${
                                        option.selected
                                            ? "text-orange-600"
                                            : "text-slate-500"
                                    } cursor-pointer hover:text-orange-600`}
                                    onClick={() => setSortingOption(option.value)}
                                >
                                    {option.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SortingDropDown;