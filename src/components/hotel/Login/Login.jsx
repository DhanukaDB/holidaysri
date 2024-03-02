import React from "react";
import { Typography, Grid } from "@mui/material";
import Customtextfield from "./Customtextfield";
import LoginBackgroundvideo from "../../../assets/Login.gif";
import "./login.css";

const Login = ({ onClose }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "450px",
    borderRadius: '30px',
    backgroundImage: `url(${LoginBackgroundvideo})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const innerContainerStyle = {
    position: "absolute",
    top: 0,
    padding: "32px",
    left: 0,
    width: "100%",
    height: "100%",
  };
  
  return (
    <div style={containerStyle}>
        

      <div style={innerContainerStyle}>
        <div className="loginform" width={{lg:'300px',marginLeft:'50px'}}>
          <Typography sx={{ color: 'black', fontSize: '32px' ,fontWeight:'550'}}>Login</Typography>
          <div>
            <Customtextfield color='black' label="Email" marginTop="8px" width={{ lg: '74%' }} />
            <Customtextfield color='black' label="Password" marginTop="16px" width={{ lg: '74%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
