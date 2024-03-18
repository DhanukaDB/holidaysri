import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TextPage = () => {
  // State variable to store data retrieved from the backend
  const [data, setData] = useState({});

  // Function to fetch data from the backend when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://holidaysri-backend.onrender.com/rate/'); // Adjust endpoint as needed
        setData(response.data.rate); // Assuming response.data contains the data to be displayed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Text labels */}
      <h2>Rates &  Discounts</h2>
      <label htmlFor="name">Hotel Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discounthotelPercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Package Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountpackagePercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Souveniour Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountsouveniourPercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Gifts Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountgiftsPercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Collectible Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountcollectiblePercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Vehicle Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountvehiclePercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Agent Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountagentPercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Guide Discount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.discountguidePercentage || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Hotel Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.hotelAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Package Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.packageAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Souveniour Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.souveniourAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Gifts Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.giftsAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Collectible Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.collectibleAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Vehicle Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.vehicleAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Agent Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.agentAdvertiseRate || ''}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Guide Rate:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={data.guideAdvertiseRate || ''}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextPage;
