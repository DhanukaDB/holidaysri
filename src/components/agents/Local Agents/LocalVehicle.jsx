import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import Customtextfield from "../../../components/hotel/Login/Customtextfield";
import axios from "axios"; // Import axios for making HTTP requests
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 640, xs: 250 },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  height: { lg: "600px", xs: "550px" },
  overflow: "auto",
};

const LocalVehicleForm = (props) => {
  const [open, setOpen] = React.useState(false);
  const [editingVehicle, setEditingVehicle] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);
    window.location.reload();
  }
  const [images, setImages] = useState([]);
  const [gender, setGender] = React.useState('');
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [Vehiclecategory, setVehiclecategory] = useState("");
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [price, setPrice] = useState("");
  const [nic, setNic] = useState("");
 // const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [uploadEnabled, setUploadEnabled] = useState(false); // State to track upload button enable/disable
 

 
  const handleChange = (event) => {
    setGender(event.target.value);
  };


   // Function to check if all required fields are filled
   const checkRequiredFields = () => {
    return (
      vehicleNumber &&
      Vehiclecategory &&
      location &&
      contactNumber &&
      price &&
      nic &&
      description &&
      promoCode &&
      gender 
    );
  };

  // Effect to enable/disable upload button based on required fields
  useEffect(() => {
    setUploadEnabled(checkRequiredFields());
  }, [vehicleNumber, Vehiclecategory, location, contactNumber, price, nic, description, promoCode, gender]);



const handleFileChange = async (event) => {
   // Only allow file upload if all required fields are filled
   if (!checkRequiredFields()) {
    alert("Please fill all required fields before uploading images.");
    return;
  }

  if (!event.target.files) {
    // Handle case where files are not selected
    console.error("No files selected");
    return;
  }

  const formData = new FormData();
  const selectedImages = Array.from(event.target.files);
  setImages(selectedImages); // Update state with selected images
  
  // Loop through selected images and append them to formData
  selectedImages.forEach((selectedImage) => {
    formData.append("file", selectedImage);
  });
  
  formData.append("upload_preset", "aahllisc");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/daa9e83as/image/upload",
      formData
    );
    
    const images = response.data.secure_url;
    // Call a function to handle adding the vehicle with the image URL
   
    handleAddButtonClick(images);
    
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

const handleAddVehicle = async (newVehicle) => { 
 

  const response = await axios.post("https://holidaysri-backend.onrender.com/vehicle/add/", newVehicle);
  alert("The New Vehicle was Successfully saved");
  window.location = `/add-vehicle`;

};

const handleAddButtonClick = async (images) => {

const newVehicle = {
  vehicleNumber,
  Vehiclecategory,
  location,
  contactNumber,
  price,
  nic,
  description,
  promoCode,
  gender,
  images: images // Pass the uploaded image URL to the backend
}
  handleAddVehicle(newVehicle);

};





  useEffect(() => {
    async function getAllVehicles() {
      try {
        const res = await axios.get(
          "https://holidaysri-backend.onrender.com/vehicle/"
        );
        setVehicleDetails(res.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        alert("Error fetching vehicles: " + error.message);
      }
    }
    getAllVehicles();
  }, []);

  function handleDeleteVehicle(id) {
    const r = window.confirm("Do you really want to Delete this Vehicle?");
    if (r == true) {
      axios
        .delete(`https://holidaysri-backend.onrender.com/vehicle/delete/${id}`)
        .then((res) => {
          alert("Delete Successfully");
          window.location.reload();
          setVehicleDetails();
        });
    }
  }

  return (
    <div
      style={{
        paddingTop: "16px",
        paddingBottom: "16px",
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1710524824/pexels-aj-ahamad-19149700_b9hzgv.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          margin: { lg: "40px", xs: "16px" },
          padding: { lg: "24px", xs: "10px" },
          borderRadius: "20px",
        }}
      >
        <Box textAlign="center" marginTop={{ lg: "4%", xs: "4%" }}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "inter",
              fontSize: { lg: "50px", xs: "18px" },
              letterSpacing: "20px",
            }}
          >
            Add Local Vehicles
          </Typography>
        </Box>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
            marginTop="40px"
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: { lg: "200px", xs: "48%" },
                backgroundColor: "white",
                color: "black",
                marginTop: { lg: "32px", xs: "20px" },
                height: "48px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                  boxShadow: "none",
                },
              }}
              onClick={handleOpen}
            >
              ADD vehicle
            </Button>
          </Box>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Customtextfield
              label="vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
           
            <Customtextfield
              label="Vehicle Category"
              value={Vehiclecategory}
              onChange={(e) => setVehiclecategory(e.target.value)}
            />
            <Customtextfield
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Customtextfield
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Customtextfield
              label="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
             <Customtextfield
              label="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
             <Customtextfield
              label="PromoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <Typography marginTop="16px" >Driver Gender</Typography>
           <Select
           sx={{width:'60%',marginTop:'8px'}}
           id="demo-simple-select"
           value={gender}
           onChange={handleChange}
           > 
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          </Select>

       
         <Customtextfield label="Description" value={description} onChange={(e) => setDescription(e.target.value)} marginTop="8px" />
            
            
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="uploadImageInput"
                onChange={handleFileChange}
                multiple // Allow multiple file selection
              />
              <label htmlFor="uploadImageInput">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderRadius: "30px",
                    borderColor: "black",
                    "&:hover": {
                      color: "black",
                      borderRadius: "30px",
                      borderColor: "black",
                    },
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                  component="span"
                >
                  Upload images
                </Button>
              </label>
              <div>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${index}`}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      margin: "5px",
                    }}
                  />
                ))}
              </div>
            </div>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: { lg: "48%", xs: "48%" },
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
            >
              Cancel
            </Button>{" "}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: { lg: "48%", xs: "48%" },
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
              onClick={handleAddButtonClick}
            >
              Add
            </Button>
          </Box>
        </Modal>
        <Grid container justifyContent="center" alignItems="center">
        <>
      <Box
        sx={{
          width: { lg: "1100px", xs: "300px" },
        }}
      >
        <Typography marginTop="16px" sx={{ color: "white" }}>
        Vehicles
        </Typography>
        
      </Box>
      {vehicleDetails.map((vehicle) => (
        <Box
          key={vehicle._id}
          border={3}
          sx={{
            width: { lg: "1100px", xs: "280px" },
            borderColor: "black",
            borderRadius: "30px",
            backgroundColor: "rgba(48, 103, 84, 0.5)",
            padding: "24px",
            marginTop: { lg: "16px", xs: "16px" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Box width={{ lg: "70%" }} height={{ lg: "70%" }}>
                <img
                  src={vehicle.images}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "30px" }}
                  alt="image_1"
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: { lg: "24px", xs: "20px" },
                  textAlign: "left",
                }}
              >
                Vehicle Number: {vehicle.vehicleNumber}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: { lg: "16px", xs: "16px" },
                  textAlign: "left",
                  marginTop: "8px",
                }}
              >
                 Vehicle Category: {vehicle.Vehiclecategory}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: { lg: "16px", xs: "16px" },
                  textAlign: "left",
                  marginTop: "8px",
                }}
              >
               Location: {vehicle.location}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: { lg: "16px", xs: "16px" },
                  textAlign: "left",
                  marginTop: "8px",
                }}
              >
                Contact Number: {vehicle.contactNumber}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: { lg: "16px", xs: "16px" },
                  textAlign: "left",
                  marginTop: "8px",
                }}
              >
               Price : {vehicle.price}
              </Typography>
              <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Nic : {vehicle.nic}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Gender : {vehicle.gender}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Description: {vehicle.description}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: { lg: "16px", xs: "16px" },
                      textAlign: "left",
                      marginTop: "8px",
                    }}
                  >
                    Promo Code : {vehicle.promoCode}
                  </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "30px",
                  marginTop: "16px",
                }}
                onClick={() => handleEdit(vehicle)}
              >
                Edit
              </Button>{" "}
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "30px",
                  marginTop: "16px",
                }}
                onClick={() => handleDeleteVehicle(vehicle._id)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
          {/*.map ends */}
        </Grid>
      </Box>

      <Modal
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Customtextfield
            label="vehicle Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
          <Customtextfield
            label="Vehicle Category"
            value={Vehiclecategory}
            onChange={(e) => setVehiclecategory(e.target.value)}
          />
          <Customtextfield
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Customtextfield
            label="ContactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
           <Customtextfield
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
              <Customtextfield
            label="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
              <Customtextfield
            label="PromoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
           <Typography marginTop="16px" >Driver Gender</Typography>
        <Select
        sx={{width:'60%',marginTop:'8px'}}
          id="demo-simple-select"
          value={gender}
          onChange={handleChange}
        > 
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
        </Select>
          <Customtextfield
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
         
          
          <div>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="uploadImageInput"
              onChange={handleFileChange}
              multiple // Allow multiple file selection
            />
            <label htmlFor="uploadImageInput">
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  borderRadius: "30px",
                  borderColor: "black",
                  "&:hover": {
                    color: "black",
                    borderRadius: "30px",
                    borderColor: "black",
                  },
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
                component="span"
              >
                Upload images
              </Button>
            </label>
            <div>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    margin: "5px",
                  }}
                />
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
            onClick={handleAddButtonClick}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <Box></Box>
    </div>
  );
};

export default LocalVehicleForm;
