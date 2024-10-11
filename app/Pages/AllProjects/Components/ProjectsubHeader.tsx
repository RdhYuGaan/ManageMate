import { ClassNames } from "@emotion/react";
import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
 function ProjectsSubHeader(){
    return(
        <div className="mt-20 flex justify-between font-bold items-center">
            <MyProjectsText />
            <SortByButton />

        </div>
        
    );

    function MyProjectsText(){
        return
         <p className="text-[26px] font-bold">
            My Projects
        </p>
    }

    function SortByButton(){
        return(
            <div className="flex text-[15px] font-semibold gap-3">
                <span className="text-slate-200"> Sort By</span>
                <div className="text-slate-800">Recent Project</div>
                <KeyboardArrowDownIcon sx={{fontsize:"19px"}} />

            </div>
        );
    }

 }
 export default ProjectsSubHeader;