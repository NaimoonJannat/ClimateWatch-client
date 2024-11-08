import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import image from '../../assets/banner/volunteer_banner.jpg'
import PageBanner from "../Shared/PageBanner/PageBanner";
const SingleVolunteer = () => {
    const volunteers = useLoaderData();
    const { id } = useParams();
    const [volunteer, setVolunteers] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:8000/volunteers/${id}`)
        .then((res) => res.json())
        .then((data) => setVolunteers(data));
    }, [id]);
    console.log(volunteer[0]);
    
    const {
        name,
        profession,
        phone,
        qualification,
        social_profile,
        skills,
        resume_link,
        photo_url,
        website,
        bio,
        email,
        date_of_birth
      } = volunteer || {};
    return (
        <div>
        <PageBanner 
        image={image}
        pageName={"Volunteers"}
        
        />
            <h1 className="text-5xl">
            {name}
            </h1>
        </div>
    );
};

export default SingleVolunteer;