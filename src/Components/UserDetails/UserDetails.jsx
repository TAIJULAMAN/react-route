import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()
    return (
        <div>
            {/* <h1>this is user detail</h1> */}
             <h1>Name:{user.name}</h1>
            <h3>User Name:{user.username}</h3>
            <p>Email:{user.email}</p>
        </div>
    );
};

export default UserDetails;