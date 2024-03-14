import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const Locations = (props) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function getAllLocations() {
      try {
        const res = await axios.get("https://holidaysri-backend.onrender.com/location/");
        setLocation(res.data);
      } catch (error) {
        console.error("Error fetching Locations:", error);
        alert("Error fetching Locations: " + error.message);
      }
    }
    getAllLocations();
  }, []);

  return (
    <div
      style={{
        paddingTop: "16px",
        paddingBottom: "16px",
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1709990615/pexels-alex-azabache-3723035_1_xs9aso.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          margin: { lg: "40px", xs: "16px" },
          padding: { lg: "24px", xs: "10px" },
          borderRadius: "20px",
        }}
      >
        <Box textAlign="center" marginTop={{ lg: "4%", xs: "4%" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: { lg: "50px", xs: "32px" },
            }}
          >
            Holiday Sri
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {location.map((location) => (
            <Grid item xs={6} lg={3} key={location._id}>
              <Link to={`/destination/${location._id}`} style={{ textDecoration: 'none' }}>
                <Box
                  border={3}
                  sx={{
                    width: "100%",
                    height: "250px",
                    borderColor: "black",
                    borderRadius: "30px",
                    backgroundColor: "rgba(48, 103, 84, 0.5)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <ImageSlider images={location.images} />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      textAlign: "center",
                      color: "white",
                      p: 2,
                    }}
                  >
                    <Typography variant="h6">{location.locationName}</Typography>
                    <Typography variant="body1">
                      {location.district} District
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <img
      src={images[currentImageIndex]}
      alt={`Location Image ${currentImageIndex + 1}`}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export default Locations;
