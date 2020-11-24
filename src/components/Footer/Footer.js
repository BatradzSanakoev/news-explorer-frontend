import React from 'react';

import GithubIcon from '../../images/github.png';
import FacebookIcon from '../../images/facebook.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>©2020 Supersite, Powered by News API</p>
                <nav className='footer__nav'>
                    <div className='footer__links'>
                        <a href='/' className='footer__link'>Главная</a>
                        <a href='https://praktikum.yandex.ru/' className='footer__link'>Яндекс Практикум</a>
                    </div>
                    <div className='footer__socials'>
                        <a href='https://github.com/BatradzSanakoev'><img src={GithubIcon} className='footer__link' /></a>
                        <a href='https://web.facebook.com/batradz.sanakoev/'><img src={FacebookIcon} className='footer__link' /></a>
                    </div>
                </nav>
            </div>
        </footer>
    )
}