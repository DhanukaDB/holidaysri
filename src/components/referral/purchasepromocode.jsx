// src/components/PurchasePromoCodePage.js
import React, { useState } from 'react';
import axios from 'axios';

const PurchasePromoCodePage = () => {
  const [promoCode, setPromoCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [userName, setuserName] = useState('');

  const handleGeneratePromoCode = async () => {
    try {
      const backendUrl = 'http://localhost:3004';

      console.log('Sending request to generate promo code...');

      const response = await axios.post(`${backendUrl}/api/generate-promo-code`, {
        userName: userName,
        discountPercentage: 15,
        expirationDate: '2024-03-20',
      });

      console.log('Response from server:', response.data);

      const generatedPromoCode = response.data.code;

      setPromoCode(generatedPromoCode);
      console.log('Generated Promo Code:', generatedPromoCode);
    } catch (error) {
      console.error('Error generating promo code:', error.message);
    }
  };

  const handleGetPromoCode = async () => {
    try {
      const backendUrl = 'http://localhost:3004';

      const response = await axios.post(`${backendUrl}/api/apply-promo-code`, {
        bookingTotal: 100, // Replace with the actual booking total or get it dynamically
        promoCode,
      });

      // Assuming your backend responds with the discount amount
      const discountAmount = response.data.discountAmount;
      const finalAmount = response.data.finalAmount;
      setTotalValue(finalAmount);

      console.log('Discount Amount:', discountAmount, 'Final Amount:', finalAmount);
    } catch (error) {
      console.error('Error getting promo code:', error.message);
    }
  };

  return (
    <div>
      <h1>Purchase Promo Code Page</h1>
      <div>
        <label>Generated Promo Code:</label>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={handleGeneratePromoCode}>Generate Promo Code</button>
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </div>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          onChange={(e) => setuserName(e.target.value)}
        />
        </div>
      <button onClick={handleGetPromoCode}>Get Promo Code</button>
      <div>
        <input
          type="text"
          value={totalValue}
        />
      </div>
    </div>
  );
};

export default PurchasePromoCodePage;
