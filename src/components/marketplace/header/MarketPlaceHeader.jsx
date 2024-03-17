import React from 'react';

function MarketPlaceHeader() {
  return (
    <section className="cta" id="contact" data-aos="slide-right">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Gifts & Souvenirs</p>
          <h2 className="h2 section-title">Discover perfect gifts & souvenirs</h2>
          <p className="section-text">
            All in one marketplace for your desired gift and souvenier items...
          </p>
        </div>
        <a href='/all-marcketplace'>
        <button className="btn btn-secondary">View More</button></a>
      </div>
    </section>
  );
}

export default MarketPlaceHeader;


