import React, { useState, useEffect } from 'react';
import Img1 from '../../../assets/img1.jpg';
import Img2 from '../../../assets/img2.jpg';
import Img3 from '../../../assets/img3.jpg';
import Img4 from '../../../assets/img4.jpg';
import Logo from '../../../assets/Hsllogo.png';
import './Newlanding.css';
import AOS from 'aos';
import { Link } from "react-scroll";
import { IoMdLogIn } from "react-icons/io";

function Newlanding() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [timeRunning, setTimeRunning] = useState(3000);
    const [timeAutoNext, setTimeAutoNext] = useState(7000);
    let runTimeOut, runNextAuto;

    useEffect(() => {
        const runNextAuto = setTimeout(() => {
            next();
        }, timeAutoNext);

        return () => clearTimeout(runNextAuto);
    }, [timeAutoNext]);

    const next = () => {
        showSlider('next');
    }

    const prev = () => {
        showSlider('prev');
    }

    const showSlider = (type) => {
        let SliderItemsDom = document.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        const carouselDom = document.querySelector('.carousel');
        const SliderDom = carouselDom.querySelector('.carousel .list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');


        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            next();
        }, timeAutoNext);
    }

    const handleSignout = () => {
        // Remove userRole and authToken from localStorage
        localStorage.removeItem("authToken");
        localStorage.removeItem("userRole");
        // Redirect to login page or any other page after signout
        window.location.href = '/login';
    }

    // Check if authToken and userRole exist in localStorage
    const authToken = localStorage.getItem("authToken");
    const userRole = localStorage.getItem("userRole");

    return (
        <div className='mainhomebg' data-aos="fade">
            <div className='bgnheader'>
                <div className='newnavbar'>
                    <div className='mainlogoo'>
                        <img src={Logo} alt="mainlogoo" />
                    </div>
                    <div>
                        <Link to="deswithhomecontainer" spy={true} smooth={true} duration={500} className="navButton">Destinations</Link>
                        <Link to="hotels" spy={true} smooth={true} duration={500} className="navButton">Hotels</Link>
                        <Link to="tour-packages" spy={true} smooth={true} duration={500} className="navButton">Tour Packages</Link>
                        <Link to="vehicles" spy={true} smooth={true} duration={500} className="navButton">Vehicles</Link>
                        <Link to="travel-partner" spy={true} smooth={true} duration={500} className="navButton">Travel Partner</Link>
                        <Link to="tour-guide" spy={true} smooth={true} duration={500} className="navButton">Tour Guide</Link>
                        <Link to="market-place" spy={true} smooth={true} duration={500} className="navButton">Market Place</Link>
                        <Link to="CT-Gallery" spy={true} smooth={true} duration={500} className="navButton">Contact</Link>
                        <Link to="CT-Galleryto" spy={true} smooth={true} duration={500} className="navButton">Gallery</Link>
                        <a href="/about" spy={true} smooth={true} duration={500} className="navButton">About</a>
                    </div>
                    <div>
                        {/* Conditionally render the sign-in button */}
                        {!authToken && !userRole && <a href="/login"> <span>Sign in <IoMdLogIn /></span></a>}
                        {/* Render signout button if authToken and userRole exist */}
                        {authToken && userRole && <button onClick={handleSignout}>Sign Out</button>}
                    </div>

                </div>
            </div>

            <div className="carousel">
                <div className="list">
                    {/* Your carousel items go here */}
                    <div className="item">
                        <img src={Img1} alt="carousel item" />
                        <div className="content">
                            <div className="author">Sri Lanka</div>
                            <div className="title">Welcome To..</div>
                            <div className="topic">HOLIDAY SRI</div>
                            <div className="des">Be a travel agent and earn money!Travel is the act of moving from one place to another, typically for leisure, exploration, business, or cultural exchange. It is a fundamental aspect of human experience, dating back to ancient times when people traversed vast distances on foot, by animal, or by sea to discover new lands, trade goods, or establish connections with distant communities.</div>
                            <div className="buttons">
                                <a href="/local-dashboard">Local Travel Agent</a>
                                <a href="/foreign-dashboard">Foreign Travel Agent</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Img2} alt="carousel item" />
                        <div className="content">
                            <div className="author">Sri Lanka</div>
                            <div className="title">Welcome To..</div>
                            <div className="topic">HOLIDAY SRI</div>
                            <div className="des">Travel is the act of moving from one place to another, typically for leisure, exploration, business, or cultural exchange. It is a fundamental aspect of human experience, dating back to ancient times when people traversed vast distances on foot, by animal, or by sea to discover new lands, trade goods, or establish connections with distant communities.</div>
                            <div className="buttons">
                                <a>Book Vehicle</a>
                                <a>View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Img3} alt="carousel item" />
                        <div className="content">
                            <div className="author">Sri Lanka</div>
                            <div className="title">Welcome To..</div>
                            <div className="topic">HOLIDAY SRI</div>
                            <div className="des">Travel is the act of moving from one place to another, typically for leisure, exploration, business, or cultural exchange. It is a fundamental aspect of human experience, dating back to ancient times when people traversed vast distances on foot, by animal, or by sea to discover new lands, trade goods, or establish connections with distant communities.</div>
                            <div className="buttons">
                                <a>Book your Hotel</a>
                                <a>View Hotel</a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Img4} alt="carousel item" />
                        <div className="content">
                            <div className="author">Sri Lanka</div>
                            <div className="title">Welcome To..</div>
                            <div className="topic">HOLIDAY SRI</div>
                            <div className="des">Travel is the act of moving from one place to another, typically for leisure, exploration, business, or cultural exchange. It is a fundamental aspect of human experience, dating back to ancient times when people traversed vast distances on foot, by animal, or by sea to discover new lands, trade goods, or establish connections with distant communities.</div>
                            <div className="buttons">
                                <a>View Events</a>
                                <a>Hire Guides</a>
                            </div>
                        </div>
                    </div>

                    {/* Add more carousel items as needed */}
                </div>
                <div className="thumbnail">
                    {/* Your thumbnail items go here */}
                    <div className="item" onClick={next}>
                        <img src={Img2} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Book Vehicle</div>
                            <div className="description">View Products</div>
                        </div>
                    </div>
                    <div className="item" onClick={next}>
                        <img src={Img3} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Book your Hotel</div>
                            <div className="description">View Hotel</div>
                        </div>
                    </div>
                    <div className="item" onClick={next}>
                        <img src={Img4} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">View Events</div>
                            <div className="description">Hire Guides</div>
                        </div>
                    </div>
                    <div className="item" onClick={next}>
                        <img src={Img1} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Local Travel Agent</div>
                            <div className="description">Foreign Travel Agent</div>
                        </div>
                    </div>
                    {/* Add more thumbnail items as needed */}
                </div>
                <div className="arrows">
                    <button id="prev" onClick={prev}>{'<'}</button>
                    <button id="next" onClick={next}>{'>'}</button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
}

export default Newlanding;
