import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Customtextfield from './Customtextfield';
import "./login.css";
import { signInWithGooglePopup } from '../Login/firebase'; // Import your Firebase authentication setup
import axois from "axios";

const LoginForm = () => {
    const underline = {
        underlineOnHover: {
            textDecoration: "none",
            color: "inherit",
            borderBottom: "1px solid transparent",
            transition: "border-bottom 0.3s ease",
        },
    };

    const handleGoogleSignIn = async () => {
        try {
            const response = await signInWithGooglePopup();
            console.log(response);
            window.location.href = '/all-locations';
        } catch (error) {
            console.error("Error signing in with Google", error);
            // Handle error
        }
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        )) {
            alert("Invalid email");
            return;
        }

        const newUser = {
            email,
            password,
        };

        try {
            const res = await axois.post("http://localhost:8000/api/auth/userlogin", newUser);
            alert("Login Success");

            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("userRole", res.data.user.role);

            setEmail("");
            setPassword("");

            window.location = "/";
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div className="loginform" style={{ width: { lg: '300px', xs: '200px' }, marginLeft: { lg: '50px', xs: '10px' }, marginTop: { xs: '30%', lg: '0px' } }}>
            <Typography sx={{ color: 'black', fontSize: '32px', fontWeight: '550' }}>Login</Typography>
            <form onSubmit={sendData}>
                <div>
                    <Customtextfield color='black' label="Email" marginTop="8px" width={{ lg: '74%', xs: '100%' }} onChange={(e) => setEmail(e.target.value)} />
                    <Customtextfield color='black' label="Password" marginTop="16px" width={{ lg: '74%', xs: '100%' }} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                        borderRadius: "30px",
                        borderColor: "black",
                        boxShadow: "none",
                        width: { lg: "100%", xs: '100%' },
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
            </form>
            <Button
                variant="outlined"
                size="medium"
                sx={{
                    borderRadius: "30px",
                    borderColor: "black",
                    boxShadow: "none",
                    width: { lg: "100%", xs: '100%' },
                    color: "black",
                    marginTop: "10px",
                    height: "48px",
                    "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        borderColor: "black",
                        boxShadow: "none",
                    },
                }}
                onClick={handleGoogleSignIn}
            >
                Sign in with Google
            </Button>
            <Typography
                sx={{
                    color: "black",
                    fontSize: { lg: "16px", xs: '15px' },
                    marginTop: "8px",
                    marginLeft: { lg: "47%", xs: '8px' },
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