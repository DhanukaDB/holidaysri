import React, { useRef, useEffect } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
const Destination = () => {
  const imageLinksArray = [
    "https://fernandotravels.com.au/wp-content/uploads/2018/06/galle-fort.jpg",
    "https://www.suryalanka.com/wp-content/uploads/2020/06/featured-img2.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515879655.jpg?k=52a5b8217dcafb83c3cc6df570d1ffdb007e66254353089f45c1c8673648d0bf&o=&hp=1",
    "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/Galle-Fort-Beach.jpg",
    "https://www.andbeyond.com/wp-content/uploads/sites/5/galle-sri-lanka-tuk-tuk1.jpg",
    "https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg",
  ];
  const description =
  "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort’s southeast tip.";
  const gridRef = useRef(null);

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
      imageLinksArray.forEach((image, index) => {
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
        backgroundImage:
          'url("https://www.aman.com/sites/default/files/2021-02/Amangalla%2C%20India-%20Accommodation%2C%20landscape%2C%20ocean%2C%20sunset_1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12}>
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

        <Grid container justifyContent="center" alignItems="center">
          <Box
            border={3}
            sx={{
              width: { lg: "850px",xs:'280px' },
              borderColor: "black",
              borderRadius: "30px",
              backgroundColor: "rgba(48, 103, 84, 0.5)",
              padding: "24px",
              marginTop:{lg:'24px',xs:'32px'},
              marginBottom:'32px'
            }}
          >
            <Box marginBottom="16px">
            <a href="/events" style={{textDecoration:'none'}}><Button variant="outlined" sx={{color:'white',borderColor:'white',borderRadius:'30px',}}>View Events</Button> </a>  
            
            <a href="/rides" style={{textDecoration:'none'}}><Button variant="outlined"  sx={{color:'white',borderColor:'white',borderRadius:'30px'}}>Find a Ride</Button> </a>    
            </Box>
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
                marginTop:'8px'
              }}
            >
              {description}
            </Typography>
            
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Destination;
