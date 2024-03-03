import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Customtextfield from './Customtextfield';
import "./login.css";

const LoginForm = () => {
    const underline = {
        underlineOnHover: {
          textDecoration: "none",
          color: "inherit",
          borderBottom: "1px solid transparent",
          transition: "border-bottom 0.3s ease",
        },
      };
  return (
    <div className="loginform" style={{ width: {lg:'300px',xs:'200px'}, marginLeft:{ lg:'50px',xs:'10px'},marginTop:{xs:'30%',lg:'0px'} }}>
      <Typography sx={{ color: 'black', fontSize: '32px', fontWeight: '550' }}>Login</Typography>
      <div>
        <Customtextfield color='black' label="Email" marginTop="8px" width={{ lg: '74%' }} />
        <Customtextfield color='black' label="Password" marginTop="16px" width={{ lg: '74%' }} />
      </div>
      <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                borderColor: "black",
                boxShadow: "none",
                width: {lg:"100%",xs:'100%'},
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
              Login
            </Button>
            <Typography
              sx={{
                color: "black",
                fontSize: {lg:"16px",xs:'15px'},
                marginTop: "8px",
                marginLeft: {lg:"47%",xs:'8px'},
              }}
            >
              New to HolidaySri?{" "}
              <a
                href="/Register"
                style={underline.underlineOnHover}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderBottom = "1px solid #000";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderBottom = "1px solid transparent";
                }}
              >
                {" "}
                Join with us{" "}
              </a>{" "}
            </Typography>
    </div>
  );
}

export default LoginForm;