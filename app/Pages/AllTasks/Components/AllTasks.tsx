import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import TasksSubHeader from "./TasksSubHeader";

function AllTasks() {
    return (
        <div className="bg-slate-50 w-full flex-grow overflow-auto p-10 max-sm:p-8 max-sm:py-9">
            <TasksHeader />
            <TasksSubHeader />
            <TasksList /> 
        </div>
    );
}
//3.44
export default AllTasks;
