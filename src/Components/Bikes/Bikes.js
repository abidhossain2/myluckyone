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
    let [product, setProduct] = useState([])
    const addToCart = (bike) => {
        const newProduct = [...product,bike]
        const newItem = [...new Set(newProduct)]
        setProduct(newItem);
    }
    const deleteItem = () => {
        const newProduct = [];
        setProduct(newProduct)
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
                  Order Summary
            <div>
               <div>
               {
                   product.map(bikeItem =>
                    <div key={bikeItem.id} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img style={{width:90, borderRadius:9, marginRight:30}} src={bikeItem.img} alt="" />
                    <h5 key={bikeItem.id}>{bikeItem.name}</h5>
                    </div>
                    )
                }
                <button onClick={deleteItem}>Clear Item</button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Bikes;