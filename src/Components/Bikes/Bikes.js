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
        const newItem = [...new Set(newProduct)]
        setProduct(newItem);
        if(newItem.length > 4){
            
        }
    }
    const chooseItem = (bike) => {
        const newProduct = [...product,bike]
        const newItem = [...new Set(newProduct)]
        setProduct(newItem);
        const ans = newProduct[Math.floor(Math.random() * newProduct.length)].name;
        let result = document.getElementById('choose');
        result.innerText = ans
    }
    const deleteItem = () => {
        const newProduct = [];
        setProduct(newProduct)
        document.getElementById('choose').innerText = "";
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
            <div>
                <p>Order Summary</p>
                <p id='choose' style={{marginTop:60, fontSize:14, background:'aqua', padding:10, borderRadius:9}}></p>
            </div>

            <div className='single-bike'>
            {
                product.map(bikeItem =>
                    <div key={bikeItem.id} style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:10}}>
                    <img style={{width:90, borderRadius:9, marginRight:30}} src={bikeItem.img} alt="" />
                    <h6 key={bikeItem.id}>{bikeItem.name}</h6>
                    </div>
                    )
            }
            <div className='deleteBtn'>
            <button onClick={deleteItem}>Clear Item</button>
            </div>
            <div className='chooseBtn'>
            <button onClick={chooseItem}>Click for lucky</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Bikes;