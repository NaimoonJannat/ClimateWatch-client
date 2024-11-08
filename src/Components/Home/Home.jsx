import { Box, Typography } from "@mui/material";
import image from "../../assets/banner-img.jpg";
import Weather from "../Weather/Weather";
const Home = () => {
  return (
    <div>
      <Box
        sx={{
          // width: '100vw',
          height: { xs: 200, sm: 300, md: 500 },
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${image})`, // Gradient overlay with background image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          color: "#fff",
          //   textAlign: "center",
          height: "100vh",
          p: 2,
        }}
      >
        <Box sx={{ paddingLeft: "100px" }}>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "60px",
            }}
            variant="h3"
            component="h1"
            gutterBottom
          >
            Welcome to our Climate Watch
          </Typography>
          <p className=""> Your journey to sustainability starts here.</p>
        </Box>
      </Box>

      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 text-white">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
        <h1>Weather </h1>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Weather />
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
        <h1>Forecast </h1>
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Weather />
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
        <h1 className="">weather map </h1>
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Weather />
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        
        
      </div>
      
      {/* <div className="mt-10 text-center">
        <h1>Carbn Foot Print</h1>
        <p>
        A carbon footprint is the total amount of greenhouse gases (GHGs) released into the atmosphere by an individual, organization, event, or product. GHGs are gases that trap and release heat, contributing to climate change. 

        </p>
        
      </div> */}
    </div>
  );
};

export default Home;
