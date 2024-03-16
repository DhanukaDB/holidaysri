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
  const [partners, setpartners] = useState([]);
  const [location, setLocation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { id, locationName } = useParams();

  useEffect(() => {
    async function getpartners() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/partner/"
        );
        setpartners(res.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
        alert("Error fetching partners: " + error.message);
      }
    }
    getpartners();
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
    <Grid container>
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a href="/all-locations" style={{ textDecoration: "none" }}>
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
         style={{
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
              Travel partners to connect in {locationName}
            </Typography>
          </Box>
        
          <Box
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/iplus/image/upload/v1710621648/pexels-tirachard-kumtanom-450062_dfbign.jpg")',
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
              {partners.map((partner, index) => (
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
                    onClick={() => handleOpen(partner)}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Name: {partner.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Email: {partner.email}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Contact Number: {partner.contactNumber}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Description: {partner.description}
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

export default Partner;
