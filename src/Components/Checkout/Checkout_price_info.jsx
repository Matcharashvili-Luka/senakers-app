import React from 'react';
import visa from '../../assets/visa.png';
import master from '../../assets/master.png';

function Checkout_price_info({ chosen_product, product_qtn }) {
    const onsubmit = () => {
        alert('DONE!');
    }

  return (
    <div className="checkout_price_info">
        <h1>CHECK<label style={{ color: chosen_product.color}}>OUT</label></h1>
        <div className="personal_info">
            <p className='info_header'>Presonal Info</p>
            <div className="name_lastName section">
                <div className="name">
                    <p>Name</p>
                    <input type="text" placeholder='Luka' />
                </div>
                <div className="last_name">
                    <p>Lastname</p>
                    <input type="text" placeholder='Matcharashvili' />
                </div>
            </div>
            <div className="phone section">
                <p>Phone N</p>
                <input type="number" placeholder='+995 53 53 53' />
            </div>
            <div className='location section'>
                <div className="country">
                    <p>Country</p>
                    <select name="country" id="">
                        <option value="">USA</option>
                        <option value="">Italy</option>
                        <option value="">Spain</option>
                        <option value="">Georgia</option>
                        <option value="">Kanada</option>
                        <option value="">Germany</option>
                        <option value="">France</option>
                        <option value="">UK</option>
                        <option value="">Portugal</option>
                        <option value="">Emirates</option>
                        <option value="">Turkey</option>
                        <option value="">Ukraine</option>
                    </select>
                </div>
                <div className="address">
                    <p>Address</p>
                    <input type="text" placeholder='Tbilisi/Gldani' />
                </div>
            </div>
        </div>
        <div className="calculations">
            <p className='info_header'>Price Calculation</p>
            <div className="price">
                <p>Single Product price: </p>
                <p>${chosen_product.price}</p>
            </div>
            <div className="price">
                <p>Total Product price: </p>
                <p>${product_qtn * chosen_product.price}</p>
            </div>
            <div className="shipping">
                <p>Shipping: </p>
                <p>$39</p>
            </div>
            <div className="total">
                <p>Total: </p>
                <p className='final_price'>${39 + product_qtn * chosen_product.price}</p>
            </div>
        </div>
        <div className="payment_methods">
            <p>Payment method: </p>
            <div className="cards">
                <div className="visa">
                    <input type="checkbox" id="visa" />
                    <label htmlFor='visa'><img src={visa}/></label>
                </div>
                <div className="master">
                    <input type="checkbox" id="master" />
                    <label htmlFor='master'><img src={master}/></label>
                </div>
            </div>
        </div>
        <div className="buy_it_now">
            <button
                onClick={ onsubmit }
                style={{ backgroundColor: chosen_product.color}}
            >PAY AND BUY</button>
        </div>
    </div>
  )
}

export default Checkout_price_info