import React from "react";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import ListAltIcon from "@mui/icons-material/ListAlt";

export function ProjectsEmptyScreen() {
  return (
    <div className="p-1 gap-5 flex flex-col justify-center pt-[150px] pb-8 items-center">
      <ListAltIcon
        sx={{ fontSize: "130px" }}
        className="text-slate-400 opacity-25"
      />

      <div className="flex flex-col items-center gap-2">
        <h3 className="font-semibold opacity-80 text-slate-600 text-[16px] mb-1 text-center">
          No projects created yet...
        </h3>
        <p className="text-slate-400 w-[340px] text-center opacity-80 text-[13px]">
          It looks like you haven't started any projects yet. Create a new project to begin managing your tasks.
        </p>
      </div>
    </div>
  );
}
