import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const history = useHistory();
    const handleClick = (friendId) =>{
        history.push(`/friend/${friendId}`);
    }
    const {name, email,id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <Link to={`/friend/${id}`}>Show Details of: {id}</Link>
            <button onClick={()=>handleClick(id)}>Click Me</button>
           
            {/* <button onClick={}></button> */}
        </div>
    );
};

export default Friend;