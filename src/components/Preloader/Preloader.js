import React from 'react';

import NotFoundIcon from '../../images/not-found.png';

export default function Preloader({ isSearchError, isSearchLoading, isSearching, isSearchZero }) {

    const sectionPreloaderVisible = (!isSearchZero && !isSearchError && !isSearchLoading && !isSearching) && 'preloader__visible';
    const circleVisible = !isSearchLoading && 'preloader__visible';
    const containerVisible = (!isSearchZero && !isSearchError) && 'preloader__visible';
    const containerText = isSearchError ?
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        : 'К сожалению по вашему запросу ничего не найдено.';

    return (
        <section className={`preloader ${sectionPreloaderVisible}`}>
            <i className={`circle-preloader ${circleVisible}`} />
            <div className={`preloader__container ${containerVisible}`}>
                {isSearchZero && <img src={NotFoundIcon} alt='Not found icon' className='preloader__not-found-icon' />}
                {isSearchZero && <h3 className='preloader__head'>Ничего не найдено</h3>}
                <p className='preloader__text'>{containerText}</p>
            </div>
        </section>
    )
}