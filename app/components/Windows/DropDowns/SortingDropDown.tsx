"use client";
import { useContextApp } from "@/app/contextApp";
import React, {useState} from "react";

function sortingDropDown() {
    const {
        sortingOptionObject: {sortingOptions, setSortingOption},

    }=useContextApp();

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
            {/* each catagory */}
            {sortingOptions.map((catagory, catagoryIndex)=>(
                <div
                    key={catagoryIndex}
                    className="flex flex-col gap-1 text-slate-700 cursor-pointer"
                >
                    <span
                        className={'text-[13px] font-bold ${
                            category.catagory=== "Date" ?  "mt-5" : ""
                        }'}
                    >
                        {category.category}
                    3.02s

            ))}
        </div>
    )
}