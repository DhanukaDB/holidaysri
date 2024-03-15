import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import Banner from "./Banner";
import axios from "axios";
import { Link } from "react-router-dom";

const Locations = (props) => {
  const [location, setLocation] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    async function getAllLocations() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/location/"
        );
        setLocation(res.data);
      } catch (error) {
        console.error("Error fetching Locations:", error);
        alert("Error fetching Locations: " + error.message);
      }
    }
    getAllLocations();
  }, []);
  const filteredLocations = location.filter((location) =>
    location.locationName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div
      style={{
        paddingBottom: "16px",
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1710524824/pexels-aj-ahamad-19149700_b9hzgv.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Banner />

      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          margin: { lg: "40px", xs: "16px" },
          padding: { lg: "24px", xs: "10px" },
          borderRadius: "20px",
        }}
      >
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="standard"
          fullWidth
          placeholder="Search by location name"
          InputProps={{
            sx: {
              color: "white",
              width: { lg: "500px" },
              "::placeholder": { color: "white" },
              "&:focus": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green", // Change the selected indicator color to green
                },
              },
            },
          }}
          sx={{ marginBottom: 2 }}
        />
        <Grid container spacing={2}>
          {filteredLocations.map((location, index) => (
            <Grid item xs={6} lg={3} key={location._id}>
              <Link
                to={`/destination/${location._id}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  border={3}
                  sx={{
                    width: "100%",
                    height: "250px",
                    borderColor: "black",
                    borderRadius: "30px",
                    backgroundColor:
                      hoveredIndex === index
                        ? "rgba(15, 40, 29, 0.3)"
                        : "rgba(48, 103, 84, 0.5)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "background-color 0.5s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
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
                      backgroundColor:
                        hoveredIndex === index
                          ? "rgba(15, 40, 29, 0.5)"
                          : {lg:"rgba(15, 40, 29, 0.7)",xs:"rgba(15, 40, 29, 0.6)"},
                      p: 2,
                      transition: "background-color 0.5s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: hoveredIndex === index ?{ lg:"34px",xs:'22px'} : {lg:"32px",xs:'20px'},fontFamily: "poppins",
                        transition: "font-size 0.5s ease",
                      }}
                    >
                      {location.locationName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: hoveredIndex === index ? {lg:"20px",xs:'16px'} : {lg:"14px",xs:'12px'},fontFamily: "poppins",
                        transition: "font-size 0.5s ease",
                      }}
                    >
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
