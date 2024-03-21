import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav/Nav";

const Destination2 = () => {
  const { id } = useParams();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const imageUrls = [
    
    "https://media.istockphoto.com/id/1852190658/photo/young-man-on-safari-journey-by-off-road-car-in-sri-lanka.jpg?s=1024x1024&w=is&k=20&c=5opRombFqj3IylMb3pf3gZIOiTE-S54_aS9fHsSkOiE=",
   
  ];
  const events = [
    "https://media.istockphoto.com/id/1474551631/photo/fire-dancers-at-esala-maha-perahera-kandy-sri-lanka.jpg?s=1024x1024&w=is&k=20&c=0ucdDzN6NEmdcKd-zrsYCCXrByZe0U4pT58dLwz-LFQ=",
    "https://media.istockphoto.com/id/1295046526/photo/crowd-at-open-air-night-club.jpg?s=1024x1024&w=is&k=20&c=ipUmrPpnIHrnppGGDIOyl_W-ixLvdOX2q-DFEKRRuv4=",
  ];
  const hotels = [
    "https://media.istockphoto.com/id/188014849/photo/island-villa.jpg?s=1024x1024&w=is&k=20&c=fY02Bti3qOUKVW2-35bJiCW2BvScb2YJ8_2qULPNl8M=",
    "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const foods = [
    "https://images.pexels.com/photos/4099237/pexels-photo-4099237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6289992/pexels-photo-6289992.jpeg"
  ];

  const tourguide = [
    
    "https://res.cloudinary.com/iplus/image/upload/v1710538212/eddy-billard-EJLpBC6rUv8-unsplash_imo3l6.jpg",
     ];

  const travelpartner = [
   "https://media.istockphoto.com/id/1086841152/photo/friends-riding-bicycles-in-a-city.jpg?s=1024x1024&w=is&k=20&c=yNFE0Q0IfS6HgnOlPr6eXxqnMeGBe6B_iMX2_vRqYVM=",
   "https://media.istockphoto.com/id/1166417486/photo/group-tourists-friends-peoples-mountain-top-look-sunset.jpg?s=1024x1024&w=is&k=20&c=K6QgN5gNAORtCXHNlzOpfvgLmvx5lPi96YWtIDFIeiw=",
    "https://res.cloudinary.com/iplus/image/upload/v1710538207/eddy-billard-JOoOPt8tTPY-unsplash_kx1epy.jpg",
    
  ];

  const marcketplace = [
    
    "https://media.istockphoto.com/id/621126788/photo/knitted-mittens-and-other-souvenirs-at-the-riga-christmas-market.jpg?s=1024x1024&w=is&k=20&c=_bY2KvUg2o7yDRrUqHkuI0_KI2-t7PYGGdvFSyJljoU=",
    
  ];

  const packages = [
    "https://media.istockphoto.com/id/522331772/photo/spa-couple-towels-with-candles-and-orchid.jpg?s=1024x1024&w=is&k=20&c=UJa1gk0KW3yPbORvIoI2UdfwTvu1c1rqQyQZe_KqkfA=",
    "https://res.cloudinary.com/iplus/image/upload/v1710538873/tom-paisley-v2zEiziFb44-unsplash_ywz80u.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710538865/chaminda-keragala-Hp2LhkqyHww-unsplash_qinrbk.jpg"
  ];

  const gridRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [image, setimage] = useState([]);
  const [locationname, setlocationname] = useState([]);
  const [background, setbackground] = useState([]);
  const [details, setdetails] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://holidaysri-backend.onrender.com/location/get/${id}`
        );
        setLocation(response.data.location);
        setimage(response.data.location.images);
        setbackground(response.data.location.backgroundImage);
        setlocationname(response.data.location.locationName);
        setdetails(response.data.location.details);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Error fetching location: " + error.message);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const gridElement = gridRef.current;

    const scrollRight = () => {
      if (gridElement) {
        gridElement.scrollLeft += 1;

        if (
          gridElement.scrollLeft >=
          gridElement.scrollWidth - gridElement.clientWidth
        ) {
          gridElement.scrollLeft = 0;
        }

        requestAnimationFrame(scrollRight);
      }
    };

    const animationId = requestAnimationFrame(scrollRight);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const renderLogos = () => {
    const repetitions = 20;
    let count = 0;
    const logoElements = [];

    while (count < repetitions) {
      image.forEach((image, index) => {
        logoElements.push(
          <img
            key={`${index}-${count}`}
            src={image}
            alt={`image${index + 1}`}
            style={{
              margin: "8px",
              width: "90%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
        );
      });

      count++;
    }

    return <>{logoElements}</>;
  };

  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Nav/>
      <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
        <a href="/all-locations" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", borderRadius: "30px" }}
          >
            Back
          </Button>
        </a>
      </Box>
      <Grid item xs={12}>
        <Box textAlign="center" marginTop={{ lg: "1%", xs: "2%" }}>
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
        <Box
          marginTop={{ lg: "32px", xs: "32px" }}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: { lg: "250px" },
            overflowX: "auto",
            overflow: "hidden",
            animation: "scrollRight 60s linear infinite",
          }}
        >
          <Grid
            container
            sx={{
              flexWrap: "nowrap",
              display: "flex",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                height: { lg: "250px", xs: "200px" },
                overflowX: "auto",
                overflow: "hidden",
              }}
              ref={gridRef}
            >
              <Grid
                container
                sx={{
                  marginTop: { lg: "16px", xs: "16px" },
                  flexWrap: "nowrap",
                  display: "flex",
                  height: { lg: "200px", xs: "150px" },
                }}
              >
                {renderLogos()}
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          margin: { lg: "40px", xs: "16px" },
          padding: { lg: "24px", xs: "10px" },
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          spacing={3}
          marginLeft={{ lg: "5%" }}
        >
          <Grid
            item
            lg={2}
            xs={6}
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/events/${id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundImage: `url("${events[currentImageIndex]}")`,
                  backgroundSize: "cover",
                  backgroundColor:
                    hoveredIndex === 1
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",

                    backgroundColor:
                      hoveredIndex === 1
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 1
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    View Events
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={2}
            xs={6}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/rides?id=${id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 2
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${imageUrls}")`,
                  backgroundSize: "cover",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    backgroundColor:
                      hoveredIndex === 2
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 2
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    Vehicles
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={2}
            xs={6}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/hotel?id=${id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 3
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${hotels[currentImageIndex]}")`,
                  backgroundSize: "cover",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    backgroundColor:
                      hoveredIndex === 3
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 3
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    Hotels
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={2}
            xs={6}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
           <Link to={`/food/${id}/${encodeURIComponent(locationname)}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 4
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${foods[currentImageIndex]}")`,
                  backgroundSize: "cover",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    backgroundColor:
                      hoveredIndex === 4
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 4
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    Foods
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          marginLeft={{ lg: "5%" }}
          marginTop={{ lg: "30px", xs: "8px" }}
        >
          <Grid
            item
            lg={2}
            xs={6}
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/tourguide/${id}/${encodeURIComponent(locationname)}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundImage: `url("${tourguide[currentImageIndex]}")`,
                  backgroundSize: "cover",
                  backgroundColor:
                    hoveredIndex === 5
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",

                    backgroundColor:
                      hoveredIndex === 5
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 5
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    Tour guides
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={2}
            xs={6}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
             <Link to={`/partner/${id}/${encodeURIComponent(locationname)}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 6
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${travelpartner[currentImageIndex]}")`,
                  backgroundSize: "cover",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    backgroundColor:
                      hoveredIndex === 6
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 6
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    Travel partners
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={2}
            xs={6}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/marcketplace?id=${id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 7
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${marcketplace}")`,
                  backgroundSize: "cover",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    backgroundColor:
                      hoveredIndex === 7
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 7
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                   Marketplace
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>

          <Grid
            item
            lg={2}
            xs={6}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/package?id=${id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { lg: "250px", xs: "150px" },
                  height: { lg: "250px", xs: "150px" },
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 8
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${packages[currentImageIndex]}")`,
                  backgroundSize: "cover",
                  transition: "background-color 0.5s ease",
                }}
                onMouseEnter={() => handleMouseEnter(8)}
                onMouseLeave={handleMouseLeave}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center",
                    color: "white",
                    backgroundColor:
                      hoveredIndex === 8
                        ? "rgba(15, 40, 29, 0.5)"
                        : {
                            lg: "rgba(15, 40, 29, 0.7)",
                            xs: "rgba(15, 40, 29, 0.6)",
                          },
                    p: 2,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        hoveredIndex === 8
                          ? { lg: "26px", xs: "18px" }
                          : { lg: "20px", xs: "18px" },
                      fontFamily: "poppins",
                      transition: "font-size 0.5s ease",
                    }}
                  >
                    Packages
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>





        </Box>
        



        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "850px", xs: "280px" },
              borderColor: "black",
              borderRadius: "30px",
              backgroundColor: "rgba(15, 40, 29, 0.7)",
              padding: "24px",
              marginTop: { lg: "32px", xs: "32px" },
              marginBottom: "32px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "400",
                fontSize: { lg: "24px", xs: "20px" },
                textAlign: "left",
              }}
            >
              DETAILS
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
              {details}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Destination2;
