import React, { useState } from "react";
import { Box, Button, Typography, Modal, Grid } from "@mui/material";
import Customtextfield from "../../hotel/Login/Customtextfield";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios"; // Import axios for making HTTP requests


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 600, xs: 250 },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  height: { lg: "600px", xs: "550px" },
  overflow: "auto",
};
const LocalVehicleForm = (props) => {
  const [openlocation, setOpenlocation] = React.useState(false);
  const handleOpenlocation = () => setOpenlocation(true);
  const handleCloselocation = () => setOpenlocation(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [images, setImages] = useState([]);
  const [gender, setGender] = React.useState('');

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [Vehiclecategory, setVehiclecategory] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [price, setPrice] = useState("");
  const [nic, setNic] = useState("");
 // const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [promoCode, setPromoCode] = useState("");
  
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);
  };


  
  const handleAddVehicle = (e) => { 
    e.preventDefault();
    const newVehicle ={
      vehicleNumber,
      Vehiclecategory,
      contactNumber,
      price,
      nic,
      description,
      promoCode
    }
  
    console.log(newVehicle)  
    //alert("Success");
    axios.post("https://holidaysri-backend.onrender.com/vehicle/add/", newVehicle).then(() => {
         alert("The New Vehicle was Successfully saved")
        // history.push('/')
        window.location = `/`;
  
     }).catch((err) =>{
         alert(err)
     })
  };


  return (
    <div
      style={{
        paddingTop: "16px",
        paddingBottom: "16px",
        backgroundImage:
          'url("https://res.cloudinary.com/iplus/image/upload/v1709990615/pexels-alex-azabache-3723035_1_xs9aso.jpg")',
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
              fontSize: { lg: "50px", xs: "18px" },
              letterSpacing: "20px",
            }}
          >
            Add Local Vehicle
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

            <Customtextfield label="vehicle Number" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} marginTop="8px" />
            <Customtextfield label="Vehicle Category" value={Vehiclecategory} onChange={(e) => setVehiclecategory(e.target.value)} marginTop="8px" />
            <Customtextfield label="contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} marginTop="8px" />
            <Customtextfield label="price" value={price} onChange={(e) => setPrice(e.target.value)} marginTop="8px" />
            <Customtextfield label="NIC" value={nic} onChange={(e) => setNic(e.target.value)} marginTop="8px" />
            <Customtextfield label="PromoCode" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} marginTop="8px" />
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

            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="uploadImageInput"
                onChange={handleFileChange}
                multiple 
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
                  Upload image
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
            <Customtextfield label="Description" value={description} onChange={(e) => setDescription(e.target.value)} marginTop="8px" />
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
                width: { lg: "50%", xs: "50%" },
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
              onClick={handleAddVehicle}
            >
              Add
            </Button>
          </Box>
        </Modal>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: { lg: "1100px", xs: "300px" },
            }}
          >
            <Typography
              fontSize={{ lg: "24px", xs: "22px" }}
              sx={{ color: "white" }}
              marginTop="32px"
            >
              Vehicles:
            </Typography>
          </Box>
          {/*.map start */}
          <>
            <Box
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
                      src="https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg"
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
                    vehicleNumber
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
                    Vehiclecategory
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
                    contactNumber
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
                    price
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
                    nic
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
                    Gender
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
                    description
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
                    promoCode
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: "30px",
                      marginTop: "16px",
                    }}
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
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
          {/*.map ends */}
        </Grid>
      </Box>
    </div>
  );
};

export default LocalVehicleForm;
