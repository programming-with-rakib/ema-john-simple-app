import React, { useState } from 'react';
import Cart from '../Component/Cart/Cart';
import Products from '../Component/Products/Products';
import fakeData from '../fakeData';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [tenData, setTen] = useState(firstTen);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart =  [...cart, product];
        setCart(newCart);
    }
    return (
        <div class="shop-container">

         <div class="product-container">   
               {
                   tenData.map(data => <Products handleAddProduct={handleAddProduct} product={data}></Products>)
               }
         </div>
          <div class="product-cart">
              <Cart cart={cart}></Cart>
          </div>
           
           
        </div>
    );
};

export default Shop;