import ProjectsHeader from "./ProjectHeader";
import  ProjectsSubHeader from "./ProjectsubHeader";
import AllProjectsSection from "./AllProjectsSection";
import StatsRightBar from "./StatsRightBar";


function AllProjects(){
    return (
        <div className="bg-slate-50 w-full flex-grow overflow-auto flex">
            <AllProjectsArea />
            <StatsRightBar />
        </div>    
    );
}


function AllProjectsArea(){
    return (
        <div className="w-[78%] p-10 max-lg:w-full flex flex-col gap-3  max-sm:p-7 max-sm:pt-9">

            {/* search bar and add project button */}
            <ProjectsHeader />
                {/* my project title and add button */}
            <ProjectsSubHeader />
            
                {/* all projects added */}
            <AllProjectsSection />
        </div>
    ) ;

}

export default AllProjects;