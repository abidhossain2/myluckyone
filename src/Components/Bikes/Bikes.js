import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    } ,[])
    return (
        <div>
            {
                bikes.map(bike => <Bike 
                key={bike.id}
                bike={bike}>
                </Bike>)
            }
        </div>
    );
};

export default Bikes;