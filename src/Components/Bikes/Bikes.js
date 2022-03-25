import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'
const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    } ,[])
    const [product, setProduct] = useState([])
    const addToCart = (bike) => {
        const newProduct = [...product,bike]
        setProduct(newProduct);
    }
    return (
        <div className='store-bike'>
        <div className='bikes-container'>
            {
                bikes.map(bike => <Bike 
                key={bike.id}
                bike={bike}
                addToCart={addToCart}>
                </Bike>)
            }
        </div>
        <div className='order-container'>
            <p>Order Summary
               <div>
               {
                    product.map(bikeItem => 
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img style={{width:90, borderRadius:9, marginRight:30}} src={bikeItem.img} alt="" />
                    <h6 key={bikeItem.id}>{bikeItem.name}</h6>
                    </div>
                    )
                }
               </div>
            </p>
        </div>
        </div>
    );
};

export default Bikes;