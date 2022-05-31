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
    const addToCart = (bikes) => {
        const newProduct = [...product,bikes]
        const newItem = [...new Set(newProduct)]
        setProduct(newItem);
        if(newProduct.length > 4){
            alert('You can not add more than 4 photos!')
            setProduct([])
        }
    }
    const [choose, setChoose] = useState([])
    const chooseItem = () => {;
        // const newProduct = [...product,biked]
        const newChoose = [...choose]
        // const newItem = [...new Set(newProduct)]
        // const newItemChoose = [...new Set(newChoose)]
        // const ans = newChoose[Math.floor(Math.random() * (newChoose.length - 1))].name;
        setChoose(newChoose[Math.floor(Math.random() * (newChoose.length - 1))].name);
        // let result = document.getElementById('choose');
        // result.innerText = ans
        // setChoose(ans)
    }
    const deleteItem = () => {
        const newProduct = [];
        setProduct(newProduct)
        document.getElementById('choose').innerText = "";
    }

  
    return (
        <div>
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
                <p className='order'>Order Summary</p>
                {/* <p id='choose' style={{marginTop:60, fontSize:14, background:'aqua', padding:10, borderRadius:9, position:'fixed'}}></p> */}
            </div>
            <div>
                {
                    choose.map(item => <p key={item.id}>{item}</p>)
                }
            </div>

            <div className='single-bike'>
            {
                product.map(bikeItem =>
                    <div key={bikeItem.id} style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:10}}>
                    <img src={bikeItem.img} alt="" />
                    <p className='bike-name' key={bikeItem.id}>{bikeItem.name}</p>
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
        </div>
    );
};

export default Bikes;