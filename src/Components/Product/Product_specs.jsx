import React from 'react'

function Product_specs({ 
    element, set_img_idx, product_size, set_product_size, product_qtn, set_product_qtn, set_chosen_product,
    set_open_check_out
}) {

    const click_button = (el) => {
        set_chosen_product(el);
        set_open_check_out(true);
    }

  return (
    <div className="product_specs">
        <div className="colors">
            {element.product.map((each_product) => {
                return (
                    <div
                        style={{ backgroundColor: `${each_product.color}`}}
                        onClick={() => set_img_idx(element.product.indexOf(each_product))}
                    ></div>
                )
            })}
        </div>
        <div className='other_specs'>
            <div className="select size">
                <select value={ product_size } onChange={ (e) => set_product_size(e.target.value) }>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div className="select qtn">
                <select value={ product_qtn } onChange={ (e) => set_product_qtn(e.target.value) }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
        <button onClick={() => click_button(element)}>BUY NOW</button>
    </div>
  )
}

export default Product_specs