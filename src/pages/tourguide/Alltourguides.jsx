import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CircularProgress
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";

const Alltourguides = () => {
  const [partners, setPartners] = useState([]);
  const [location, setLocation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoding] = useState(true);

  const { id, locationName } = useParams();

  useEffect(() => {
    async function getPartners() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/api/guide/allGuideProfiles"
        );
        setPartners(res.data);
        setLoding(false);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setLoding(false);
        alert("Error fetching partners: " + error.message);
      }
    }
    getPartners();
  }, []);

  

  const handleOpen = (partner) => {
    // Handle opening modal or any other action
  };
  const filteredPartners = partners.filter(
    (partner) => partner.location === locationName
  );

  return (
    <>
    <Nav/>
    <Grid
      container
      sx={{
        backgroundImage: `url(${"https://res.cloudinary.com/iplus/image/upload/v1710621250/pexels-filippo-peisino-2678301_njycll.jpg"})` ,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="16px">
          <a href={`/`} style={{ textDecoration: "none" }}>
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
          All Tour Guides to connect 
        </Typography>
        <center>
       {loading?<><CircularProgress sx={{color:'green',marginTop:'16px'}}/></>:<>
       <Grid
            container
            width={{ lg: "90%" }}
            sx={{ marginTop: { lg: "32px", xs: "24px" } }}
            spacing={2}
            paddingLeft={{ lg: "0px", xs: "8px" }}
            paddingRight={{ lg: "0px", xs: "8px" }}
          >
             
            {partners.length > 0 ? (
              partners.map((partner, index) => (
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
                        backgroundColor: "rgba(255,255,255, 0.5)",
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
                          sx={{ color: "black" }}
                        >
                          Name: {partner.Name}
                        </Typography>
                        <Typography
                          textAlign="left"
                          variant="body2"
                          sx={{ color: "black" }}
                        >
                          Email: {partner.Email}
                        </Typography>
                        <Typography
                          textAlign="left"
                          variant="body2"
                          sx={{ color: "black" }}
                        >
                          Contact Number: {partner.contactNumber}
                        </Typography>
                        <Typography
                          textAlign="left"
                          variant="body2"
                          sx={{ color: "black" }}
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
                        Currently No Tour Guides 
                      </Typography>
                    </Card>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
       </>}
         
        </center>
      </Grid>
    </Grid>
    </>
   
  );
};

export default Alltourguides;
