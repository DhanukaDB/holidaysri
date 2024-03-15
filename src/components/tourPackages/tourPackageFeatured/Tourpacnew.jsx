import React from 'react';
import img1 from '../../../assets/imgpcreg.jpg'
import img2 from '../../../assets/imgpcadv.jpg'
import img3 from '../../../assets/imgpcbch.jpg'
import { IoIosTime } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';

function PackageSection() {
    AOS.init({ duration: 1000 });

  return (
    <section className="package" id="package" data-aos="fade">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Checkout Our Packages</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>
        <ul className="package-list">
          <li data-aos="slide-up">
            <div className="package-card" >
              <figure className="card-banner">
                <img src={img1} alt="reg" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Regular package</h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><IoIosTime /></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><BsFillPeopleFill /></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><FaLocationDot /></ion-icon>
                      <p className="text">Sri Lanka</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>
                  <div className="card-rating">
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                  </div>
                </div>
                <p className="price">
                  $750
                  <span>/ per person</span>
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li data-aos="slide-up">
            <div className="package-card" >
              <figure className="card-banner">
                <img src={img2} alt="reg" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Adventure package</h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><IoIosTime /></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><BsFillPeopleFill /></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><FaLocationDot /></ion-icon>
                      <p className="text">Sri Lanka</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>
                  <div className="card-rating">
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                  </div>
                </div>
                <p className="price">
                  $750
                  <span>/ per person</span>
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li data-aos="slide-up">
            <div className="package-card">
              <figure className="card-banner">
                <img src={img3} alt="reg" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Beach package</h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><IoIosTime /></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><BsFillPeopleFill /></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon><FaLocationDot /></ion-icon>
                      <p className="text">Sri Lanka</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>
                  <div className="card-rating">
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                    <ion-icon><FaStar /></ion-icon>
                  </div>
                </div>
                <p className="price">
                  $750
                  <span>/ per person</span>
                </p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
          
        </ul>
        {/*  <button className="btn btn-primary">View All Packages</button>*/}
       
      </div>
    </section>
  );
}

export default PackageSection;
