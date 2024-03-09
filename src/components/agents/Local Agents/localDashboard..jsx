import React, { useState } from 'react';

const LocalAgentDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Hotels');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={() => handleOptionSelect('Hotels')}>Hotels</button>
        <button onClick={() => handleOptionSelect('Vehicle')}>Vehicle</button>
        <button onClick={() => handleOptionSelect('Partners')}>Partners</button>
        <button onClick={() => handleOptionSelect('Guides and Events')}>Guides and Events</button>
        <button onClick={() => handleOptionSelect('Products')}>Products</button>
        <button onClick={() => handleOptionSelect('Earns')}>Earns</button>
      </div>
      <div className="main-content">
        {/* Render content based on selectedOption */}
        {selectedOption === 'Hotels' && <HotelSection />}
        {selectedOption === 'Vehicle' && <VehicleSection />}
        {selectedOption === 'Partners' && <PartnersSection />}
        {selectedOption === 'Guides and Events' && <GuidesEventsSection />}
        {selectedOption === 'Products' && <ProductsSection />}
        {selectedOption === 'Earns' && <EarnsSection />}
      </div>
    </div>
  );
};

const HotelSection = () => {
  return (
    <div>
      {/* Hotel section content */}
      <h2>Hotels Section</h2>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const VehicleSection = () => {
  return (
    <div>
      {/* Vehicle section content */}
      <h2>Vehicle Section</h2>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const PartnersSection = () => {
  return (
    <div>
      {/* Partners section content */}
      <h2>Partners Section</h2>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const GuidesEventsSection = () => {
  return (
    <div>
      {/* Guides and Events section content */}
      <h2>Guides and Events Section</h2>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const ProductsSection = () => {
  return (
    <div>
      {/* Products section content */}
      <h2>Products Section</h2>
      {/* Add more components and functionalities here */}
    </div>
  );
};

const EarnsSection = () => {
  return (
    <div>
      {/* Earns section content */}
      <h2>Earns Section</h2>
      {/* Add more components and functionalities here */}
    </div>
  );
};

export default LocalAgentDashboard;