import React from 'react';
import { Link } from 'react-router-dom'
import './Logo.css';

function Logo() {
    return (
        <Link to='/' className='navbar-logo' >
            myTunez
        </Link>
    )
}

export default Logo