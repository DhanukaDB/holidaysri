import React from "react";
import "./Banner.css";
import { Grid } from '@mui/material';

export default function Banner() {
 

  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/iplus/video/upload/v1660387289/test/Sri_Lanka_-_Heart_of_the_Indian_Ocean_online-video-cutter.com_xfpsaq.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
      <Grid  display={{lg:'block',xs:'none'}}>
      <h2 className="BannerHeader" >
      Discover Paradise: Embark on a Journey Through Sri Lanka's Enchanting Beauty        </h2>
        </Grid>
        <Grid  display={{lg:'none',xs:'block'}}>
      
        </Grid>
      </div>
    </div>
  );
}
