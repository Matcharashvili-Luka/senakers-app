import React from 'react';
import '../Main_page/Main.css';
import { main_page_data } from '../../Data/Data';
import { Link } from 'react-scroll'

function Main({ translate_x }) {
  return (
    <div 
        className='main_page'
        style={{ transform: `translateX(${-100 * translate_x}vw)` }}
    >
        {main_page_data.map((element) => {
            return (
                <div className='main_page_container' key={element.id}>
                    <div className="product_price">
                        <p
                            style={{ backgroundColor: `${element.color}`}}
                        >${element.price}</p>
                    </div>
                    <div 
                        className="product_image"
                        style={{ backgroundColor: `${element.color}`}}
                    >
                        <img src={element.img} alt="" />
                    </div>
                    <div className="product_text">
                        <p>{element.text}</p>
                        <p>New Season!</p>
                        <Link to="product_section" smooth={true} duration={1000} >
                            <button>Shop Now</button>
                        </Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Main