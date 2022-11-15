import React from 'react';
import '../Navigation_bar/Navbar.css';

function Navbar() {
  return (
    <div className="navbar_container">
        <div className="upper_section">
            <div></div>
            <div className="navbar_logo">
                <p>.sneakers</p>
            </div>
            <div className="limited_offer_logo">
                <p className="limited_offer_text">Limited Offer!</p>
                <i class="fa-solid fa-fire"></i>
            </div>
        </div>
        <div className="lower_section">
            <p>AIR</p>
            <p>JORDAN</p>
            <p>BLAZER</p>
            <p>CRATER</p>
            <p>HIPPIE</p>
        </div>
    </div>
  )
}

export default Navbar