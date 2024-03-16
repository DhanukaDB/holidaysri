import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import axios from "axios";
import { useLocation } from 'react-router-dom';

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
const Vehicle = () => {
  const gridRef = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  console.log(id);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [vehicleDetails, setVehicleDetails] = useState([]);

  useEffect(() => {
    async function getAllVehicles() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/vehicle/"
        );
        setVehicleDetails(res.data);
        console.log(vehicleDetails);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        alert("Error fetching vehicles: " + error.message);
      }
    }
    getAllVehicles();
  }, []);
  const [locationname, setlocationname] = useState([]);
  const [background, setbackground] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://holidaysri-backend.onrender.com/location/get/${id}`
        );
        setbackground(response.data.location.backgroundImage);
        setlocationname(response.data.location.locationName);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Error fetching location: " + error.message);
      }
    };
    fetchData();
  }, [id]);
  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a  href={`/destination/${id}`} style={{ textDecoration: "none" }}>
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
        <Box textAlign="center" marginTop={{ lg: "2%", xs: "3%" }}>
         
          <Typography
            sx={{
              color: "white",
              fontFamily: "mansalva",
              marginTop: "8px",
              fontSize: { lg: "50px", xs: "32px" },
              letterSpacing: "20px",
            }}
          >
            {locationname}
          </Typography>
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
              Rides
            </Typography>
          </Box>
          {/* .filter((event) => event.location === "GALLE")*/}
          {
  vehicleDetails.some(event => event.location === locationname) ? (
    vehicleDetails.map((event, index) => {
      if (event.location === locationname) {
        return (
          <Box
            key={event._id}
            sx={{
              width: { lg: "1100px", xs: "280px" },
              borderColor: "black",
              borderRadius: "30px",
              backgroundColor: "rgba(255,255,255, 0.3)",
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
              <Grid item xs={12} lg={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: { lg: "24px", xs: "20px" },
                    textAlign: "left",
                  }}
                >
                  {event.Vehiclecategory} 
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
                <Button
                  onClick={() => handleOpen(event)}
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
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
      }
      return null; 
    })
  ) : (
    <Box
            sx={{
              width: { lg: "1100px", xs: "280px" },
              borderColor: "black",
              borderRadius: "30px",
              backgroundColor: "rgba(255,255,255, 0.3)",
              padding: "24px",
              marginTop: { lg: "16px", xs: "16px" },
            }}
          >
            <Typography sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: { lg: "18px", xs: "16px" },
                    textAlign: "left",
                    marginTop: "8px",
                  }}>No Vehicles in your area right now :/</Typography>
          </Box>
    
  )
}
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
                  <Typography
                    id="modal-modal-description"
                    color="white"
                    sx={{ mt: 2 }}
                  >
                    {selectedEvent.description}
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
  );
};

export default Vehicle;
