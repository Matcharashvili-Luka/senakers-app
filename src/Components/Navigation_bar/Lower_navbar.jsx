import React, { useState } from 'react';
import '../Navigation_bar/Navbar.css';

function Lower_navbar({ setTranslate_x }) {
    const product_name = ["BLAZER", "AIR", "CRATER", "HIPPIE", "JORDAN"];
    const[active_nav_item, set_active_nav_item] = useState(0);

    const find_index_function = (name) => {
        setTranslate_x(product_name.indexOf(name));
    }
    const activate_nav_bar_item = (name) => {
        set_active_nav_item(product_name.indexOf(name));
    } 
    const handle_click = (item_name) => {
        find_index_function(item_name);
        activate_nav_bar_item(item_name);
    }

  return (
    <div className="lower_section">
        {product_name.map((product) => {
            return(
                <p
                    onClick={() => handle_click(product)}
                    key={product}
                    className={ product_name.indexOf(product) === active_nav_item ? 'active_nav_item' : 'nav_item'}
                >
                    {product}
                </p>
            )
        })}
    </div>
  )
}

export default Lower_navbar