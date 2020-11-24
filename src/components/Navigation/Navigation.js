import React from 'react';
import { Link } from 'react-router-dom';

import LogIcon from '../../images/authIcon.png';
import LogIconBlack from '../../images/authIconBlack.png';

export default function Navigation({ loggedIn, username, location, openPopup, isBurgerOpen, openBurger }) {

    const LogIconSrc = (location.pathname === '/saved-news' && !isBurgerOpen) ? LogIconBlack : LogIcon;
    const handleClick = () => {
        isBurgerOpen && openBurger();
        openPopup();
    };

    return (
        <nav className={`header__nav ${!isBurgerOpen && 'header__nav_visible'}`}>
            <Link to='/' className={`header__link ${location.pathname === '/saved-news' && 'header__link_auth'} ${location.pathname === '/' && 'header__link_selected'}`}>Главная</Link>
            <Link to='/saved-news' className={`header__link ${location.pathname === '/saved-news' && 'header__link_auth'} ${!loggedIn && 'header__link_invisible'} ${location.pathname === '/saved-news' && 'header__link_selected_auth'}`}>Сохраненные статьи</Link>
            <p to='/' className={`header__link ${location.pathname === '/saved-news' && 'header__link_auth'} header__link_auth-item ${location.pathname === '/saved-news' && 'header__link_auth-item_black'} ${(location.pathname === '/saved-news' && isBurgerOpen) && 'header__link_auth-item_white'}`} onClick={handleClick}>
                {loggedIn ? username : 'Авторизоваться'}
                {loggedIn ? (<img src={location.pathname === '/' ? LogIcon : LogIconSrc} alt='LogIcon' className='header__logo-icon' />) : ''}
            </p>
        </nav>
    )
}