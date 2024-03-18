import React from 'react';
import './About.css';
import img1 from '../../assets/Hsllogo.png'
import Nav from '../../pages/Nav/Nav';

const PrivacyPolicy = () => {
    return (
        <>
         <Nav/>
         <div className="about-us-container">
           
           <div className="about-us-header">
               <h2>Privacy <span>Policy</span></h2>
               <p>Privacy Policy for Your Holiday Sri</p>
           </div>

           <div className='main-abt-Content'>  
           <div className="about-us-content">
               <p>
               Privacy Policy for Holidaysri.com pvt ltd
Last updated: [15th march 2024]
At [Tourism Website Name], we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or use our services.
Information Collection and Use:
We may collect personal information, such as your name, email address, contact details, and payment information, when you book tours, subscribe to our newsletter, or interact with our website. We use this information to provide and improve our services, communicate with you, and personalize your experience.
               </p>
               <p>Data Security:
We prioritize the security of your personal information and employ industry-standard measures to safeguard it against unauthorized access, disclosure, alteration, or destruction.
Information Sharing:
We may share your personal information with trusted third-party service providers to facilitate bookings, process payments, or analyze website usage. However, we do not sell or rent your information to third parties for marketing purposes.</p>
               <p>Cookies and Tracking Technologies:
Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can adjust your browser settings to manage cookies or opt-out of certain tracking technologies.</p>
               <p>Third-Party Links:
Our website may contain links to third-party websites or services that are not operated or controlled by us. We are not responsible for the privacy practices or content of these third-party websites.</p>
           
           <p>Data Retention:
We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
           <p>Changes to this Privacy Policy:
We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
           <p>Contact Us:
If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at 
Info@holidaysri.com.
By using our website, you consent to the terms of this Privacy Policy. Please review this Privacy Policy periodically for any updates or changes.
[Holidaysri.com pvt ltd]</p>
           </div>
           <img src={img1} alt="About Us" />
           </div>
       </div>
        </>
        
    );
};

export default PrivacyPolicy;
