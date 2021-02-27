
import React from 'react';

const Cart = (props) => {
    console.log(props)
    const totalPrice = props.cart.reduce((cart, product) =>{
        return cart + product.price;
    }, 0);
    
    let tax = (totalPrice / 10).toFixed(2);
    console.log(tax)
    const orderTotal = (totalPrice + Number(tax)).toFixed(2);
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items ordered: {props.cart.length}</p>
            <p>Estimated Tax: {tax} </p>
            <p>Order Total: {orderTotal }</p>
        </div>
    );
};

export default Cart;