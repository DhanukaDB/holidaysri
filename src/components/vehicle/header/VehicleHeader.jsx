import React from 'react';
import AOS from 'aos';

function VehicleHeader() {
  AOS.init({ duration: 1000 });
  return (
    <section className="cta" id="contact" data-aos="slide-left">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Rent a vehicle</p>
          <h2 className="h2 section-title">Rent a vehicle for any adventure.</h2>
          <p className="section-text">
          Great deals at great prices, from the biggest car hire companies...
          </p>
        </div>
        <button className="btn btn-secondary">View More</button>
      </div>
    </section>
  );
}

export default VehicleHeader;
