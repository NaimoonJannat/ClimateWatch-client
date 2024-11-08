import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/volunteer_banner.jpg'
import useVolunteers from "../Shared/Hooks/useVolunteers";
import VolunteerCard from "./VolunteerCard";

const Volunteers = () => {

const volunteers = useVolunteers()

    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Volunteers"}
        
        />
        <div>
        {
        volunteers.map((volunteer, index) =>(
        <VolunteerCard 
        key={index}
        volunteer={volunteer}
        />
        ))}
        </div>
            
        </div>
    );
};

export default Volunteers;