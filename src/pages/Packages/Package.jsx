import React, { useState, useEffect } from "react";

import { IoIosTime } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import Nav from '../Nav/Nav';
import axios from "axios";
import {
    Grid,
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    CircularProgress
  } from "@mui/material";
import { useParams } from "react-router-dom";
function Package() {
    AOS.init({ duration: 1000 });



    const [partners, setPartners] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        async function getPartners() {
          try {
            const res = await axios.get(
              "https://holidaysri-backend.onrender.com/package/"
            );
            setPartners(res.data);
            setLoding(false);
          } catch (error) {
            console.error("Error fetching partners:", error);
            setLoding(false);
            alert("Error fetching partners: " + error.message);
          }
        }
        getPartners();
      }, []);


  return (
    <>
    <Nav/>
    <Grid
      container
      sx={{
        backgroundImage: `url(${"https://res.cloudinary.com/iplus/image/upload/v1710580395/christoph-theisinger-9PPYa3LK6II-unsplash_frxn5m.jpg"})` ,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        minHeight: "100vh",
        paddingBottom: "16px",
      }}
    >
<section className="package" id="package" data-aos="fade">
      <div className="container">
        <Grid sx={{marginBottom:'24px',marginTop:{lg:'-60px',xs:'-30px'}}}>
        <h2 className="h2 section-title"> Packages</h2>
        </Grid>
       
       
        <ul className="package-list">
         
        {partners.length > 0 ? (
              partners.map((partner, index) => (
                <li data-aos="slide-up">
            <div className="package-card" >
              <figure className="card-banner">
                <img src={partner.images} alt="reg" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">{partner.packageName}</h3>
                <p className="card-text">
                {partner.description}
                </p>
                <p className="card-text">
                {partner.activities}
                </p>
                <ul className="card-meta-list">
                  
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><BsFillPeopleFill /></ion-icon>
                      <p className="text">{partner.category}</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><FaLocationDot /></ion-icon>
                      <p className="text">{partner.location}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                
                <p className="price">
                 {partner.price}
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
              ))
            ) : (
              <>
                <Grid item xs={12} lg={8}>
                    {loading?<>
                    <CircularProgress sx={{color:'green'}}/>
                    </>:<>
                    <Box
                    marginTop={{ lg: "20px", xs: "0px" }}
                    sx={{
                      marginLeft: { lg: "0%", sx: "0%" },
                      width: { lg: "auto", sx: "280px" },
                      transition: "transform 0.3s",
                      cursor: "default",
                    }}
                  >
                    <Card
                      sx={{
                        borderColor: "black",
                        borderRadius: "30px",
                        backgroundColor: "rgba(255,255,255, 0.3)",
                        padding: "32px",
                      }}
                      variant="outlined"
                    >
                      <Typography>
                        Currently No Packages 
                      </Typography>
                    </Card>
                  </Box>
                    </>}
                 
                </Grid>
              </>
            )}
        </ul>  
      </div>
    </section>


    </Grid>
    
    </>
    
  );
}

export default Package;
