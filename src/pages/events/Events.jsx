import React, { useEffect, useState } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Events = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    async function getAllEventsByLocation() {
      try {
        const res = await axios.get(`https://holidaysri-backend.onrender.com/event/getEventsByLocation/${id}`);
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        alert("Error fetching events: " + error.message);
      }
    }
    getAllEventsByLocation();
  }, [id]);

  if (!location) {
    // If location is still loading, return a loading indicator or placeholder
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
        paddingBottom: '16px'
      }}
    >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop='16px' marginLeft='32px'>
          <a href="/all-locations" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', borderRadius: '30px' }}>Back</Button>
          </a>
        </Box>
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
        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
          >
            {events.length===0? <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="16px"
            >
              No Recent Events
            </Typography>: <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="16px"
            >
              Upcoming Recent Events
            </Typography>}
           
          </Box>
          {events.map((event) => (
            <Box
              key={event._id} 
              border={3}
              sx={{
                width: { lg: "1100px", xs: "280px" },
                borderColor: "black",
                borderRadius: "30px",
                backgroundColor: "rgba(48, 103, 84, 0.5)",
                padding: "24px",
                marginTop: { lg: "16px", xs: "16px" },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                  <Box width={{ lg: "100%" }} height={{ lg: "100%" }}>
                    <img
                      src={event.images}
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "30px" }}
                      alt="Event"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={10}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "24px", xs: "20px" },
                      textAlign: "left",
                    }}
                  >
                    {event.eventName}
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
                    {event.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Events;
