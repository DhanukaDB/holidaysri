import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Checkout Page</h1>
      <div>
        <h2>Cart Items</h2>
        {/* Render the list of cart items */}
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
    </div>
  );
};

export default CheckoutPage;
