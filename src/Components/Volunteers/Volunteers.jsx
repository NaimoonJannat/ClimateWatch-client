import PageBanner from "../Shared/PageBanner/PageBanner";
import image from '../../assets/banner/volunteer_banner.jpg'
import useVolunteers from "../Shared/Hooks/useVolunteers";
import VolunteerCard from "./VolunteerCard";

const Volunteers = () => {

const volunteers = useVolunteers()
console.log('vol', volunteers);


    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Volunteers"}
        
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {
        volunteers[0].map((volunteer, index) =>(
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