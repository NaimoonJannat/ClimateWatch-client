import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/projects_banner.jpg'
import useProjects from "../Shared/Hooks/useProject";

const Projects = () => {

const [projects ] = useProjects()
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects"}
        
        />
        
        <div>
        {
        }
        </div>
            
        </div>
    );
};

export default Projects;