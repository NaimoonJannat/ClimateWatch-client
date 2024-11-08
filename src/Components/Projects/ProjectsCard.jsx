import PageBanner from "../Shared/PageBanner/PageBanner";
import image from "../../assets/banner/projects_banner.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectsCard = ({ projectsCard }) => {


  const {
  _id,
    photo,
    heading,
    description,
    neededFund,
    fundCollected,
  } = projectsCard;
  // console.log(projectsCard);

  // function valuetext(value: number) {
  //   return `${value}°C`;
  // }

  const foundPercentage = (fundCollected * 100) / neededFund;

  return (
    <div className="my-5">
      <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-s-lg"
          src={photo}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
        <Link
        to={`/projects/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
        </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description.split(" ").slice(0, 10).join(" ")}...
          </p>

          <div className="py-10">
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Always visible"
                value={parseInt(foundPercentage)}
                // getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="on"
              />
            </Box>
          </div>
          
          <div className="flex justify-between items-center text-white">
          <p>${fundCollected} Raised Of ${neededFund}</p>
          
          <p>{foundPercentage.toFixed(2)}%</p>
          </div>
          
          <div className="py-5">
          <Link to={`/donations`}>
          <Button variant="contained">Donation</Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
