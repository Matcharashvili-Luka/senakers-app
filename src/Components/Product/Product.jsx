import React from 'react';
import { main_page_data } from '../../Data/Data';
import '../Product/Product.css';

function Product({ translate_x }) {
  return (
    <div 
        className='product_container'
        style={{ transform: `translateX(${-100 * translate_x}vw)` }}
    >
        {main_page_data.map((element) => {
            return(
                <div className='product'>
                    <div className='images'>
                        <img src={element.additional_img} alt="" />
                    </div>
                    <div className="product_info">
                        <div className="product_text_info">
                            <h1>{element.text}</h1>
                            <h4>${element.price}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deserunt ullam maxime! Minima, distinctio. Voluptatum eaque dolorem assumenda tempore accusamus repellendus maxime, cumque excepturi nisi quisquam nobis! Qui, eos ea.</p>
                        </div>
                        <div className="product_specs">
                            <div className="colors">
                                <div 
                                    className="first_color"
                                    style={{ backgroundColor: `${element.color1}`}}
                                ></div>
                                <div 
                                    className="second_color"
                                    style={{ backgroundColor: `${element.color2}`}}
                                ></div>
                            </div>
                            <div className="size">
                                <div className="small"><p>S</p></div>
                                <div className="medium"><p>M</p></div>
                                <div className="large"><p>L</p></div>
                                <div className="x_large"><p>XS</p></div>
                            </div>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Product