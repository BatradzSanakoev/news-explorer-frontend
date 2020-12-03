import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

export default function Main({ location, handleSendRequest }) {

    return (
        <main className={`main ${location.pathname === '/saved-news' && 'main__auth'}`}>
            {location.pathname === '/' ?
                (<div className='main__container'>
                    <h1 className='main__head'>Что творится в мире?</h1>
                    <p className='main__paragraph'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <SearchForm handleSendRequest={handleSendRequest} />
                </div>) : <SavedNewsHeader />}
        </main>
    )
}