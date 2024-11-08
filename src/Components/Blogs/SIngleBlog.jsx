import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/blogs_banner.jpg'

const SingleBlog = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects"}
        
        />
            
        </div>
    );
};

export default SingleBlog;