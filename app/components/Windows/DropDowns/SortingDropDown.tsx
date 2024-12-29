"use client";

import { useContextApp } from "@/app/contextApp";
import { sortProjects } from "@/app/functions/sortingFunctions";
import AllProjects from "@/app/Pages/AllProjects/Components/AllProjects";
import React, { useCallback, useEffect, useRef } from "react";

function SortingDropDown() {
    const {
        sortingOptionObject: { sortingOptions, setSortingOptions },
        openSortingDropDownObject: { openSortingDropDown, setOpenSortingDropDown },
        sortingDropDownPositionsObject: { sortingDropDownPositions },
    } = useContextApp();

    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node)
            ) {
                // Close dropdown menu if the user clicks outside
                setOpenSortingDropDown(false);
            }
        }

        function handleResize() {
            // Close dropdown menu when the window is resized
            setOpenSortingDropDown(false);
        }

        if (openSortingDropDown) {
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
    }, [openSortingDropDown, setOpenSortingDropDown]);

    const sortAllProjects = useCallback(()=>{
        const currentSortingOption= sortingOptions
        .flatMap((category)=>category.options)
        .find((option)=>option.selected);

        const selectedOption= currentSortingOption;
        return sortProjects(AllProjects, selectedOption?.value);
    },[AllProjects]);

    useEffect(()=> {
        const sortedProjects=sortAllProjects();
        if (JSON.stringify(sortProjects) !== JSON.stringify(AllProjects)) {
            setAllProjects(sortedProjects);
        }
    },[allProjects]);

    function handleOptionSelected(categoryIndex: number, optionIndex: number) {
        // Update selection in the sorting options array
        const updatedSortingOptions = sortingOptions.map((category, cIndex) => ({
            ...category,
            options: category.options.map((option, oIndex) => ({
                ...option,
                selected: cIndex === categoryIndex && oIndex === optionIndex,
            })),
        }));

        // Get the option object that is selected
        const selectedOption = updatedSortingOptions
            .flatMap((category) => category.options)
            .find((option) => option.selected);

        console.log(selectedOption);

        setSortingOptions(updatedSortingOptions);
    }

    return (
        <div
            ref={dropDownRef}
            style={{
                top: `${sortingDropDownPositions.top}px`,
                left: `${sortingDropDownPositions.left}px`,
                width: `${sortingDropDownPositions.width}px`,
            }}
            className={`bg-white text-sm z-[60] px-5 border-slate-50 fixed py-6 w-[160px] select-none shadow-md rounded-lg flex flex-col ${
                openSortingDropDown ? "block" : "hidden"
            }`}
        >
            {/* Each category */}
            {sortingOptions.map((category, categoryIndex) => (
                <div
                    key={categoryIndex}
                    className="flex flex-col gap-1 text-slate-700 cursor-pointer"
                >
                    <span
                        className={`text-[13px] font-bold ${
                            category.catagory === "Date" ? "mt-5" : ""
                        }`}
                    >
                        {category.catagory}
                    </span>

                    {/* Each option */}
                    <div className="flex flex-col gap-2 ml-2 mt-[5px]">
                        {category.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <span
                                    className={`${
                                        option.selected
                                            ? "text-orange-600"
                                            : "text-slate-500"
                                    } cursor-pointer hover:text-orange-600`}
                                    onClick={() => handleOptionSelected(categoryIndex, optionIndex)}
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
