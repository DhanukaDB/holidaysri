import React, { useState, useEffect } from 'react';
import Img1 from '../../../assets/img1.jpg';
import Img2 from '../../../assets/img2.jpg';
import Img3 from '../../../assets/img3.jpg';
import Img4 from '../../../assets/img4.jpg';
import Logo from '../../../assets/Hslogotow.png';
import './Newlanding.css';
import './Newlanding.css';
import AOS from 'aos';

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
    }, [ timeAutoNext]);

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
        // Declare variables before using them

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
    
    return (
        <div data-aos="fade">
            <header>
                <div className='newnavbar'>
                    <div className='mainlogoo'>
                    <img src={Logo} alt="mainlogoo" />
                    </div>
                    <div>
                    <a href="">Hotels</a>
                    <a href="">Vehicles</a>
                    <a href="">Tour Packages</a>
                    <a href="">Travel Partner</a>
                    <a href="">Tour Guide</a>
                    <a href="">Market Place</a>
                    </div>
                    <div>
                    <a href=""> <span>Sign &nbsp; ∎ &nbsp; Sign Up </span></a>
                    </div>
                    
                </div>
            </header>

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
                                <button>Local Travel Agent</button>
                                <button>Foreign Travel Agent</button>
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
                                <button>Book Vehicle</button>
                                <button>View Products</button>
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
                                <button>Book your Hotel</button>
                                <button>View Hotel</button>
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
                                <button>View Events</button>
                                <button>Hire Guides</button>
                            </div>
                        </div>
                    </div>
        
                    {/* Add more carousel items as needed */}
                </div>
                <div className="thumbnail">
                    {/* Your thumbnail items go here */}
                    <div className="item">
                        <img src={Img2} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Img3} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Img4} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Img1} alt="thumbnail item" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
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

