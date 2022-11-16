import React from 'react';
import '../Navigation_bar/Navbar.css';
import Lower_navbar from './Lower_navbar';

function Navbar({ setTranslate_x }) {
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
        <Lower_navbar 
            setTranslate_x={setTranslate_x}
        />
    </div>
  )
}

export default Navbar