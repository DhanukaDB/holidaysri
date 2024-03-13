import React from 'react';
import img1 from '../../../assets/feimg1.jpg'
import img2 from '../../../assets/feimg2.jpg'
import img3 from '../../../assets/feimg3.jpg'
import { FaStar } from "react-icons/fa";

function PopularDestinations() {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">hOLIDAY SRI</p>
        <h2 className="h2 section-title">Discover your perfect escape</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare mollitia tenetur, aptent.
        </p>
        <ul className="popular-list">
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={img1} alt="kandy" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                </div>
                <a href='/destinations'>
                  <p className="card-subtitle">
                    <a href="#">123 properties</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">Kandy</a>
                  </h3>
                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                </p>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="popular-card">
              <figure className="card-img">
              <img src={img2} alt="Gale" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                </div>
                <a href='/destinations'>
                <p className="card-subtitle">
                  <a href="#">256 properties</a>
                </p>
                <h3 className="h3 card-title">
                  <a href="#">Galle</a>
                </h3>
                <p className="card-text">
                  Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                </p>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="popular-card">
              <figure className="card-img">
              <img src={img3} alt="Colombo" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                  <ion-icon name="star"><FaStar /></ion-icon>
                </div>
                <a href='/destinations'>
                <p className="card-subtitle">
                  <a href="#">512 properties</a>
                </p>
                <h3 className="h3 card-title">
                  <a href="#">Colombo</a>
                </h3>
                <p className="card-text">
                  Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                </p>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <button className="btn btn-primary">More destination</button>
      </div>
    </section>
  );
}

export default PopularDestinations;
