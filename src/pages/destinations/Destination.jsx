import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

const Destination = () => {
  const { id } = useParams();
  const gridRef = useRef(null); // Reference for grid element
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://holidaysri-backend.onrender.com/location/get/${id}`);
        setLocation(response.data.location);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Error fetching location: " + error.message);
      }
    };

    fetchData();
  }, [id]);

  // Render loading state if location is not yet fetched
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

        <Box
          border={3}
          sx={{
            width: { lg: "850px", xs: "280px" },
            borderColor: "black",
            borderRadius: "30px",
            backgroundColor: "rgba(48, 103, 84, 0.5)",
            padding: "24px",
            marginLeft:"100px",
            marginTop: { lg: "54px", xs: "32px" },
            marginBottom: "32px",
          }}
        >
         <Link to={`/events/${id}`} style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", borderRadius: "30px" }}>View Events</Button>
          </Link>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white", borderRadius: "30px", marginLeft: "30px" }}>Find a Ride</Button>
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
              marginTop: '8px'
            }}
          >
             {location.details}
          </Typography>

        </Box>
      </Grid>
    </Grid>
  );
};

export default Destination;
