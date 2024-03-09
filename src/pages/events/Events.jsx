import React, { useRef, useEffect } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
const Events = () => {
  const gridRef = useRef(null);
  var eventsArray = [
    {
      image:
        "https://fernandotravels.com.au/wp-content/uploads/2018/06/galle-fort.jpg",
      location: "GALLE",
      eventName: "Event 1",
      description:
        "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort’s southeast tip.",
    },
    {
      image:
        "https://www.i-escape.com/image/hotel/why-house/overview/285321.jpg",
      location: "GALLE",
      eventName: "Event 2",
      description: "Description for Event 2",
    },
    {
      image:
        "https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg",
      location: "Venue C",
      eventName: "Event 3",
      description: "Description for Event 3",
    },
  ];
  return (
    <Grid
      container
      style={{
        backgroundImage:
          'url("https://www.aman.com/sites/default/files/2021-02/Amangalla%2C%20India-%20Accommodation%2C%20landscape%2C%20ocean%2C%20sunset_1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom:'16px'
      }}
    >
      <Grid item xs={12}>


      <Box marginBottom="0px" marginTop='16px' marginLeft='32px'>
            <a href="/destinations" style={{textDecoration:'none'}}><Button variant="outlined" sx={{color:'white',borderColor:'white',borderRadius:'30px',}}>Back</Button> </a>       
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
              Upcomming Recent Events
            </Typography>
          </Box>
          {eventsArray
            .filter((event) => event.location === "GALLE")
            .map((event) => {
              return (
                <>
                  <Box
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
                </>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Events;
