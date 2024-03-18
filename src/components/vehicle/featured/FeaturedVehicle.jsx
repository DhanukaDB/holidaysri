import { motion, useScroll, useTransform } from "framer-motion";
import "./featuredVehicle.css";
import { useRef } from "react";
import AOS from 'aos';

const FeaturedVehicle = () => {
  AOS.init({ duration: 1000 });

  return (
    <div
      className="car-featured" data-aos="fade-left"
    >
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1488228044901-ba509ffe12a8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>With Driver</h1>
          <h2>123 vehicles</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Without Driver</h1>
          <h2>533 vehicles</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1615764812975-751f90d0b867?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Airport Taxi</h1>
          <h2>532 taxis</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVehicle;
