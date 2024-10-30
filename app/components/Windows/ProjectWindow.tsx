"use client";
import React from "react";
import { useContextApp } from "@/app/contextApp"; // Ensure this import path is correct


export function Projectwindow() {
    const {
        openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    } = useContextApp();

    return (
        <div
            className={`${
                openProjectWindow ? "block" : "hidden"
            } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2
            -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md`}
        >
            <Header />
           
        </div>
    );
}
