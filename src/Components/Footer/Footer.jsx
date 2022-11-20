import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer_section'>
        <div className='footer_container'>
            <div className="left">
                <p className='ul_list_header'>About Us</p>
                <ul className='footer_ul_list'>
                    <li>Company</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Stores</li>
                </ul>
            </div>
            <div className="middle_left">
                <p className='ul_list_header'>Useful Links</p>
                <ul className='footer_ul_list'>
                    <li>Support</li>
                    <li>Refund</li>
                    <li>FAQ</li>
                    <li>Feedback</li>
                    <li>Stories</li>
                </ul>
            </div>
            <div className="middle_right">
                <p className='ul_list_header'>Products</p>
                <ul className='footer_ul_list'>
                    <li>Air Force</li>
                    <li>Air Jordan</li>
                    <li>Blazer</li>
                    <li>Crater</li>
                    <li>Hippie</li>
                </ul>
            </div>
            <div className="right">
                <p>Subscribe to our newsletter</p>
                <div className="email_info">
                    <input type="text" placeholder='your@email.com'/>
                    <button>Join!</button>
                </div>
                <p>Follow Us</p>
            </div>
        </div>
        <div className="creator">
            <p>Created By</p>
            <p>Luka Matcharashvili</p>
        </div>
    </div>
  )
}

export default Footer