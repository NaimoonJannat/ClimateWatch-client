import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/donation_banner.jpg'

const Donation = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Make Donation"}
        
        />
            
        </div>
    );
};

export default Donation;