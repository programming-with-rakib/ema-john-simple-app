
import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    console.log()
    const {img, name, seller, price, stock} = props.product;
    return (
        <div class="product">
            <div class="">
                <img src={img} alt="ema john"/>
            </div>
            <div class="">
                <h3 class="product-name">{name}</h3>
                <p class="product-seller"><small class="small-seller">by: </small>{seller}</p>
                <p class="product-price">${price}</p>
                <p class="product-stock">only {stock} left in stock - order soon</p>
                <button class="add-btn" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Products;