import React, { useState } from 'react';
import '../Navigation_bar/Navbar.css';

function Navbar({ setTranslate_x }) {
    const [active_product, set_active_produt] = useState(0);
    const product_name = ["AIR", "JORDAN", "BLAZER", "CRATER", "HIPPIE"];

    const find_index_function = (name) => {
        setTranslate_x(product_name.indexOf(name));
    }
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
            {product_name.map((product) => {
                return(
                    <p
                        onClick={() => find_index_function(product)}
                    >
                        {product}
                    </p>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar