import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import Customtextfield from "../../components/hotel/Login/Customtextfield";
import axios from "axios"; // Import axios for making HTTP requests
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Seller = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleFileChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);
  };

const handleAddProduct = (e) => {
       
  e.preventDefault();

  const newProduct ={
    productName,
    category,
    location,
    description,
    price,
    contactNumber,
  }


  console.log(newProduct)  
  //alert("Success");

  axios.post("http://localhost:8000/product/add", newProduct).then(() => {
       alert("The New Product was Successfully saved")
      // history.push('/')
      window.location = `/`;

   }).catch((err) =>{
       alert(err)
   })
};
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>ADD SELLER</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Customtextfield label="Product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
          <Customtextfield label="Product Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <Customtextfield label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Customtextfield label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Customtextfield label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <Customtextfield label="ContactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          <div>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="uploadImageInput"
              onChange={handleFileChange}
              multiple // Allow multiple file selection
            />
            <label htmlFor="uploadImageInput">
              <Button
                variant="outlined"
                sx={{
                  color: 'black',
                  borderRadius: '30px',
                  borderColor: 'black',
                  '&:hover': {
                    color: 'black',
                    borderRadius: '30px',
                    borderColor: 'black',
                  },
                  marginTop: '16px',
                  marginBottom: '16px',
                }}
                component="span"
              >
                Upload images
              </Button>
            </label>
            <div>
              {images.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
              ))}
            </div>
          </div>
         
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              borderColor: "black",
              boxShadow: "none",
              width: { lg: "100%", xs: "100%" },
              color: "black",
              marginTop: "32px",
              height: "48px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
                boxShadow: "none",
              },
            }}
            onClick={handleAddProduct}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <Box></Box>
    </div>
  );
};

export default Seller;
