import React from 'react';
import shipping from '../../assets/shipping.png';
import gift from '../../assets/gift.png';
import contact from '../../assets/contact.png';
import returnp from '../../assets/return.png';
import '../Features/Features.css';

function Features() {
  return (
    <div className='features_container'>
        <div className="feature">
            <img src={shipping} alt="" />
            <h4>FREE SHIPPING</h4>
            <div>
                <p>Free worldwide</p>
                <p>shipping on all</p>
                <p>orders.</p>
            </div>
        </div>
        <div className="feature">
            <img src={returnp} alt="" />
            <h4>30 DAYS RETURN</h4>
            <div>
                <p>No question return</p>
                <p>and easy refound in</p>
                <p>14 days.</p>
            </div>
        </div>
        <div className="feature">
            <img src={gift} alt="" />
            <h4>GIFT CARDS</h4>
            <div>
                <p>Buy gift cards and</p>
                <p>use coupon codes </p>
                <p>easily.</p>
            </div>
        </div>
        <div className="feature">
            <img src={contact} alt="" />
            <h4>CONTACT US!</h4>
            <div>
                <p>Keep in touch via</p>
                <p>email and support</p>
                <p>system.</p>
            </div>
        </div>
    </div>
  )
}

export default Features