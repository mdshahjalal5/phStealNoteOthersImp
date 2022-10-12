import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    

    const phoneData = useLoaderData();

    console.log(phoneData)

    return (
        <div>
           <h1>Phone : {phoneData.name}</h1> 
        </div>
    );
};

export default Phone;