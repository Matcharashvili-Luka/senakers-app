import React from 'react'

function Product_specs({ element, check_type_of_product, set_color }) {
  return (
    <div className="product_specs">
        <div className="colors">
            <div 
                onClick={set_color}
                style={{ backgroundColor: `${element.color1}`}}
                className="first_color"
                id={check_type_of_product ? 'unchecked' : 'checked'}
            ></div>
            <div 
                onClick={set_color}
                style={{ backgroundColor: `${element.color2}`}}
                className="second_color"
                id={check_type_of_product ? 'checked' : 'unchecked'}
            ></div>
        </div>
        <div className='other_specs'>
            <div className="select size">
                <select>
                    <option value="S">S</option>
                    <option value="S">M</option>
                    <option value="S">L</option>
                    <option value="S">XL</option>
                </select>
            </div>
            <div className="select qtn">
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
        <button>BUY NOW</button>
    </div>
  )
}

export default Product_specs