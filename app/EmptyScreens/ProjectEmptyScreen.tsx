import React from "react";
import AssignmentLateIcon form "@mui/icons-material/AssignmentLate";
import List from @mui/icons-material/ListAltimport { ListAlt } from "@mui/icons-material";
";

export function ProjectsEmptyScreen(){
    return (
        <div
            className={`p-1 gap-5 flex flex-col justify-center pt-[150px] pb-8 items-center`}
        >
            <ListAltIcon
                sx={{fontSize: "130px"}}
                className="text-slate-400 opasity-25" />

            <div className="flex flex-col items-center gap-2">
                <h3 className="font-semibold opacity-80 text-slate-600 text-[16px] mb-1 text-center">
                    {`no projects created yet.....`}
                </h3>
                <p className="text-slate-400 w-[340px] text-center opasity-80 text-[13px]">
                    {`It looks like you haven't started any projects yet.create a new project to begin managing your tasks.`}
                </p>
            </div>
        </div>
    )
}