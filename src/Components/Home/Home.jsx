
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
      
      <Weather/>
    </div>
  );


export default Home;
