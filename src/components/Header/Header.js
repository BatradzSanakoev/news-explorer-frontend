import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import BurgerButtonWhite from '../../images/menu-white.png';
import BurgerButtonBlack from '../../images/menu-black.png';

export default function Header({ loggedIn, location, openPopup, openBurger, isBurgerOpen, isLogPopupOpen, isRegPopupOpen, handleSignout }) {

    const savedNewsBurgerSrc = (location.pathname === '/saved-news' && !isBurgerOpen) ? BurgerButtonBlack : BurgerButtonWhite;

    return (
        <header className={`header ${location.pathname === '/saved-news' ? 'header_auth' : ''} ${isBurgerOpen && 'header_dark'}`}>
            <div className='header__container'>
                <Link to='/' className={`header__name ${location.pathname === '/saved-news' ? 'header__name_auth' : ''} ${(isBurgerOpen && location.pathname === '/saved-news') && 'header__name-auth-mobile'}`}>NewsExplorer</Link>
                <img className={`header__burger-button ${(isRegPopupOpen || isLogPopupOpen) && 'header__burger-button_visible'}`} src={`${location.pathname === '/' ? BurgerButtonWhite : savedNewsBurgerSrc}`} alt='Burger Menu Icon' onClick={openBurger} />
                <Navigation
                    loggedIn={loggedIn} 
                    location={location} 
                    openPopup={openPopup} 
                    isBurgerOpen={isBurgerOpen} 
                    openBurger={openBurger} 
                    isLogPopupOpen={isLogPopupOpen} 
                    isRegPopupOpen={isRegPopupOpen} 
                    handleSignout={handleSignout}
                />
            </div>
        </header>
    )
}