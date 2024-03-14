import React from 'react';
import img1 from '../../../assets/img1.jpg'

function GallerySection() {
  return (
    <section className="gallery" id="gallery" data-aos="fade">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photos From Travellers</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>
        <ul className="gallery-list">
          <li className="gallery-item" data-aos="slide-right">
            <figure className="gallery-image">
              <img src={img1} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-left">
            <figure className="gallery-image">
            <img src={img1} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-up">
            <figure className="gallery-image">
            <img src={img1} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-right">
            <figure className="gallery-image">
            <img src={img1} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-left">
            <figure className="gallery-image">
            <img src={img1} alt="Gallery image" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
