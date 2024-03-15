import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

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
    "https://res.cloudinary.com/iplus/image/upload/v1710534646/richard-de-ruijter-HoByPgtIbzk-unsplash_o1zbft.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710535018/drew-farwell-U27DA0ea1y8-unsplash_npvycm.jpg",
  ];
  const events=[
    "https://res.cloudinary.com/iplus/image/upload/v1710535203/sonika-agarwal-PWfWtwSwZdQ-unsplash_nvzize.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710534649/yves-alarie-yaGheETUSK4-unsplash_gviugp.jpg"
  ]
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

        <Grid
          container
          spacing={3}
          marginLeft={{ lg: "2%" }}
          paddingLeft={{ xs: "8%", lg: "0px" }}
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
            <Link to={`/events/${id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: {lg:"250px",xs:'150px'},
                  height: {lg:"250px",xs:'150px'},
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
            lg={1}
            marginLeft={{ lg: "64px" }}
            borderRadius="16px"
            sx={{
              borderColor: "white",
            }}
          >
            <Link to={`/rides`} style={{ textDecoration: "none" }}>
            <Box
                sx={{
                    width: {lg:"250px",xs:'150px'},
                    height: {lg:"250px",xs:'150px'},
                  borderColor: "black",
                  borderRadius: "30px",
                  backgroundColor:
                    hoveredIndex === 2
                      ? "rgba(15, 40, 29, 0.3)"
                      : "rgba(48, 103, 84, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url("${imageUrls[currentImageIndex]}")`,
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
                     Find a Ride
                  </Typography>
                </Box>
              </Box>
              
            </Link>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "850px", xs: "280px" },
              borderColor: "black",
              borderRadius: "30px",
              backgroundColor: "rgba(15, 40, 29, 0.7)",
              padding: "24px",
              marginTop: { lg: "24px", xs: "32px" },
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
