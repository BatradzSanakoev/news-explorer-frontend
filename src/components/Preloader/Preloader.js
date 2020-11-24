import React from 'react';

import NotFoundIcon from '../../images/not-found.png';

export default function Preloader() {
    return (
        <section className='preloader preloader__visible'>
            <div className='preloader__container'>
                <img src={NotFoundIcon} alt='Not found icon' className='preloader__not-found-icon' />
                <h3 className='preloader__head'>Ничего не найдено</h3>
                <p className='preloader__text'>К сожалению по вашему запросу ничего не найдено.</p>
            </div>
        </section>
    )
}