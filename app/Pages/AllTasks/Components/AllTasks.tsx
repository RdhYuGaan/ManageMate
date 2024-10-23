import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import TasksSubHeader from "./TasksSubHeader";

function AllTasks() {
    return (
        <div className="bg-slate-50 w-full p-10">
            <TasksHeader />
            <TasksSubHeader />
            <TasksList /> 
        </div>
    );
}

export default AllTasks;
