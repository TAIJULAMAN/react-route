import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <a href="/about"className='anchor'>About</a>
            <a href="/contact" className='anchor'>Contact</a>
            <a href="/posts" className='anchor'>posts</a>
            <a href="/users">user</a>
      
        </div>
    );
};

export default Header;