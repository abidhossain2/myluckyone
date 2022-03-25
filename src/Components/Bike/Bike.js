import React from 'react';
import './Bike.css'
import {HiShoppingCart} from 'react-icons/hi'
const Bike = (props) => {
    const{img, name, price} = props.bike;
    return (
        <div className='bike-container'>
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
            <button className='btn' onClick={() =>props.addToCart(props.bike)}><span>Add to cart </span><HiShoppingCart className='cart-icon'></HiShoppingCart></button>
        </div>
    );
};

export default Bike;