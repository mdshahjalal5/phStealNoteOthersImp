import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
     // const friendDetails = useLoaderData();
    // const {name,phone} = friendDetails;
    const {name,phone} = useLoaderData(); 
    return (
        <div>
            <h1>You will know about the person here!</h1>
            <h1>{name}</h1>
            <p>{phone}</p>
        </div>
    );
};

export default FriendDetails;