import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/projects_banner.jpg'

const Projects = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects"}
        
        />
            
        </div>
    );
};

export default Projects;