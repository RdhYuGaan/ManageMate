import SingleProjectCard from "./SingleProjectCard";

function AllProjectsSection(){
    return(
        <ul className="flex h-[78%] overflow-x-auto p-5 gap-6 mt-6 max-sm:grid-cols-1">
            <SingleProjectCard />
            <SingleProjectCard />
            <SingleProjectCard />
            <SingleProjectCard />
            <SingleProjectCard />
        </ul>
    );
}

export default AllProjectsSection;
