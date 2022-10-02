import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post:{id,body,title}}) => {

    const navigate = useNavigate();

    const handlePostDetails = ()=>{
        navigate(`/post/${id}`)
    }
    
    return (
        <div className='post'>
          <h1>Title: {title}</h1>
          <p> <small>{body}</small></p>
          <Link to={`post/${id}`}>Visit details</Link>
          <Link to={`post/${id}`}><button>Show Details</button></Link>
          <button onClick={()=> handlePostDetails()}>Show details 2</button>
        </div>
    );
};

export default Post;