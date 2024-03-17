import React from 'react';

function TourGuideHeader() {
  return (
    <section className="cta" id="contact" data-aos="slide-left">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Tour Guid</p>
          <h2 className="h2 section-title">Find the best tour guide.</h2>
          <p className="section-text">
          Find the best ever tour guide for your travel experince.
          </p>
        </div>
        <a href='/all-tourguides'>
        <button className="btn btn-secondary">Find More</button></a>
      </div>
    </section>
  );
}

export default TourGuideHeader;

