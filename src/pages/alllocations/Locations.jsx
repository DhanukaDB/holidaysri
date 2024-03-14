import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Modal, Grid } from "@mui/material";
import Customtextfield from "../../components/hotel/Login/Customtextfield";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 530, xs: 250 },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};
const Locations = (props) => {
  const [openlocation, setOpenlocation] = React.useState(false);
  const handleOpenlocation = () => setOpenlocation(true);
  const handleCloselocation = () => setOpenlocation(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [images, setImages] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [distanceFromColombo, setDistanceFromColombo] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState([]);
  const [eventLocation, setEventLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function getAllLocations() {
      try {
        const res = await axios.get(
          "http://localhost:8000/location/"
        );
        setLocation(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching Locations:", error);
        alert("Error fetching Locations: " + error.message);
      }
    }
    getAllLocations();
  }, []);
  //http://localhost:8000/location/

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

        <Grid container>
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
          >
            <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white", fontFamily: "mansalva" }}
              marginTop="16px"
            >
              LOCATIONS:
            </Typography>
          </Box>
          <>
            <Grid container spacing={2}>
              {location.map((location) => (
                <Grid item xs={6} lg={3}>
                  <Box
                    key={location._id}
                    border={3}
                    sx={{
                      width: { lg: "100%", xs: "100%" },
                      height: { lg: "250px" },
                      borderColor: "black",
                      borderRadius: "30px",
                      backgroundColor: "rgba(48, 103, 84, 0.5)",
                      padding: "20%",
                      marginTop: { lg: "16px", xs: "16px" },
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={12}>
                        <Typography
                          sx={{
                            color: "white",
                            fontWeight: "400",
                            textAlign: "center",
                            fontSize: { lg: "42px", xs: "20px" },
                          }}
                        >
                          {location.locationName}
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            fontWeight: "400",
                            textAlign: "center",
                            fontSize: { lg: "16px", xs: "16px" },
                            marginTop: "8px",
                          }}
                        >
                          {location.district} District
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              ))}{" "}
            </Grid>
          </>
        </Grid>
      </Box>
    </div>
  );
};

export default Locations;
