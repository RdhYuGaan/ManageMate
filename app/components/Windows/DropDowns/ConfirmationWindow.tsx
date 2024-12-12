import { useContextApp } from "@/app/contextApp";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { deleteProject } from "@/app/functions/projectsActions";
import { Project } from "@/app/types/ProjectTypes"; // Adjust the import path as needed

function ConfirmationWindow() {
  const {
    openConfirmationWindowObject: {
      openConfirmationWindow,
      setOpenConfirmationWindow,
    },
    selectedProjectObject: { selectedProject, setSelectedProject },
    allProjectsObject: { allProjects, setAllProjects },
  } = useContextApp();

  const [loading, setLoading] = useState(false);

  function closeConfirmationWindow() {
    setOpenConfirmationWindow(false);
    setSelectedProject(null);
  }

  async function deleteFunction() {
    try {
      // Set loading to true
      setLoading(true);

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Delete project
      deleteProject(
        selectedProject,
        setSelectedProject,
        allProjects,
        setAllProjects,
        setOpenConfirmationWindow
      );

      toast.success("Project deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      // Set loading to false
      setLoading(false);
    }
  }

  return (
    <div
      className={`w-[90%] max-w-md bg-white p-6 fixed shadow-md z-[90] rounded-lg
                flex flex-col items-center top-[30%] left-1/2 -translate-x-1/2 ${
                  openConfirmationWindow ? "block" : "hidden"
                }`}
    >
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-5">Delete Project</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Are you sure you want to remove this project? This action cannot be
          undone and will remove all associated data.
        </p>
        <div className="flex justify-end gap-2 mt-10 text-[13px]">
          <button
            onClick={closeConfirmationWindow}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={deleteFunction}
            disabled={loading}
            className={`px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationWindow;
