import React, { useState } from 'react';
import { main_page_data } from '../../Data/Data';
import Lower_navbar from '../Navigation_bar/Lower_navbar';
import '../Product/Product.css';
import Product_specs from './Product_specs';

function Product({ translate_x, setTranslate_x }) {
    const[check_type_of_product, set_check_type_of_product] = useState(false);

    const set_color = () => {
        set_check_type_of_product(!check_type_of_product);
    }

  return (
    <div className='product_main_container'>
        <Lower_navbar 
            setTranslate_x={setTranslate_x}
        />
        <div 
            className='product_container'
            style={{ transform: `translateX(${-100 * translate_x}vw)` }}
        >
            {main_page_data.map((element) => {
                return(
                    <div className='product'>
                        <div className='images'>
                            <img src={check_type_of_product ? element.additional_img : element.img} alt="" />
                        </div>
                        <div className="product_info">
                            <div className="product_text_info">
                                <h1>{element.text}</h1>
                                <h4>${element.price}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deserunt ullam maxime! Minima, distinctio. Voluptatum eaque dolorem assumenda tempore accusamus repellendus maxime, cumque excepturi nisi quisquam nobis! Qui, eos ea.</p>
                            </div>
                            <Product_specs 
                                element={element}
                                set_color={set_color}
                                check_type_of_product={check_type_of_product}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Product;