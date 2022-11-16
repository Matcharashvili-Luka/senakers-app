import React from 'react';
import '../Navigation_bar/Navbar.css';

function Lower_navbar({ setTranslate_x }) {
    const product_name = ["BLAZER", "AIR", "CRATER", "HIPPIE", "JORDAN"];

    const find_index_function = (name) => {
        setTranslate_x(product_name.indexOf(name));
    }

  return (
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
  )
}

export default Lower_navbar