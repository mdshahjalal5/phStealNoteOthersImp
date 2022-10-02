import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend,friend:{name,id,username,email}}) => {
   
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <p>{email}</p>
            <small>
                <Link to={`/friend/${id}`}>{username}</Link>
            </small>
        </div>
    );
};

export default Friend;