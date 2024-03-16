import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const TourGuide = () => {
  const [guides, setGuides] = useState([]);
  const [location, setLocation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { id, locationName } = useParams();

  useEffect(() => {
    async function getGuides() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/guide/"
        );
        setGuides(res.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
        alert("Error fetching guides: " + error.message);
      }
    }
    getGuides();
  }, []);

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

  const handleOpen = (guide) => {
    // Handle opening modal or any other action
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a href={`/destination/${id}`} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: "30px",
              }}
            >
              Back
            </Button>{" "}
          </a>
        </Box>

        <Grid container justifyContent="center"
        ontainer style={{
            backgroundImage: location ? `url(${location.backgroundImage})` : "",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            minHeight: {lg:"30vh",xs:"10vh"},
            paddingBottom: "16px",
           
          }}
        >
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
              minHeight: "100vh",
              paddingBottom: "16px",
            }}
          >
            <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="16px"
              marginBottom="16px"
            >
              Tour Guides in {locationName}
            </Typography>
          </Box>

          <Box
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/iplus/image/upload/v1710621250/pexels-filippo-peisino-2678301_njycll.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            paddingBottom: "16px",
          }}
          >
            <Grid
              container
              spacing={3}
              style={{
                transform: hoveredIndex !== null ? "translateY(-10px)" : "",
                transition: "transform 0.3s",
              }}
            >
              {guides.map((guide, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      borderColor: "black",
                      borderRadius: "30px",
                      backgroundColor: "rgba(255,255,255, 0.3)",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    variant="outlined"
                    onClick={() => handleOpen(guide)}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Name: {guide.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Email: {guide.email}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Contact Number: {guide.contactNumber}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Description: {guide.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TourGuide;
