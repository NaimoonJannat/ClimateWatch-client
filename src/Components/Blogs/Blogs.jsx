import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/blogs_banner.jpg'

const Blogs = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Projects"}
        
        />
            
        </div>
    );
};

export default Blogs;