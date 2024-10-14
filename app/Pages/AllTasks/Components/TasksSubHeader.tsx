import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

function TasksSubHeader() {
    return (
        <div className="mt-24 flex justify-between items-center">
            <MyProjectsText />
            <SortByButton />
        </div>
    );
}

function MyProjectsText() {  // Fixed naming to follow proper convention
    return (
        <div className="flex items-center gap-3">
            <div className="w-[41px] h-[44px] -mt-1 flex justify-center bg-orange-100 rounded-md">
                <SplitscreenIcon
                    sx={{ fontSize: "21px" }}
                    className="text-orange-600"
                />
            </div>
            <ul className="flex flex-col gap-[7px]">
                <li className="text-[17px] gap-2 flex font-semibold items-center">
                    <div className="bg-slate-700 flex gap-2 items-center">
                        <span className="text-lg">All Projects</span>
                        <span className="bg-slate-700 text-white text-[14px] p-[2px] px-2 rounded-md">
                            6
                        </span>
                    </div>
                    <KeyboardArrowDownIcon className="text-slate-600 text-lg" />
                </li>
                <div className="flex items-center gap-1">
                    <li className="h-[4px] w-[200px] text-[12px] rounded-md text-slate-200 overflow-auto"></li>
                    <p className="text-[12px] ml-3 text-slate-200">20% Completed</p>
                </div>
            </ul>
        </div>
    );
}

function SortByButton() {
    // Placeholder for SortByButton component
    return <div>Sort by Button</div>;
}

export default TasksSubHeader;
