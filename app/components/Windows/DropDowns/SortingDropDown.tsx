"use client";
import { useContextApp } from "@/app/contextApp";
import React, {useState} from "react";

function SortingDropDown() {
    const {
        sortingOptionObject: { sortingOptions, setSortingOption },
    } = useContextApp();

    // const [sortingOptions, setSortingOptions] = useState([
    //     {
    //         catagory: "Order",
    //         options: [
    //             {label: "A-Z", value: "asc", selected:true},
    //             {label: "Z-A", value: "desc", selected:false},,
    //         ],
    //     },
    //     {
    //         catagory: "Date",
    //         options: [
    //             {label:"Newest", value: "newest", selected:false},
    //             {label:"Oldest", value: "oldest", selected:false},

    //         ],
    //     },
    // ]);

    return (
        <div
            className="bg-white text-sm top-[226px] right-60 z-[60] px-5 border-slate-50
            fixed py-6 w-[160px] select-none shadow-md rounded-lg flex flex-col"
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