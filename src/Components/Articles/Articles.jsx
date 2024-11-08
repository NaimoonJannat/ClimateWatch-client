import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/article_banner.jpg'

const Articles = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Articles"}
        
        />
            
        </div>
    );
};

export default Articles;