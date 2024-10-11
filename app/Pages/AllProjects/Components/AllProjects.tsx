import ProjectsHeader from "./ProjectHeader";
import  ProjectsSubHeader from "./ProjectsubHeader";
import AllProjectsSection from "./AllProjectsSection";
function AllProjects(){
    return (
        <div className="bg-slate-50 w-full flex min-h-screen">
            <AllProjectsArea />
        </div>    
    );

    function AllProjectsArea(){
        return (
             <div className="w-[78%] p-10 flex flex-col gap-3">
                <ProjectsHeader />

                <ProjectsSubHeader />

                <AllProjectsSection />
            </div>
        ) ;

    }
}
export default AllProjects;