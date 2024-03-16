import React, { useRef, useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import axios from "axios";

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

const gift = [
  "https://res.cloudinary.com/iplus/image/upload/v1710579159/nina-mercado-_qN6tmGjmtg-unsplash_dpwofp.jpg",
];
const colo = [
  "https://res.cloudinary.com/iplus/image/upload/v1710579159/gints-gailis-dxGlF2-5CFE-unsplash_xmutex.jpg",
];
const survnior = [
  "https://res.cloudinary.com/iplus/image/upload/v1710579158/daniel-hooper-hQIJon1QhZ8-unsplash_oekny5.jpg",
];
const Marcketplace = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [product, setproduct] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    async function getAllVehicles() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/product/"
        );
        setproduct(res.data);
        console.log(product);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        alert("Error fetching vehicles: " + error.message);
      }
    }
    getAllVehicles();
  }, []);

  const handleOpen = (product) => {
    setSelectedEvent(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [filteredProducts, setFilteredProducts] = useState(product);

  const handleFilter = (category) => {
    if (category === "all" || category === "") {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };
  return (
    <Grid
      container
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1710580537/jayakody-anthanas-GraTddrOkVY-unsplash_mjaejc.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    >
      <Grid item xs={12}>
        <Box marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a href="/all-locations" style={{ textDecoration: "none" }}>
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
              Products
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              margin: { lg: "40px", xs: "16px" },
              padding: { lg: "24px", xs: "10px" },
              paddingLeft: { lg: "5%" },
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: "20px",
                  xs: "18px",
                  color: "white",
                  marginBottom: "8px",
                },
              }}
            >
              Select What you like
            </Typography>
            <Grid container spacing={3}>
              <Grid
                item
                lg={3}
                xs={4}
                sx={{
                  borderColor: "white",
                }}
              >
                <Box
                  sx={{
                    width: { lg: "250px", xs: "100px" },
                    height: { lg: "250px", xs: "100px" },
                    borderColor: "black",
                    borderRadius: "30px",
                    backgroundImage: `url("${gift}")`,
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
                  onClick={() => handleFilter("gift packs")}
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
                            ? { lg: "26px", xs: "12px" }
                            : { lg: "20px", xs: "12px" },
                        fontFamily: "poppins",
                        transition: "font-size 0.5s ease",
                      }}
                    >
                      Gift Packs
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                lg={3}
                xs={3}
                marginLeft={{ lg: "64px" }}
                borderRadius="16px"
                sx={{
                  borderColor: "white",
                }}
              >
                <Box
                  sx={{
                    width: { lg: "250px", xs: "100px" },
                    height: { lg: "250px", xs: "100px" },
                    borderColor: "black",
                    borderRadius: "30px",
                    backgroundColor:
                      hoveredIndex === 2
                        ? "rgba(15, 40, 29, 0.3)"
                        : "rgba(48, 103, 84, 0.5)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundImage: `url("${survnior}")`,
                    backgroundSize: "cover",
                    transition: "background-color 0.5s ease",
                  }}
                  onClick={() => handleFilter("souvenirs")}
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
                            ? { lg: "26px", xs: "12px" }
                            : { lg: "20px", xs: "12px" },
                        fontFamily: "poppins",
                        transition: "font-size 0.5s ease",
                      }}
                    >
                      Souvenirs
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                lg={3}
                xs={3}
                marginLeft={{ lg: "64px", xs: "24px" }}
                borderRadius="16px"
                sx={{
                  borderColor: "white",
                }}
              >
                <Box
                  sx={{
                    width: { lg: "250px", xs: "100px" },
                    height: { lg: "250px", xs: "100px" },
                    borderColor: "black",
                    borderRadius: "30px",
                    backgroundColor:
                      hoveredIndex === 3
                        ? "rgba(15, 40, 29, 0.3)"
                        : "rgba(48, 103, 84, 0.5)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundImage: `url("${colo}")`,
                    backgroundSize: "cover",
                    transition: "background-color 0.5s ease",
                  }}
                  onClick={() => handleFilter("collectibles")}
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
                            ? { lg: "26px", xs: "12px" }
                            : { lg: "20px", xs: "12px" },
                        fontFamily: "poppins",
                        transition: "font-size 0.5s ease",
                      }}
                    >
                      Collectibles
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {filteredProducts.length === 0 ? (
            <Box
              key={product._id}
              sx={{
                borderColor: "black",
                borderRadius: "30px",
                backgroundColor: "rgba(255,255,255, 0.3)",
                padding: "24px",
                marginTop: { lg: "16px", xs: "16px" },
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: { lg: "20px", xs: "18px" } }}
              >
                No Added Produts, Come back soon :)
              </Typography>
            </Box>
          ) : (
            filteredProducts.map((product, index) => (
              <Box
                key={product._id}
                sx={{
                  width: { lg: "900px", xs: "280px" },
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
                        src={product.images}
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
                      {product.productName}
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: { lg: "20px", xs: "16px" },
                        textAlign: "left",
                        marginTop: "8px",
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Button
                      onClick={() => handleOpen(product)}
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
            ))
          )}

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
                    {selectedEvent.category}
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

export default Marcketplace;
