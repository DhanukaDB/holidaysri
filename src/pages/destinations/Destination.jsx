import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Destination = () => {
  const { id } = useParams();
  const gridRef = useRef(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://holidaysri-backend.onrender.com/location/get/${id}`
        );
        setLocation(response.data.location);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Error fetching location: " + error.message);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const gridElement = gridRef.current;

    let animationFrameId;
    let startTime;

    const startAnimation = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      if (gridElement) {
        gridElement.scrollLeft =
          progress * (gridElement.scrollWidth - gridElement.clientWidth);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(startAnimation);
        } else {
          // Restart animation
          startTime = timestamp;
          animationFrameId = requestAnimationFrame(startAnimation);
        }
      }
    };

    const duration = 6000; // Duration in milliseconds
    animationFrameId = requestAnimationFrame(startAnimation);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${location.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12}>
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
          <Typography
            sx={{
              color: "white",
              fontFamily: "mansalva",
              marginTop: "8px",
              fontSize: { lg: "50px", xs: "32px" },
              letterSpacing: "20px",
            }}
          >
            {location.locationName}
          </Typography>
        </Box>

        <Box
          marginTop={{ lg: "32px", xs: "32px" }}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: { lg: "250px" },
            overflowX: "auto",
            overflow: "hidden",
            animation: "scrollRight 60s linear infinite",
          }}
        >
          <Grid
            container
            sx={{
              flexWrap: "nowrap",
              display: "flex",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                height: { lg: "250px", xs: "200px" },
                overflowX: "auto",
                overflow: "hidden",
              }}
              ref={gridRef}
            >
              <Grid
                container
                sx={{
                  marginTop: { lg: "16px", xs: "16px" },
                  flexWrap: "nowrap",
                  display: "flex",
                  height: { lg: "200px", xs: "150px" },
                }}
              >
                {location.images.map((images, index) => (
                  <img
                    key={index}
                    src={images}
                    alt={`image${index + 1}`}
                    style={{
                      margin: "8px",
                      width: "90%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "30px",
                    }}
                  />
                ))}
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Grid
          container
          spacing={3}
          marginLeft={{ lg: "30px" }}
          paddingLeft={{xs:'8%',lg:'0px'}}
          marginTop={{ lg: "30px",xs:'8px' }}
        >
          <Grid
            item
            lg={1}
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/events/${id}`} style={{ textDecoration: "none" }}>
              <Box
                border={2}
                sx={{
                  height: "100px",
                  width: {lg:"170px",xs:'140px'},
                  color: "black",
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "16px",
                  padding: "30px",
                  paddingTop:{lg:"38px",xs:'20px'}
                }}
              >
                <Typography sx={{ fontSize: "18px", textAlign: "center",fontWeight:'700' }}>
                  View Events
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={1}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/rides`} style={{ textDecoration: "none" }}>
              <Box
                border={2}
                sx={{
                  height: "100px",
                  width: {lg:"170px",xs:'140px'},
                  color: "black",
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "16px",
                  padding: "30px",
                  paddingTop:{lg:"38px",xs:'20px'}
                }}
              >
                <Typography sx={{ fontSize: "18px", textAlign: "center",fontWeight:'700' }}>
                  Find a Ride
                </Typography>
              </Box>
            </Link>
          </Grid>
         
          
        </Grid>

        <center>
          <Box
            border={3}
            sx={{
              width: { lg: "1050px", xs: "280px" },
              borderColor: "black",
              borderRadius: "30px",
              backgroundColor: "rgba(48, 103, 84, 0.5)",
              padding: "24px",
              marginLeft: {lg:"100px"},
              marginTop: { lg: "32px", xs: "32px" },
              marginBottom: "32px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "400",
                fontSize: { lg: "24px", xs: "20px" },
                textAlign: "left",
                marginTop: { lg: "34px", xs: "32px" },
              }}
            >
              DETAILS
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "400",
                fontSize: { lg: "16px", xs: "16px" },
                textAlign: "left",
                marginTop: "8px",
              }}
            >
              {location.details}
            </Typography>
          </Box>
        </center>
      </Grid>
    </Grid>
  );
};

export default Destination;
