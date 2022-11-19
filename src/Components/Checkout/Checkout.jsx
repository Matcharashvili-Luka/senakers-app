import React from 'react';
import '../Checkout/Checkout.css';
import Checkout_price_info from './Checkout_price_info';
import Checkout_product_info from './Checkout_product_info';

function Checkout({ chosen_product, img_idx, product_size, product_qtn, open_check_out, set_open_check_out }) {
  return (
    <div className='checkout_container' id={open_check_out ? 'open_checkout_container' : 'closed_checkout_container'}>
        <i 
            class="fa-solid fa-circle-xmark"
            onClick={() => set_open_check_out(false)}
        ></i>
        <Checkout_product_info
            chosen_product={chosen_product}
            img_idx={img_idx}
            product_size={product_size}
            product_qtn={product_qtn}
        />
        <Checkout_price_info 
            chosen_product={chosen_product}
        />
    </div>
  )
}

export default Checkout