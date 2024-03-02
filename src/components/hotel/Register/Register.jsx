import React, { useState } from "react";
import { Tab, Tabs, Typography, Box, Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Customtextfield from "../Login/Customtextfield";
import Background from "../../../assets/Register.jpg"
import "./register.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const tabLabels = [
  { label: "For Customer", index: 0 },
  { label: "For Local Agent", index: 1 },
  { label: "For Forigen Agent", index: 2 },
  { label: "For Adviser", index: 3 },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Register = (props) => {
  const { size, state, ...rest } = props;
  const [value, setValue] = React.useState(0);
  const [image, setImage] = useState(null);
  const [role, setRole] = useState(null);

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];
    // Handle the selected image, you may want to upload it or perform other actions
    setImage(selectedImage);
  };
  const handleChange = (event, newValue) => {
    const selectedRole = tabLabels[newValue].label;
    setRole(selectedRole);
    setValue(newValue);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        margin: 0,
        paddingTop:'0px',
        paddingLeft:'7%'
      }}
    >
      
      <Grid container paddingLeft={{lg:'10%'}}  className="registerform">
  <Grid item xs={6}>
    <a href="/">
    <Button variant="contained" sx={{
    borderRadius: '30px',
    backgroundColor: 'black',
    boxShadow:'none',
    '&:hover': {
      backgroundColor: 'black', 
      boxShadow:'none'
    },
  }}>Back</Button>
    </a>
  

  <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        orientation="horizontal"
        variant="scrollable"
        sx={{
          color:'black',
          "& .Mui-selected": {
            backgroundColor: "transparent !important",
            color: "black !important",
          },
          "& .Mui-selected:hover": {
            backgroundColor: "transparent !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#48BB78",
            height: "2px",
            borderRadius: "3px",
          },
          "& .MuiTabs-flexContainer": {
            borderColor: "#F3EFF4",
          },
        }}
      >
        {tabLabels.map(({ label, index }) => (
          <Tab
            key={index}
            label={
              <div>
                <Typography
                  fontWeight={500}
                  sx={{
                    fontSize: { lg: "14px", xs: "14px" },
                  }}
                >
                  {label}
                </Typography>
              </div>
            }
            {...a11yProps(index)}
            sx={
              index === 0
                ? { justifyContent: "right !important", marginTop: "5px" }
                : {}
            }
          />
        ))}
      </Tabs>
      <Grid paddingLeft={{lg:'32px'}}>
      {role === "For Local Agent" && (
        <Customtextfield label="NIC" marginTop="16px" marginBottom="16px" />
      )}
      {role === "For Forigen Agent" && (
        <Customtextfield
          label="Passport Number"
          marginTop="16px"
          marginBottom="16px"
        />
      )}
      {(role === "For Forigen Agent" || role === "For Local Agent") && (
        <div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="uploadImageInput"
            onChange={handleFileChange}
          />
          <label htmlFor="uploadImageInput">
            <Button sx={{
   
    color:'black',
    
    '&:hover': {
     
      color:'black',
      
    },}} component="span">
              Upload image of{" "}
              {role === "For Local Agent" ? <>NIC Front/Back</> : <>Passport</>}
            </Button>
          </label>
          {image && <p>Selected Image: {image.name}</p>}
        </div>
      )}
      <Customtextfield label="Name" marginTop="16px" />
      <Customtextfield label="Contact Number" marginTop="16px" />
      <Customtextfield label="Email" marginTop="16px" />
      <Customtextfield label="Password" marginTop="16px" />
      <Button variant="outlined" sx={{
    borderRadius: '30px',
    borderColor: 'black',
    boxShadow:'none',
    width:'93%',
    color:'black',
    marginTop:'32px',
    height:'48px',
    '&:hover': {
      backgroundColor: 'black', 
      color:'white',
      borderColor:'black',
      boxShadow:'none'
    },}}>Register</Button>
      </Grid> </Grid>
  <Grid item xs={6} >
    <Box width={{lg:'90%'}}  >

    </Box>
s  </Grid>
</Grid>
      
    </div>
  );
};

export default Register;
