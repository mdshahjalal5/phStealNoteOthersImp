import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const {id,title,userId} = useLoaderData();
    const navigate = useNavigate()
   
    const handleAutor = ()=> {
        navigate(`/friend/${userId}`)
    }

    return (
        <div>
            <h1>Post details:</h1>
            <p>{id}</p>
            <p><small>{title}</small></p>
            <button onClick={()=> handleAutor()}>Show Author</button>
        </div>
    );
};

export default PostDetails;