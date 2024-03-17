import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Modal,CircularProgress } from "@mui/material";
import axios from "axios";
import Nav from "../Nav/Nav";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 600, xs: 280 },
  backgroundColor: "rgba(48, 103, 84, 0.9)",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};
const Allvehicles = () => {
  const gridRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    async function getAllVehicles() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/vehicle/"
        );
        setVehicleDetails(res.data);
        setLoding(false);
        console.log(vehicleDetails);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setLoding(false);
        alert("Error fetching vehicles: " + error.message);
      }
    }
    getAllVehicles();
  }, []);

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
   <Nav/>
    <Grid
      container
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1709990615/pexels-alex-azabache-3723035_1_xs9aso.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    > 
      <Grid item xs={12}>
        <Box marginBottom="0px" marginLeft="32px" marginTop='16px'>
          <a href="/" style={{ textDecoration: "none" }}>
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
       

        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
          >
            <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="16px"
            >
              All Vehicles
            </Typography>
          </Box>
          {vehicleDetails.map((event, index) => {
            return (
              <Box
              key={event._id}
              sx={{
                width: { lg: "1100px", xs: "280px" },
                borderColor: "black",
                borderRadius: "30px",
                backgroundColor: "rgba(255,255,255, 0.5)",
                padding: "24px",
                marginTop: { lg: "16px", xs: "16px" },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                  <Box width={{ lg: "100%" }} height={{ lg: "100%" }}>
                  <img
                        src={event.images}
                        width="100%"
                        height="100%"
                        style={{ borderRadius: "30px" }}
                        alt="vehicle"
                      />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: { lg: "24px", xs: "20px" },
                      textAlign: "left",
                    }}
                  >
                    {event.Vehiclecategory}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    color="black"
                    sx={{ mt: 2 }}
                  >
                    {event.description}
                  </Typography>
                  <Button
                      onClick={() => handleOpen(event)}
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderColor: "black",
                        borderRadius: "30px",
                        marginTop: "16px",
                      }}
                    >
                      View More
                    </Button>
                </Grid>
              </Grid>
            </Box>
            );
          })}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {selectedEvent && (
                <>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    color="white"
                  >
                    {selectedEvent.Vehiclecategory}
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <Typography
                        id="modal-modal-description"
                        color="white"
                        sx={{ mt: 2 }}
                      >
                        Price: {selectedEvent.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography
                        id="modal-modal-description"
                        color="white"
                        sx={{ mt: 2 }}
                      >
                        Contact Number: {selectedEvent.contactNumber}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    id="modal-modal-description"
                    color="white"
                    sx={{ mt: 2 }}
                  >
                    Driver Gender: {selectedEvent.gender}
                  </Typography>{" "}
                  <Typography
                    id="modal-modal-description"
                    color="white"
                    sx={{ mt: 2 }}
                  >
                    Promo Code: {selectedEvent.promoCode}
                  </Typography>
                  
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                  >
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderColor: "black",
                        borderRadius: "30px",
                        marginTop: "16px",
                      }}
                    >
                      Close
                    </Button>
                  </Box>{" "}
                </>
              )}
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </Grid>
    </>
    
  );
};

export default Allvehicles;
