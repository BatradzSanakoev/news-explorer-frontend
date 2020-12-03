import React from 'react';


import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList({ logggedIn, location, isSearchComplete, news, showMoreNewsButton, newsRow, articleAddAndRemove, keyword, addedArticles }) {

    const authMod = location.pathname === '/saved-news' && 'news__auth';
    const sectionNewsVisible = (!isSearchComplete) && 'news__visible';

    const newsToShow = news.slice(0, (newsRow + 1) * 3);

    return (
        <section className={`news ${authMod} ${sectionNewsVisible}`}>
            <div className='news__container'>
                {location.pathname === '/' && (<h2 className='news__results'>Результаты поиска</h2>)}
                <div className={`news__grid-container ${location.pathname === '/saved-news' && 'news__grid-container_auth'}`}>

                    {newsToShow.map(({ ...props }, index) => <NewsCard
                        key={index}
                        {...props}
                        location={location}
                        articleAddAndRemove={articleAddAndRemove}
                        keyword={keyword}
                        addedArticles={addedArticles}
                        loggedIn={logggedIn}
                    />)}
                </div>

                {location.pathname === '/' && (<button className='news__show-button' onClick={showMoreNewsButton}>Показать еще</button>)}
            </div>
        </section>
    )
}