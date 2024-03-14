import React, { useEffect } from 'react';
import "./propertyList.css";
import { FaHotel } from "react-icons/fa6";
import { MdApartment, MdVilla, MdCabin } from "react-icons/md";
import { GiVillage } from "react-icons/gi";

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
            <div className='myProgressBar-wrapper' data-aos="slide-up">

                <div className='myProgressBar-container'>
                    <i><FaHotel /></i>
                    <div className='forPlussmark'><span className='upnums' data-val="233">000</span><p>+</p></div>
                    <span className='upnumsText'>Hotels</span>
                </div>
                <div className='myProgressBar-container'>
                    <i><MdApartment /></i>
                    <div className='forPlussmark'><span className='upnums' data-val="2331">000</span><p>+</p></div>
                    <span className='upnumsText'>Apartments</span>
                </div>
                <div className='myProgressBar-container'>
                    <i><GiVillage /></i>
                    <div className='forPlussmark'><span className='upnums' data-val="598">00</span><p>+</p></div>
                    <span className='upnumsText'>Resorts</span>
                </div>
                <div className='myProgressBar-container'>
                    <i><MdVilla /></i>
                    <div className='forPlussmark'><span className='upnums' data-val="432">00</span><p>+</p></div>
                    <span className='upnumsText'>Villas</span>
                </div>
                <div className='myProgressBar-container'>
                    <i><MdCabin /></i>
                    <div className='forPlussmark'><span className='upnums' data-val="123">00</span><p>+</p></div>
                    <span className='upnumsText'>Cabins</span>
                </div>

            </div>
            </div>
        </div>
    );
}

export default ProgressBar;
