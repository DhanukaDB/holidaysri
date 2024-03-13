import React, { useState } from "react";
import { Tab, Tabs, Typography, Box, Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Customtextfield from "../Login/Customtextfield";
import Background from "../../../assets/Register.jpg";
import "./register.css";
import Customer from "../../../assets/custumer.png";
import Seller from "../../../assets/seller.png";
import Adviser from "../../../assets/adviser.png";
import Localagent from "../../../assets/localagent.png";
import Foreginagent from "../../../assets/forigenagent.png";

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
  { label: "For Agent", index: 1 },
  { label: "For Advisor", index: 2 },
  { label: "Seller", index: 3 },
  { label: "For Tour Guid", index: 4 },
  { label: "For Travel Partner", index: 5 },
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
  const [role, setRole] = useState("For Customer");
  const [subrole, setSubRole] = useState("For Forigen Agent");

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
        height: "100%",
        margin: 0,
      }}
    >
      <Grid
        paddingTop={{ lg: "5%" }}
        paddingBottom={{ lg: "5%" }}
        width={{ lg: "1150px" }}
        paddingLeft={{ lg: "25%" }}
      >
        <Grid className="registerform">
          <a href="/">
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                backgroundColor: "black",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "black",
                  boxShadow: "none",
                },
              }}
            >
              Back
            </Button>
          </a>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="horizontal"
            variant="scrollable"
            sx={{
              color: "black",
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
          <Grid paddingLeft={{ lg: "32px" }}>
            <Customtextfield
              label="Name"
              marginTop="16px"
              width={{ lg: "115%", xs: "110%" }}
            />
            {role === "For Agent" && <>
            
            <Typography marginTop="20px">Select</Typography>
            <Grid container marginTop={{ lg: "12px", xs: "12px" }}>
              <Grid item xs="auto">
                <Box
                  onClick={() => {
                    setSubRole("For Forigen Agent");
                  }}
                  border={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: {
                      xs: "255px",
                      lg: "200px",
                    },
                    height: {
                      xs: "48px",
                      lg: "48px",
                    },
                    borderColor:
                    subrole === "For Forigen Agent" ? "Black" : "Black",
                    borderRadius: "13px",
                    backgroundColor:
                    subrole === "For Forigen Agent" ? "black" : "#FFFFFF",
                    cursor: "pointer",
                    marginTop: { lg: "0px", xs: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: subrole === "For Forigen Agent" ? "white" : "black",
                    }}
                  >
                    Forigen Agent
                  </Typography>
                </Box>
              </Grid>
              <Grid item marginLeft={{ lg: "12px" }}>
                <Box
                  onClick={() => {
                    setSubRole("For Local Agent");
                  }}
                  border={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: {
                      xs: "255px",
                      lg: "200px",
                    },
                    height: {
                      xs: "48px",
                      lg: "48px",
                    },
                    borderColor: subrole === "For Local Agent" ? "black" : "black",
                    borderRadius: "13px",
                    backgroundColor:
                    subrole === "For Local Agent" ? "black" : "#FFFFFF",
                    cursor: "pointer",
                    marginTop: { lg: "0px", xs: "16px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: subrole === "For Local Agent" ? "white" : "black",
                    }}
                  >
                    Local Agent
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {subrole === "For Local Agent" && (
              <Customtextfield
                label="NIC"
                marginTop="16px"
                marginBottom="16px"
                width={{ lg: "115%", xs: "110%" }}
              />
            )}
            {subrole === "For Forigen Agent" && (
              <Customtextfield
                label="Passport Number"
                marginTop="16px"
                marginBottom="16px"
                width={{ lg: "115%", xs: "110%" }}
              />
            )}
            {(subrole === "For Forigen Agent" || subrole === "For Local Agent") && (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="uploadImageInput"
                  onChange={handleFileChange}
                />
                <label htmlFor="uploadImageInput">
                  <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor:"black",
                    marginTop:'16px',
                    "&:hover": {
                      color: "black",
                      borderColor:"black",
                    },
                    
                    }}
                    component="span"
                  >
                    Upload image of{" "}
                    {subrole === "For Local Agent" ? (
                      <>NIC Front/Back</>
                    ) : (
                      <>Passport</>
                    )}
                  </Button>
                </label>
                {image && <p>Selected Image: {image.name}</p>}
              </div>
            )}

            
            </>}
            
            <Customtextfield
              label="Email"
              marginTop="16px"
              width={{ lg: "115%", xs: "110%" }}
            />
           
            <Customtextfield
              label="Contact Number"
              marginTop="16px"
              width={{ lg: "115%", xs: "110%" }}
            />

{role === "For Tour Guid"  && (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="uploadImageInput"
                  onChange={handleFileChange}
                />
                <label htmlFor="uploadImageInput">
                  <Button
                  variant="outlined"
                    sx={{
                      color: "black",
                      borderColor:"black",
                      marginTop:'16px',
                      "&:hover": {
                        color: "black",
                        borderColor:"black",
                      },
                    }}
                    component="span"
                  >
                    Upload image of Guide Certificate
                  </Button>
                </label>
                {image && <p>Selected Image: {image.name}</p>}
                <Customtextfield
              label="Experience"
              marginTop="16px"
              width={{ lg: "115%", xs: "110%" }}
            />
            <Customtextfield
              label="Destination"
              marginTop="16px"
              width={{ lg: "115%", xs: "110%" }}
            />
              </div>
              
            )}
            
            <Customtextfield
              label="Password"
              marginTop="16px"
              width={{ lg: "115%", xs: "110%" }}
            />
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
            >
              Register
            </Button>
          </Grid>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
