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

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [location, setLocation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { id, locationName } = useParams();

  useEffect(() => {
    async function getPartners() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/api/guide/allGuideProfiles"
        );
        setPartners(res.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
        alert("Error fetching partners: " + error.message);
      }
    }
    getPartners();
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

  const handleOpen = (partner) => {
    // Handle opening modal or any other action
  };

  return (
    <Grid container >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a href={`/destination/${id}`}  style={{ textDecoration: "none" }}>
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

        <Grid container   sx={{
              backgroundImage: location ? `url(${location.backgroundImage})` : "",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              minHeight: "100vh",
              paddingBottom: "16px",
            }}>
          <Box
           
          >
            <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="16px"
              textAlign="center"
            >
              Travel partners to connect in {locationName}
            </Typography>

            <Grid container 
              spacing={4}
              style={{
                transform: hoveredIndex !== null ? "translateY(-10px)" : "",
                transition: "transform 0.3s",
              }} >
              {partners.map((partner, index) => (
                <Grid item xs={12} sm={6} md={3} lg={8} key={index} >
                  <Box marginTop="20px" sx={{marginLeft :{lg:"30%" , sx:"0%"} , width :{lg:"900px", sx:"280px"}}}>
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
                      onClick={() => handleOpen(partner)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Name: {partner.Name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "white" }}>
                          Email: {partner.Email}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "white" }}>
                          Contact Number: {partner.contactNumber}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Partner;
