import React, { useState } from 'react';

function LocalVehicleForm() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [nic, setNIC] = useState('');
  const [vehicleImages, setVehicleImages] = useState([]);
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:'white'}}>
      <div>
        <label>Vehicle Number:</label>
        <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />
      </div>
      <div>
        <label>Vehicle Category:</label>
        <input type="text" value={vehicleCategory} onChange={(e) => setVehicleCategory(e.target.value)} />
      </div>
      <div>
        <label>Owner Name:</label>
        <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
      </div>
      <div>
        <label>NIC:</label>
        <input type="text" value={nic} onChange={(e) => setNIC(e.target.value)} />
      </div>
      <div>
        <label>Vehicle Images:</label>
        <input type="file" onChange={(e) => setVehicleImages(e.target.files)} multiple />
      </div>
      <div>
        <label>Contact Number:</label>
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LocalVehicleForm;