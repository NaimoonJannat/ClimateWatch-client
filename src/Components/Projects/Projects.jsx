import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/projects_banner.jpg'
import useProjects from "../Shared/Hooks/useProject";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {

const [projects ] = useProjects()
console.log(projects);

    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects"}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {
        projects.map((project, index) =>(
        <ProjectsCard 
        key={index}
        projectsCard={project}
        />
        ))
        }
        </div>
            
        </div>
    );
};

export default Projects;