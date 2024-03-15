import React, { useState } from 'react';
// Importing the Hotel model

const AddHotelForm = () => {
    const [formData, setFormData] = useState({
        hotelName: '',
        category: '',
        location: '',
        description: '',
        price: '',
        images: '',
        distance: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you have a function to handle form submission and saving data to the backend
        // For example:
        // saveHotel(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="hotelName">Hotel Name:</label>
            <input type="text" id="hotelName" name="hotelName" value={formData.hotelName} onChange={handleChange} />

            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange}>
                <option value="hotelName">Hotel Name</option>
                <option value="category">Category</option>
                <option value="location">Location</option>
                <option value="description">Description</option>
                <option value="price">Price</option>
                <option value="images">Images</option>
                <option value="distance">Distance</option>
            </select>

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>

            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />

            <label htmlFor="images">Images:</label>
            <input type="text" id="images" name="images" value={formData.images} onChange={handleChange} />

            <label htmlFor="distance">Distance:</label>
            <input type="text" id="distance" name="distance" value={formData.distance} onChange={handleChange} />

            <button type="submit">Add Hotel</button>
        </form>
    );
};

export default AddHotelForm;
