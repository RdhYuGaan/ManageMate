"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { useContextApp } from "@/app/contextApp";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import {
    useForm,
    SubmitHandler,
    UseFormRegister,
    FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    projectName: z
        .string()
        .min(1, { message: "project name is required" })
        .max(20, { message: "project name must be 20 characters" }),
});
type FormData = z.infer<typeof schema>;

export function ProjectWindow() {
    const {
        openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    } = useContextApp();
    console.log(openProjectWindow);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("form submitted with data", data);
        handleClose();
    };

    const handleClose = () => {
        console.log("closing window and resetting form");
        setOpenProjectWindow(false);
        reset();
    };

    useLayoutEffect(() => {
        if (openProjectWindow) {
            console.log("window opened, resetting form");
            reset();
        }
    }, [openProjectWindow, reset]);

    return (
        <div
            className={`${
                openProjectWindow ? "block" : "hidden"
            } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2
            -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md`}
        >
            <Header handleClose={handleClose} />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 pt-8 px-7 mt-3">
                <ProjectInput register={register} errors={errors} />
                <Footer handleClose={handleClose} />
            </form>
        </div>
    );
}

function Header({ handleClose }: { handleClose: () => void }) {
    return (
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">
                <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
                    <BorderAllIcon sx={{ fontSize: "21px" }} className="text-orange-600" />
                </div>
                <span className="font-semibold text-lg text-slate-600">Add Project</span>
            </div>
            <CloseOutlinedIcon
                sx={{ fontSize: "18px" }}
                className="text-slate-300 cursor-pointer"
                onClick={handleClose}
            />
        </div>
    );
}

function ProjectInput({
    register,
    errors,
}: {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}) {
    const {
        openProjectWindowObject: { openProjectWindow },
    } = useContextApp();

    useEffect(() => {
        if (openProjectWindow) {
            const inputElement = document.querySelector<HTMLInputElement>('input[name="projectName"]');
            if (inputElement) {
                inputElement.focus();
            }
        }
    }, [openProjectWindow]);

    return (
        <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-slate-600">Project Name</span>
            <div className="flex gap-3 justify-between">
                <div className="w-full">
                    <input
                        {...register("projectName")}
                        placeholder="enter Project Name..."
                        className="w-full rounded-md border text-slate-400 outline-none p-[10px] text-[13px]"
                    />
                    {errors.projectName && (
                        <p className="text-red-500 text-[11px] mt-2">{errors.projectName.message}</p>
                    )}
                </div>
                <div className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg cursor-pointer">
                    <LibraryBooks />
                </div>
            </div>
        </div>
    );
}

function Footer({ handleClose }: { handleClose: () => void }) {
    return (
        <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
            <button
                onClick={handleClose}
                className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md
                hover:border-slate-300 transition-all"
            >
                Cancel
            </button>

            <button
                type="submit"
                className="bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
            >
                Add Project
            </button>
        </div>
    );
}

export default ProjectWindow;