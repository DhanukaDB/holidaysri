import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardContent,CircularProgress
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const Food = () => {
  const [products, setProducts] = useState([]);
  const [location, setLocation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoding] = useState(true);

  const { id, locationName } = useParams();
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/product/"
        );
        setProducts(res.data);
        setLoding(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoding(false);
        alert("Error fetching products: " + error.message);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://holidaysri-backend.onrender.com/location/get/${id}`
        );
        setLocation(response.data.location);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Error fetching location: " + error.message);
      }
    };

    fetchData();
  }, [id]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (category) => {
    if (category === "food" ) {
      const foods = products.filter((product) => product.category === "food" && product.location === locationName);
      setFilteredProducts(foods);
    }
  };

  useEffect(() => {
    filterProducts("food");
  }, [products]);

  const handleOpen = (product) => {
    // Handle opening modal or any other action
  };

  return (
    <Grid
      container
      
     
    >
      <Grid item xs={12}>
       

        <Grid container justifyContent="center" >
            <Grid container style={{
            backgroundImage: location ? `url(${location.backgroundImage})` : "",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            minHeight: {lg:"30vh",xs:"10vh"},
            paddingBottom: "16px",
           
          }}
          >
         <Grid xs={12} marginBottom="0px" marginTop="16px" marginLeft="32px">
          <a href={`/destination/${id}`} style={{ textDecoration: "none" }}>
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
        </Grid>
            <Typography
              sx={{
                color: "white",
                fontFamily: "poppins",
                marginTop: "8px",
                fontSize: { lg: "50px", xs: "24px" },
                paddingLeft:{lg:"450px",xs:"32px"},
                paddingTop:{lg:"80px",xs:"32px"},
                paddingBottom:{lg:'80px',xs:'32px'}
              }}
              
            >
              Foods All Around {locationName}


              {loading?<><CircularProgress sx={{color:'green',marginLeft:{lg:'32px',xs:'8px'}}}/></>:<>
              {filteredProducts.length === 0 && (
            <Box
              sx={{
                borderColor: "black",
                borderRadius: "30px",
                backgroundColor: "rgba(255,255,255, 0.3)",
                padding: "24px",
                marginTop: { lg: "16px", xs: "16px" },
              }}
            >
              <Typography
                sx={{ color: "black", fontSize: { lg: "20px", xs: "18px" } }}
              >
                No Added Food Items 
              </Typography>
            </Box>
            )}
              </>}
             
            </Typography>
        

            </Grid>
            
            <Grid marginTop="20px" >
          <Box
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/iplus/image/upload/v1710614906/pexels-prateek-katyal-2740697_jdoxoj.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            paddingBottom: "16px",
            paddingLeft:{lg:"24px",xs:'8px'},
            paddingRight:{lg:'24px',xs:'16px'}
          }}
          >
            <Grid
              container
              spacing={3}
              style={{
                transform: hoveredIndex !== null ? "translateY(-10px)" : "",
                transition: "transform 0.3s",
                cursor:'default',
              }}
            >
              {filteredProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={product._id}>
                  <Card
                    sx={{
                      borderColor: "black",
                      borderRadius: "30px",
                      backgroundColor: "rgba(255,255,255, 0.3)",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      marginLeft:'8px',
                      marginRight:'8px'
                    }}
                    variant="outlined"
                    onClick={() => handleOpen(product)}
                  >
                    <img
                      src={product.images}
                      alt="product"
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
                        Name: {product.productName}{product.location}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Description: {product.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Price: {product.price}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Contact Number: {product.contactNumber}
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
  );
};

export default Food;
