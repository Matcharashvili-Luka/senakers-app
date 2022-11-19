import React from 'react'

function Checkout_product_info({ chosen_product, img_idx, product_size, product_qtn }) {
  return (
    <div className="checkout_product_info">
        <div 
            className="image_section"
            style={{ backgroundColor: `${chosen_product.color}`}}
        >
            <img src={ chosen_product.product[img_idx].img } alt="" />
        </div>
        <div className="specs_section">
            <div className="color">
                <p>Color: </p>
                <div
                    style={{ backgroundColor: `${chosen_product.product[img_idx].color}`}}
                ></div>
            </div>
            <div className="size">
                <p>Size: { product_size }</p>
            </div>
            <div className="qtn">
                <p>Quantity: { product_qtn }</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout_product_info