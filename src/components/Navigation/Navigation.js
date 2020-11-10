import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import LogIcon from '../../images/Union.png';

export default function Navigation({ loggedIn, username }) {
    const location = useLocation();
    return (
        <nav className='header__nav'>
            <Link to='/' className={`header__link ${location.pathname === '/' && 'header__link_selected'}`}>Главная</Link>
            <Link to='/saved-news' className={`header__link ${!loggedIn && 'header__link_invisible'}`}>Сохраненные статьи</Link>
            <Link to='/' className='header__link header__link_auth'>
                {loggedIn ? username : 'Авторизоваться'}
                {loggedIn ? (<img src={LogIcon} alt='LogIcon' className='header__logo-icon' />) : ''}
            </Link>
        </nav>
    )
}