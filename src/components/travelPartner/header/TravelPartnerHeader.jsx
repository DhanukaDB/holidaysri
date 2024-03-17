import React from 'react';

function TravelPartnerHeader() {
  return (
    <section className="cta" id="contact" data-aos="slide-right">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Travel Partner</p>
          <h2 className="h2 section-title">Find a perfect partner for travel with.</h2>
          <p className="section-text">
          Easily find your desired partner to travel.
          </p>
        </div>
        <a href='/all-partners'>
        <button className="btn btn-secondary">Find More</button></a>
      </div>
    </section>
  );
}

export default TravelPartnerHeader;

