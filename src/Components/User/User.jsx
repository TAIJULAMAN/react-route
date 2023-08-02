import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';
// import UserDetails from '../UserDetails/UserDetails';

const User = ({user}) => {
    const {id,name,username,email,address} =user
    // console.log(user)
    return (
        <div className='user'>
           
            <p><Link to={`/user/${id}`}>{name}</Link></p>
        </div>
    );
};

export default User;