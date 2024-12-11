import { useContextApp } from "@/app/contextApp";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { deleteProject } from "@/app/functions/projectsActions";
import { Project } from "react";


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
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            // Set loading to false
            setLoading(false);
            setOpenConfirmationWindow(false);
            toast.success("Project deleted successfully");
        }
    }

    return (
        <div
            className={`w-[38%] bg-white max-sm:w-[91%] max-lg:w-[80%] p-6 fixed shadow-md
                z-[90] rounded-lg flex items-center top-[30%] left-1/2 -translate-x-1/2
                ${openConfirmationWindow ? "block" : "hidden"
                }`}
        >
            <div className="rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-5">Delete Project</h2>
                <p className="text-gray-600 mb-4 text-sm">
                    Are you sure you want to remove this project? This action cannot be undone and will remove all associated data.
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
                       
                        className={`px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-lg ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isLoading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationWindow;
