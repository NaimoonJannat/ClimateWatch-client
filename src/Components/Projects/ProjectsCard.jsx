import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/projects_banner.jpg'

const ProjectsCard = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects"}
        
        />
            
        </div>
    );
};

export default ProjectsCard;