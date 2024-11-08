import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/projects_banner.jpg'

const SingleProject = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects Single"}
        
        />
            
        </div>
    );
};

export default SingleProject;