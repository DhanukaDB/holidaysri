import React from 'react';
import './About.css';
import img1 from '../../assets/Hsllogo.png'

const PrivacyPolicy = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-header">
                <h2>Privacy <span>Policy</span></h2>
                <p>Privacy Policy for Your Holiday Sri</p>
            </div>

            <div className='main-abt-Content'>  
            <div className="about-us-content">
                <p>Log files are a standard method employed by Holiday Sri to record visitors' activities on our website. These files log visitors when they visit the website. The information collected by log files may include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track users' movement around the site, and gather demographic information. IP addresses and other such information are not linked to any personally identifiable information.</p>
                <p>If you have any questions or concerns about our Privacy Policy, please feel free to contact us. You may reach us via email at [Your Email Address], or by mail at [Your Mailing Address]. We value your feedback and are committed to addressing any inquiries you may have regarding the collection, use, and disclosure of your personal information.</p>
                <p>One of our distinctive features is the integration of an agent referral system. We believe in rewarding our loyal users and empowering our agents. Users can enter an agent's referral code to unlock exclusive discounts, while agents receive specific cash incentives.</p>
                <p>Join us on this exciting journey and let us make your travel dreams a reality!</p>
            </div>
            <img src={img1} alt="About Us" />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
