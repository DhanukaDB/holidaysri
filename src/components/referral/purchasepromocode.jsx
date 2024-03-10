// src/components/PurchasePromoCodePage.js
import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Typography, Modal, Grid } from "@mui/material";
import Customtextfield from "../hotel/Login/Customtextfield";

const PurchasePromoCodePage = () => {
  const [promoCode, setPromoCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [userName, setuserName] = useState("");

  const handleGeneratePromoCode = async () => {
    try {
      const backendUrl = "http://localhost:3004";

      console.log("Sending request to generate promo code...");

      const response = await axios.post(
        `${backendUrl}/api/generate-promo-code`,
        {
          userName: userName,
          discountPercentage: 15,
          expirationDate: "2024-03-20",
        }
      );

      console.log("Response from server:", response.data);

      const generatedPromoCode = response.data.code;

      setPromoCode(generatedPromoCode);
      console.log("Generated Promo Code:", generatedPromoCode);
    } catch (error) {
      console.error("Error generating promo code:", error.message);
    }
  };

  const handleGetPromoCode = async () => {
    try {
      const backendUrl = "http://localhost:3004";

      const response = await axios.post(`${backendUrl}/api/apply-promo-code`, {
        bookingTotal: 100, // Replace with the actual booking total or get it dynamically
        promoCode,
      });

      // Assuming your backend responds with the discount amount
      const discountAmount = response.data.discountAmount;
      const finalAmount = response.data.finalAmount;
      setTotalValue(finalAmount);

      console.log(
        "Discount Amount:",
        discountAmount,
        "Final Amount:",
        finalAmount
      );
    } catch (error) {
      console.error("Error getting promo code:", error.message);
    }
  };

  return (
    <Grid
      sx={{
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1709990615/pexels-alex-azabache-3723035_1_xs9aso.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: "16px",
        paddingLeft: {lg:"70px",xs:'15%'},
        paddingRight: {lg:"32px",xs:'16px'},
        paddingTop:{lg:'10%',xs:'20%'}
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: { lg: "24px", xs: "16px" },
          borderRadius: "20px",
          width:{lg:'50%',xs:'80%'}
        }}
      >
        
        <h1>Purchase Promo Code Page</h1>
        <div>
          <Customtextfield
            marginTop={{ lg: "32px", xs: "24px" }}
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            label="Generated Promo Code:"
          />

          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              borderColor: "white",
              boxShadow: "none",
              width: { lg: "220px", xs: "200px" },
              backgroundColor: "black",
              color: "white",
              marginTop: { lg: "16px", xs: "20px" },
              height: "32px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "white",
                boxShadow: "none",
              },
            }}
            onClick={handleGeneratePromoCode}
          >
            Generate Promo Code
          </Button>
        </div>
        <div style={{ marginTop: "8px", marginBottom: "8px" }}>
          <Typography>Expiration Date:</Typography>
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            style={{
              borderRadius: "4px",
              marginTop:'8px',
              color: "black",
              border: "2px solid black",
            }}
          />
        </div>
        <div>
          <Customtextfield
            label="User Name:"
            type="text"
            onChange={(e) => setuserName(e.target.value)}
          />
          {/*  <label>User Name:</label>
          <input type="text" onChange={(e) => setuserName(e.target.value)} />*/}
        </div>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            borderColor: "white",
            boxShadow: "none",
            width: { lg: "190px", xs: "200px" },
            backgroundColor: "black",
            color: "white",
            marginTop: { lg: "16px", xs: "20px" },
            height: "32px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              borderColor: "white",
              boxShadow: "none",
            },
          }}
          onClick={handleGetPromoCode}
        >
          Get Promo Code
        </Button>
        <div>
          <Customtextfield value={totalValue} />
        </div>
      </Box>
    </Grid>
  );
};

export default PurchasePromoCodePage;
