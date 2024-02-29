import React, { useState } from "react";
import { Tab, Tabs, Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import Customtextfield from "./Customtextfield";
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
    <div style={{ cursor: "pointer" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        orientation="horizontal"
        variant="scrollable"
        sx={{
          "& .Mui-selected": {
            backgroundColor: "#FFFFFF !important",
            color: "#47464F !important",
          },
          "& .Mui-selected:hover": {
            backgroundColor: "#FFFFFF !important",
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
      {role==='For Local Agent' && <Customtextfield label="NIC" marginTop="16px" marginBottom='16px'/>}
      {role==='For Forigen Agent' &&  <Customtextfield label="Passport Number" marginTop="16px" marginBottom='16px'/>}
      {(role === 'For Forigen Agent' || role === 'For Local Agent') && 
      <div >
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="uploadImageInput"
        onChange={handleFileChange}
      />
      <label htmlFor="uploadImageInput">
        <Button component="span">Upload image of {role === 'For Local Agent' ? <>NIC Front/Back</>:<>Passport</>}</Button>
      </label>
      {image && <p>Selected Image: {image.name}</p>}
    </div>
      }
      <Customtextfield label="Name" marginTop="16px" />
      <Customtextfield label="Contact Number" marginTop="16px" />
      <Customtextfield label="Email" marginTop="16px" />
      <Customtextfield label="Password" marginTop="16px" />
      
    </div>
  );
};

export default Register;
