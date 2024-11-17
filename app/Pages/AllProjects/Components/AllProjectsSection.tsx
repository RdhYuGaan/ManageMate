import { useContextApp } from "@/app/contextApp";
import SingleProjectCard from "./SingleProjectCard";
import { useContextApp } from "@/app/contextApp";



function AllProjectsSection(){
    const {
        allProjectsObject: {allProjects},

    }= useContextApp();
    return(
        <ul className="overflow-auto gap-4 flex flex-wrap mt-6 max-sm:grid-cols-1">
            [allProjects.map((project)=>(
                <SingleProjectCard key={projects.id} project={project} />
            ))]
           
           
        </ul>
    );
}

export default AllProjectsSection;
