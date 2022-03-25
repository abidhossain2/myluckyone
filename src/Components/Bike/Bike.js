import React from 'react';

const Bike = (props) => {
    const{img, name, price} =props.bike;
    return (
        <div>
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
        </div>
    );
};

export default Bike;