import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/donation_banner.jpg'
import Payment from "./Payment";

const Donation = () => {
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Make Donation"}
        
        />
            <Payment></Payment>
        </div>
    );
};

export default Donation;