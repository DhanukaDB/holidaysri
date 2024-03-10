import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography, Modal, Grid } from "@mui/material";
import Customtextfield from '../hotel/Login/Customtextfield';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]); // Assuming cart contains selected advertisements
  const [promoCode, setPromoCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalAmount, setFinalAmount] = useState(0);
  const [userName, setuserName] = useState('');
  const [payableAmount, setPayableAmount] = useState(0);
  const [promoCodeInfo, setPromoCodeInfo] = useState(null);

  const totalAmount= 5000;

  // Function to handle promo code application
  const handleApplyPromoCode = async () => {
    try {
      // Fetch discount amount, user name, and discount percentage from the server based on the promo code
      const response = await axios.post('http://localhost:3004/api/apply-promo-code', {
        promoCode,
      });

      const { userName, discountPercentage } = response.data;
      setDiscountPercentage(discountPercentage);
      setuserName(userName);
      console.log(response.data);
      setPromoCodeInfo({ userName, discountPercentage });
      
      // Calculate payable amount after considering discount percentage
      setPayableAmount(totalAmount - (totalAmount * discountPercentage / 100));
    } catch (error) {
      console.error('Error applying promo code:', error.message);
      setDiscountPercentage(0);
      setPromoCodeInfo(null);
      setPayableAmount(0);
    }
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Assuming you have a function to create an order
    // Call the backend API to create an order
    axios.post('http://localhost:3004/api/create-order', {
      userName: userName,
      totalAmount: finalAmount,
      items: cart.map(item => item._id), // Assuming the item object has _id field
    })
    .then(response => {
      console.log('Order created successfully:', response.data);
      // Handle any further actions after successful checkout
    })
    .catch(error => {
      console.error('Error creating order:', error.message);
      // Handle errors during checkout
    });
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
        
        <h1>Checkout Page</h1>
        <div>
        <Typography marginTop={{ lg: "16px", xs: "16px" }}>Cart Items</Typography>
        {/* Render the list of cart items */}
        <ul>
          {cart.map(item => (
            <li key={item._id}>{item.name} - ${item.amount}</li>
          ))}
        </ul>
      </div>
        <div>
          <Customtextfield
            marginTop={{ lg: "24px", xs: "24px" }}
            value={totalAmount}
          />

<div>
        <Customtextfield
            label="Promo Code"
            marginTop="16px"
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
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
            onClick={handleApplyPromoCode}
          >
            Apply Promo Code
          </Button>

        {promoCodeInfo && (
          <p>You are eligible for the discount. User: {userName}</p>
        )}
        {discountPercentage === 0 && promoCodeInfo === null && (
          <p>Invalid promo code.</p>
        )}
      </div>
      <div>
        <h2 style={{marginTop:'16px'}} >Summary</h2>
        <p>Total Amount: ${totalAmount}</p>
        <p>Payable Amount: ${payableAmount}</p>
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
            onClick={handleCheckout}
          >
            Checkout
          </Button>
      </div>

















         
        </div>

      </Box>
  
  {/* 
  <h1>Checkout Page</h1>
      <div>
        <h2>Cart Items</h2>
        <ul>
          {cart.map(item => (
            <li key={item._id}>{item.name} - ${item.amount}</li>
          ))}
        </ul>
      </div>
      <div>
      <input
          type="text"
          value={totalAmount}
        />
      </div>
      <div>
        <h2>Promo Code</h2>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={handleApplyPromoCode}>Apply Promo Code</button>
        {promoCodeInfo && (
          <p>You are eligible for the discount. User: {userName}</p>
        )}
        {discountPercentage === 0 && promoCodeInfo === null && (
          <p>Invalid promo code.</p>
        )}
      </div>
      <div>
        <h2>Summary</h2>
        <p>Total Amount: ${totalAmount}</p>
        <p>Payable Amount: ${payableAmount}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
  */}
   
    </Grid>
  );
};

export default CheckoutPage;
