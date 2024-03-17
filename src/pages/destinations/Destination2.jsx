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
    "https://res.cloudinary.com/iplus/image/upload/v1710534646/richard-de-ruijter-HoByPgtIbzk-unsplash_o1zbft.jpg",
  ];
  const events = [
    "https://res.cloudinary.com/iplus/image/upload/v1710535203/sonika-agarwal-PWfWtwSwZdQ-unsplash_nvzize.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710534649/yves-alarie-yaGheETUSK4-unsplash_gviugp.jpg",
  ];
  const hotels = [
    "https://res.cloudinary.com/iplus/image/upload/v1710536670/sidath-vimukthi-KF9IS77n1TQ-unsplash_gg2jk7.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710536668/dinuka-lankaloka-KRezxB3pr5A-unsplash_kppsqd.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710536666/sidath-vimukthi-Kd16c7p50r4-unsplash_yxfkn4.jpg",
  ];

  const foods = [
    "https://res.cloudinary.com/iplus/image/upload/v1710537307/jessica-knowlden-lUpg5bCRPX8-unsplash_cbudpp.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710537309/dinuka-lankaloka-2KMQwHFvHew-unsplash_iiiril.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710537314/sandaru-muthuwadige-26gV0SPzQxE-unsplash_ca4vpk.jpg"
  ];

  const tourguide = [
    "https://res.cloudinary.com/iplus/image/upload/v1710538212/eddy-billard-EJLpBC6rUv8-unsplash_imo3l6.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710538735/gemmmm-FRTpkBIi-1Y-unsplash_mga0sh.jpg"
  ];

  const travelpartner = [
    "https://res.cloudinary.com/iplus/image/upload/v1710538207/eddy-billard-JOoOPt8tTPY-unsplash_kx1epy.jpg",
    "https://res.cloudinary.com/iplus/image/upload/v1710538783/kevin-olson-ScBHbYokiQE-unsplash_fixj1b.jpg"
  ];

  const marcketplace = [
    "https://res.cloudinary.com/iplus/image/upload/v1710538814/lahiru-supunchandra-_gTaZMhygVs-unsplash_lmiv9a.jpg",
  ];

  const packages = [
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
            <Link to={`/Hotelmain/${id}/${encodeURIComponent(locationname)}`} style={{ textDecoration: "none" }}>
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
