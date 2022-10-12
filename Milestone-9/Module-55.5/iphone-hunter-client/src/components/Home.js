import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
   
    return (
        <div>
          <h1>Home</h1>
          <p>Phones : {data.length} </p>  
          {
            data.map((phone)=> <li> <Link to={`/phone/${phone.id}`}>{phone.name}</Link> </li> )
          }
        </div>
    );
};

export default Home;