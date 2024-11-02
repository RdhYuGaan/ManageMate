import ProjectsHeader from "./ProjectHeader";
import  ProjectsSubHeader from "./ProjectsubHeader";
import AllProjectsSection from "./AllProjectsSection";
import StatsRightBar from "./StatsRightBar";
import ProjectWindow from "@/app/components/Windows/ProjectWindow";

function AllProjects(){
    return (
        <div className="bg-slate-50 w-full flex min-h-screen">
            <AllProjectsArea />
            <StatsRightBar />
        </div>    
    );
}


function AllProjectsArea(){
    return (
        <div className="w-[78%] p-10 max-lg:w-full flex flex-col gap-3 max-sm:p-8">
            <ProjectsHeader />

            <ProjectsSubHeader />
            <ProjectWindow/>

            <AllProjectsSection />
        </div>
    ) ;

}





export default AllProjects;