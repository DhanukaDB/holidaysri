import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../../../pages/Nav/Nav";
import { useLocation } from "react-router-dom";

const LocationHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const locations = useLocation();
  const queryParams = new URLSearchParams(locations.search);
  const idd = queryParams.get("id");
  console.log(idd);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getHotels() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/hotel/"
        );
        setHotels(res.data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setloading(false);
        alert("Error fetching hotels: " + error.message);
      }
    }
    getHotels();
  }, []);
  const [hotellocationName, setlocationname] = useState([]);
  const [background, setbackground] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://holidaysri-backend.onrender.com/location/get/${idd}`
        );
        setbackground(response.data.location.backgroundImage);
        setlocationname(response.data.location.locationName);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Error fetching location: " + error.message);
      }
    };
    fetchData();
  }, [idd]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const filterHotels = () => {
    const filtered = hotels.filter(
      (hotel) => hotel.category === "hotel" && hotel.location === locationName
    );
    setFilteredHotels(filtered);
  };

  useEffect(() => {
    filterHotels();
  }, [hotels]);

  const handleOpen = (hotel) => {
    // Handle opening modal or any other action
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid
            container
            style={{
              backgroundImage: `url("https://res.cloudinary.com/iplus/image/upload/v1710527586/pexels-aj-ahamad-19149697_wapwx5.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              minHeight: "100vh",
              paddingBottom: "16px",
            }}
          >
            <Nav />
            {hotels.filter((hotel) => hotel.location === hotellocationName)
              .length === 0 ? (
              <>
                <Box
                  marginBottom="0px"
                  marginTop={{ lg: "-60px", xs: "-100px" }}
                  marginLeft="32px"
                >
                 <a
            href={`/destination/${idd}`}
            style={{ textDecoration: "none" }}
          >
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
                {loading ? (
                  <>
                    <CircularProgress sx={{ color: "green" }} />
                  </>
                ) : (
                  <>
                    {" "}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      sx={{
                        marginTop: { lg: "0px", xs: "-120px" },
                        marginLeft: { lg: "18%", xs: "10%" },
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
                          width: { lg: "1000px", xs: "280px" },
                          height: "80px",
                        }}
                        variant="outlined"
                      >
                        <CardContent>
                          <center>
                            <Typography sx={{ fontSize: "24px" }}>
                              No datas
                            </Typography>
                          </center>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>
                )}
              </>
            ) : (
              <>
                <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
                  <a href={`/destination/${idd}`} style={{ textDecoration: "none" }}>
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
                  sx={{
                    color: "white",
                    fontFamily: "poppins",
                    marginTop: { lg: "8px", xs: "30px" },
                    fontSize: { lg: "50px", xs: "32px" },
                    paddingLeft: { lg: "35%", xs: "32px" },
                    paddingTop: { lg: "80px", xs: "-80px" },
                  }}
                >
                  All Hotels in {hotellocationName}
                </Typography>
              </>
            )}

            <Grid marginTop="20px" padding={{ lg: "72px", xs: "16px" }}>
              <Box>
                <Grid
                  container
                  spacing={3}
                  style={{
                    transform: hoveredIndex !== null ? "translateY(-10px)" : "",
                    transition: "transform 0.3s",
                  }}
                >
                  {hotels
                    .filter((hotel) => hotel.location === hotellocationName)
                    .map((hotel, index) => (
                      <Grid item xs={12} sm={6} md={6} key={hotel._id}>
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
                          onClick={() => handleOpen(hotel)}
                        >
                          <img
                            src={hotel.images}
                            alt="hotel"
                            style={{
                              width: "100%",
                              borderTopLeftRadius: "30px",
                              borderTopRightRadius: "30px",
                            }}
                          />
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{ color: "white" }}
                            >
                              Name: {hotel.hotelName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                              category: {hotel.category}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                              Description: {hotel.description}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                              Price: {hotel.price}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                              location: {hotel.location}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                              Distance: {hotel.distance}
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
      </Grid>
    </Grid>
  );
};

export default LocationHotel;
