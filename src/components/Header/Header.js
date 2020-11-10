import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn, username }) {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__name'>NewsExplorer</Link>
                <Navigation loggedIn={loggedIn} username={username} />
            </div>
        </header>
    )
}