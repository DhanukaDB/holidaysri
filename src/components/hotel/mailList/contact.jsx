import React from 'react';

function CTASection() {
  return (
    <section className="cta" id="contact" data-aos="slide-left">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Call To Action</p>
          <h2 className="h2 section-title">Ready For Unforgettable Travel. Remember Us!</h2>
          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
          </p>
        </div>
        <a href='https://api.whatsapp.com/send?phone=94765345234'>
        <button className="btn btn-secondary">Contact Us!</button>
        </a>
      </div>
    </section>
  );
}

export default CTASection;
