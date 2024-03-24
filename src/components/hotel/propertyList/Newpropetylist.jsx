import React, { useEffect } from 'react';
import "./propertyList.css";
import { FaHotel } from "react-icons/fa6";
import { MdApartment, MdVilla, MdCabin } from "react-icons/md";
import { GiVillage } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";

function ProgressBar() {
    useEffect(() => {
        const valueDisplaycounts = document.querySelectorAll(".upnums");
        const contInterval = 4000;

        valueDisplaycounts.forEach((valueDisplaycount) => {
            let startValue = 0;
            const endValue = parseInt(valueDisplaycount.getAttribute("data-val"));

            const duration = Math.floor(contInterval / endValue);
            const counter = setInterval(() => {
                startValue += 1;
                valueDisplaycount.textContent = startValue;
                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration);

            return () => clearInterval(counter);
        });
    }, []);

    return (
        <div className='myProgressBar' id='progressbarAvailable'>
            <div className='honecontentdiv'>
            <h1 className="homeTitlen">Browse by property type :</h1>
            <div className='myProgressBar-wrapper' data-aos="fade">

                <Link to={`/all-hotels?category=${"hotels"}`} className='myProgressBar-container'>
                <div className='progbacimg'>
                    {/* <div><img src='https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=' /></div> */}
                    <div className='forPlussmark'><span className='upnums' data-val="233">000</span><p>+</p></div>
                    <span className='upnumsText'>Hotels</span>
                </div>
                </Link>

                <Link to={`/all-hotels?category=${"Appartments"}`} className='myProgressBar-container'>
                <div >
                {/* <div><img src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg' /></div> */}
                    <div className='forPlussmark'><span className='upnums' data-val="2331">000</span><p>+</p></div>
                    <span className='upnumsText'>Apartments</span>
                </div>
                </Link>

                <Link to={`/all-hotels?category=${"Resorts"}`} className='myProgressBar-container'>
                <div>
                {/* <div><img src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg' /></div> */}
                    <div className='forPlussmark'><span className='upnums' data-val="598">00</span><p>+</p></div>
                    <span className='upnumsText'>Resorts</span>
                </div>
                </Link>

                <Link to={`/all-hotels?category=${"Villas"}`} className='myProgressBar-container'>
                <div>
                {/* <div><img src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg' /></div> */}
                    <div className='forPlussmark'><span className='upnums' data-val="432">00</span><p>+</p></div>
                    <span className='upnumsText'>Villas</span>
                </div>
                </Link>

                <Link to={`/all-hotels?category=${"Banglalows"}`} className='myProgressBar-container'>
                <div>
                {/* <div><img src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg' /></div> */}
                    <div className='forPlussmark'><span className='upnums' data-val="123">00</span><p>+</p></div>
                    <span className='upnumsText'>Banglalows</span>
                </div>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default ProgressBar;
