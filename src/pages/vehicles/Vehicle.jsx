import React, { useState, useRef } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
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
  var eventsArray = [
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      location: "GALLE",
      Vehiclecategory: "Car",
      description: "Toyota Luxsury car white color nice",
      contactNumber: "0111111111",
      price: "100000",
      nic: "986464465V",
      gender: "male",
      promoCode: "ADHD",
    },
    {
      image:
        "https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/f2269e4702154d59819c7d6626699d2c.jpg",
      location: "GALLE",
      Vehiclecategory: "van",
      description: "Description for Event 2",
      contactNumber: "0222222222",
      price: "120000",
      nic: "98622224465V",
      gender: "female",
      promoCode: "",
    },
    {
      image:
        "https://www.pricelanka.lk/wp-content/uploads/2021/02/Toyota-Premio-1.png",
      location: "GALLE",
      Vehiclecategory: "Car",
      description: "Description for Event 3",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        backgroundImage:
          'url("https://www.aman.com/sites/default/files/2021-02/Amangalla%2C%20India-%20Accommodation%2C%20landscape%2C%20ocean%2C%20sunset_1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a href="/destinations" style={{ textDecoration: "none" }}>
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
            GALLE
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
          {eventsArray
            .filter((event) => event.location === "GALLE")
            .map((event, index) => {
              return (
                <Box
                  key={index}
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
                      <Box
                        width={{ lg: "100%" }}
                        height={{ lg: "100%", xs: "auto" }}
                      >
                        <img
                          src={event.image}
                          width="100%"
                          height="100%"
                          style={{ borderRadius: "30px" }}
                          alt="image_1"
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
                    color='white'
                  >
                    {selectedEvent.Vehiclecategory}
                  </Typography>
                  <Grid container >
  <Grid item xs={12} lg={6}>
  <Typography id="modal-modal-description" color='white' sx={{ mt: 2 }}>
                    Price: {selectedEvent.price}
                  </Typography>
  </Grid>
  <Grid item xs={12} lg={6}>
  <Typography id="modal-modal-description" color='white' sx={{ mt: 2 }}>
                    Contact Number: {selectedEvent.contactNumber}
                  </Typography>
  </Grid>
</Grid>
                  
                 
                  <Typography id="modal-modal-description" color='white' sx={{ mt: 2 }}>
                    Driver Gender: {selectedEvent.gender}
                  </Typography>{" "}
                  <Typography id="modal-modal-description" color='white' sx={{ mt: 2 }}>
                    Promo Code: {selectedEvent.promoCode}
                  </Typography>
                  <Typography id="modal-modal-description" color='white' sx={{ mt: 2 }}>
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
