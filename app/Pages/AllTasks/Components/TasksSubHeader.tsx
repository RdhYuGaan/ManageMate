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

function MyProjectsText() {
    return (
        <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] -mt-10 flex justify-center items-center bg-orange-100 rounded-md">
                <SplitscreenIcon
                    sx={{ fontSize: "21px" }}
                    className="text-orange-600"
                />
            </div>
            <ul className="flex flex-col gap-[7px]">
                <li className="text-[17px] gap-2 flex font-semibold items-center">
                    <div className="text-slate-700 flex gap-2 items-center">
                        <span className="text-lg">All Projects</span>
                        <span className="bg-slate-700 text-white text-[14px] p-[2px] px-2 rounded-md">
                            6
                        </span>
                    </div>
                    <KeyboardArrowDownIcon className="text-slate-600 text-lg" />
                </li>
                <li>
                    <div className="flex items-center gap-1">
                        <div className="text-[12px] h-[4px] w-[280px] bg-slate-400 rounded-md overflow-auto">
                            <div className="w-2/5 h-[100%] rounded-r-xl bg-orange-600"></div>
                        </div>
                        <p className="text-[12px] ml-3 text-slate-500">40% Completed</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

function SortByButton() {
    return (
        <div className="flex text-[15px] font-semibold gap-3">
            <span className="text-slate-600">Sort By</span>
            <div className="flex gap-1 items-center cursor-pointer">
                <span className="text-slate-800">Recent Projects</span>
                <KeyboardArrowDownIcon 
                    sx={{ fontSize: "19px" }} 
                    className="text-slate-800"
                />
            </div>
        </div>
    );
}

export default TasksSubHeader;
