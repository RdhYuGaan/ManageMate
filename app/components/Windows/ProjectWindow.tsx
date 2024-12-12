"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useContextApp } from "@/app/contextApp";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
  UseFormReset,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getIconComponent } from "@/app/functions/IconsAction";

// Validation schema
const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "Project name is required" })
    .max(30, { message: "Project name must be 30 characters or fewer" }),
});

export type FormData = z.infer<typeof schema>;

export function ProjectWindow() {
  const [isLoading, setLoading] = useState(false);

  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    allProjectsObject: { allProjects, setAllProjects },
    selectedIconObject: { selectedIcon, setSelectedIcon },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useContextApp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setFocus,
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const existingProject = allProjects.find(
      (project) => project.title.toLowerCase() === data.projectName.toLowerCase()
    );

    if (existingProject) {
      setError("projectName", {
        type: "manual",
        message: "Project already exists",
      });
      setFocus("projectName");
    } else {
      projectsFunction(data);
    }
  };

  async function projectsFunction(data: FormData) {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newProject = {
        id: uuidv4(),
        title: data.projectName,
        icon: selectedIcon?.name || "DefaultIcon",
        tasks: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setAllProjects([...allProjects, newProject]);
      setOpenProjectWindow(false);
      reset();

      toast.success("Project added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const handleClose = () => {
    setOpenProjectWindow(false);
    reset();
  };

  useLayoutEffect(() => {
    if (openProjectWindow) {
      if (!selectedProject) {
        reset();
      } else {
        setValue("projectName", selectedProject.title);
      }
    }
  }, [openProjectWindow, selectedProject, reset, setValue]);

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
        <Footer handleClose={handleClose} isLoading={isLoading} />
      </form>
    </div>
  );
}

function Header({ handleClose }: { handleClose: () => void }) {
  const {
    selectedIconObject: { setSelectedIcon },
    selectedProjectObject: { setSelectedProject },
  } = useContextApp();

  return (
    <div className="flex justify-between items-center pt-7 px-7">
      <div className="flex items-center gap-2">
        <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
          <BorderAllIcon sx={{ fontSize: "21px" }} className="text-orange-600" />
        </div>
        <span className="font-semibold text-lg">
          {selectedProject ? "Edit Project" : "New Project"}
        </span>
      </div>
      <CloseOutlinedIcon
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => {
          setSelectedIcon(null);
          setSelectedProject(null);
          handleClose();
        }}
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
    openIconWindowObject: { setOpenIconWindow },
    selectedIconObject: { selectedIcon },
  } = useContextApp();

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-slate-600">Project Name</span>
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <input
            {...register("projectName")}
            placeholder="Enter project name..."
            className="w-full rounded-md border text-slate-700 outline-none p-[10px] text-[13px]"
          />
          {errors.projectName && (
            <p className="text-red-500 text-[11px] mt-2">{errors.projectName.message}</p>
          )}
        </div>
        <div
          onClick={() => setOpenIconWindow(true)}
          className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg cursor-pointer"
        >
          {selectedIcon ? (
            getIconComponent(selectedIcon?.name, "text-white")
          ) : (
            <LibraryBooksIcon />
          )}
        </div>
      </div>
    </div>
  );
}

function Footer({ handleClose, isLoading }: { handleClose: () => void; isLoading: boolean }) {
  return (
    <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
      <button
        type="button"
        onClick={handleClose}
        className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="bg-orange-700 hover:bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
      >
        {isLoading ? "Saving..." : "Add Project"}
      </button>
    </div>
  );
}

export default ProjectWindow;
