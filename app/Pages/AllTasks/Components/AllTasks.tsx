import TasksHeader from "./TasksHeader";
import TasksSubHeader from "./TasksSubHeader";

function AllTasksContainer() {
    return (
        <div className="bg-slate-50 w-full p-10">
            <TasksHeader />
            <TasksSubHeader />
        </div>
    );
}

export default AllTasksContainer;
