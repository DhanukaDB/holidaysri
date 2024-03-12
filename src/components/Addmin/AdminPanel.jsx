import React, { useEffect, useState } from 'react';
import Hsllogo from '../../assets/Hsllogo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHotel, FaCar, FaPeopleArrows, FaMoneyBillTransfer} from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import './Adminstyl.css';


const AdmminPanel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [selectedOption, setSelectedOption] = useState('Hotels');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebarAdmin">
        <div className='logobox'>
        <img className="logoimg" src={Hsllogo} alt="" />
        </div>
        <button onClick={() => handleOptionSelect('Hotels')}><FaHotel />&nbsp; Hotels</button>
        <button onClick={() => handleOptionSelect('Vehicle')}><FaCar />&nbsp; Vehicle</button>
        <button onClick={() => handleOptionSelect('Partners')}><FaPeopleArrows />&nbsp; Partners</button>
        <button onClick={() => handleOptionSelect('Guides and Events')}><MdEventAvailable />&nbsp; Guides and Events</button>
        <button onClick={() => handleOptionSelect('Products')}><IoFastFoodSharp />&nbsp; Products</button>
        <button onClick={() => handleOptionSelect('Earns')}><FaMoneyBillTransfer />&nbsp; Earns</button>
      </div>
        
      <div className='Adminback'>
        <div className='dsbHeader'>
            <h2>Admin Panel</h2>
        </div>

        <div className="main-content">
            {selectedOption === 'Hotels' && <HotelSection />}
            {selectedOption === 'Vehicle' && <VehicleSection />}
            {selectedOption === 'Partners' && <PartnersSection />}
            {selectedOption === 'Guides and Events' && <GuidesEventsSection />}
            {selectedOption === 'Products' && <ProductsSection />}
            {selectedOption === 'Earns' && <EarnsSection />}
        </div>
      </div>
    </div>
  );
};

const HotelSection = () => {
  return (
    <div data-aos="zoom-in">
      {/* Hotel section content */}
      <h2>Hotels Section :</h2>

      <section className='v-section'>
      <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Add Hotels</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>Add</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>View Hotels</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>

                    </div>

      </section>

      {/* Add more components and functionalities here */}
    </div>
  );
};

const VehicleSection = () => {
  return (
    <div data-aos="zoom-in">
      {/* Vehicle section content */}
      <h2>Vehicle Section :</h2>

      <section className='v-section'>
      <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Add Vehicles</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>Add</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>View Vehicles</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>
                                              
                    </div>

      </section>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const PartnersSection = () => {
  return (
    <div data-aos="zoom-in">
      {/* Partners section content */}
      <h2>Partners Section :</h2>

      <section className='v-section'>
      <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Add Partners</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>Add</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>View Partners</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>
                                              
                    </div>

      </section>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const GuidesEventsSection = () => {
  return (
    <div data-aos="zoom-in">
      {/* Guides and Events section content */}
      <h2>Guides and Events Section :</h2>
      <section className='v-section'>
      <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Add Guides</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>Add</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>View Guides</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Add Events</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>Add</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>View Events</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>
                                              
                    </div>

      </section>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const ProductsSection = () => {
  return (
    <div data-aos="zoom-in">
      {/* Products section content */}
      <h2>Products Section :</h2>
      <section className='v-section'>
      <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Add Products</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>Add</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>View Products</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>
                                              
                    </div>

      </section>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const EarnsSection = () => {
  return (
    <div data-aos="zoom-in">
      {/* Earns section content */}
      <h2>Earns Section :</h2>
      <section className='v-section'>
      <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>01</h2>
                                
                                <h3>Total Earns</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>Amount</h3>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit dolor repellat ipsam natus rerum autem quis</h5>   
                                <a href='#'>View</a>
                                </div>
                        </div>
                                              
                    </div>

      </section>
      {/* Add more components and functionalities here */}
    </div>
  );
};

export default AdmminPanel;