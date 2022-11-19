import React, { useState } from 'react';
import { main_page_data } from '../../Data/Data';
import Checkout from '../Checkout/Checkout';
import Lower_navbar from '../Navigation_bar/Lower_navbar';
import '../Product/Product.css';
import Product_specs from './Product_specs';

function Product({ translate_x, setTranslate_x }) {
    const[chosen_product, set_chosen_product] = useState(main_page_data[0]);
    const[img_idx, set_img_idx] = useState(0);
    const[product_size, set_product_size] = useState('M');
    const[product_qtn, set_product_qtn] = useState(1);
    const[open_check_out, set_open_check_out] = useState(false);

  return (
    <div className='product_main_container' id='product_section'>
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
                            <img src={element.product[img_idx].img} alt="" />
                        </div>
                        <div className="product_info">
                            <div className="product_text_info">
                                <h1>{element.text}</h1>
                                <h4>${element.price}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deserunt ullam maxime! Minima, distinctio. Voluptatum eaque dolorem assumenda tempore accusamus repellendus maxime, cumque excepturi nisi quisquam nobis! Qui, eos ea.</p>
                            </div>
                            <Product_specs 
                                element={element}
                                set_img_idx={set_img_idx}
                                product_size={product_size}
                                set_product_size={set_product_size}
                                product_qtn={product_qtn}
                                set_product_qtn={set_product_qtn}
                                set_chosen_product={set_chosen_product}
                                set_open_check_out={set_open_check_out}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
        <Checkout 
            chosen_product={chosen_product}
            img_idx={img_idx}
            product_size={product_size}
            product_qtn={product_qtn}
            open_check_out={open_check_out}
            set_open_check_out={set_open_check_out}
        />
    </div>
  )
}

export default Product;