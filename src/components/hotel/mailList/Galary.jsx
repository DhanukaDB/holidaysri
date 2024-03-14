import React from 'react';
import img1 from '../../../assets/gimg1.jpg'
import img2 from '../../../assets/gimg2.jpg'
import img3 from '../../../assets/gimg3.jpg'
import img4 from '../../../assets/gimg4.jpg'
import img5 from '../../../assets/gimg5.jpg'
import AOS from 'aos';

function GallerySection() {
  AOS.init({ duration: 1000, once: false});
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
              <img src={img2} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-left">
            <figure className="gallery-image">
            <img src={img3} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-up">
            <figure className="gallery-image">
            <img src={img1} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-right">
            <figure className="gallery-image">
            <img src={img4} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item" data-aos="slide-left">
            <figure className="gallery-image">
            <img src={img5} alt="Gallery image" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
