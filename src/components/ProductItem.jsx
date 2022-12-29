import React from 'react'
import '../styles/ProductItem.scss'
import bt_add_to_cart from '../assets/icons/bt_add_to_cart.svg'
import office365 from '../assets/img/office 365.png'

const ProductItem = () => {
    return (
        <div className="ProductItem">
            <img src={office365} alt="product" />
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src={bt_add_to_cart} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default ProductItem;