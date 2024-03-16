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
  const filteredPartners = partners.filter(
    (partner) => partner.location === locationName
  );

  return (
    <Grid
      container
      sx={{
        backgroundImage: location ? `url(${location.backgroundImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="16px">
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
        <Typography
          fontSize={{ lg: "24px", xs: "18px" }}
          sx={{ color: "white" }}
          marginTop={{ lg: "16px", xs: "24px" }}
          textAlign="center"
        >
          Tour Guides to connect in {locationName}
        </Typography>
        <center>
          <Grid
            container
            width={{ lg: "90%" }}
            sx={{ marginTop: { lg: "32px", xs: "24px" } }}
            spacing={2}
            paddingLeft={{ lg: "0px", xs: "8px" }}
            paddingRight={{ lg: "0px", xs: "8px" }}
          >
            {filteredPartners.length > 0 ? (
              filteredPartners.map((partner, index) => (
                <Grid item xs={12} lg={3} key={index}>
                  <Box
                    marginTop="20px"
                    sx={{
                      marginLeft: { lg: "0%", sx: "0%" },
                      width: { lg: "auto", sx: "280px" },
                      transform: hoveredIndex === index && "translateY(-10px)",
                      transition: "transform 0.3s",
                      cursor: "default",
                    }}
                  >
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
                          textAlign="left"
                          sx={{ color: "white" }}
                        >
                          Name: {partner.Name}
                        </Typography>
                        <Typography
                          textAlign="left"
                          variant="body2"
                          sx={{ color: "white" }}
                        >
                          Email: {partner.Email}
                        </Typography>
                        <Typography
                          textAlign="left"
                          variant="body2"
                          sx={{ color: "white" }}
                        >
                          Contact Number: {partner.contactNumber}
                        </Typography>
                        <Typography
                          textAlign="left"
                          variant="body2"
                          sx={{ color: "white" }}
                        >
                          Location: {partner.location}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              ))
            ) : (
              <>
                <Grid item xs={12} lg={8}>
                  <Box
                    marginTop={{ lg: "20px", xs: "0px" }}
                    sx={{
                      marginLeft: { lg: "50%", sx: "0%" },
                      width: { lg: "auto", sx: "280px" },
                      transition: "transform 0.3s",
                      cursor: "default",
                    }}
                  >
                    <Card
                      sx={{
                        borderColor: "black",
                        borderRadius: "30px",
                        backgroundColor: "rgba(255,255,255, 0.3)",
                        padding: "32px",
                      }}
                      variant="outlined"
                    >
                      <Typography>
                        Currently No Tour Guides in {locationName}
                      </Typography>
                    </Card>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </center>
      </Grid>
    </Grid>
  );
};

export default TourGuide;
