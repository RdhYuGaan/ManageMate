import { useContextApp } from "@/app/contextApp";
import React, { useState } from "react";

function setConfirmationWindow() {
    const {
        openConfirmationWindowObject: {
            openConfirmationWindow,
            setOpenConfirmationWindow,
        },
        selectedProjectObject: {setSelectedProject},
    }= useContextApp();

    function closeConfirmationWindow() {
        setOpenConfirmationWindow(false);
        setSelectedProject(null);
    }

    
}