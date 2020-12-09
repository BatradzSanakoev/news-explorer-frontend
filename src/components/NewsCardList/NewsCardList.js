import React from 'react';


import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList({
    loggedIn,
    location,
    isSearchComplete,
    news,
    showMoreNewsButton,
    newsRow,
    articleAddAndRemove,
    keyword,
    addedArticles,
}) {
    const authMod = location.pathname === '/saved-news' && 'news__auth';
    const sectionNewsVisible = location.pathname !== '/saved-news' && (!isSearchComplete) && 'news__visible';

    const newsToShow = location.pathname === '/' && news.slice(0, (newsRow + 1) * 3);

    return (
        <section className={`news ${authMod} ${sectionNewsVisible}`}>
            <div className='news__container'>
                {location.pathname === '/' && (<h2 className='news__results'>Результаты поиска</h2>)}
                {location.pathname === '/' &&
                    (
                        <div className='news__grid-container'>

                            {newsToShow.map(({ ...props }, index) => <NewsCard
                                key={index}
                                {...props}
                                location={location}
                                articleAddAndRemove={articleAddAndRemove}
                                keyword={keyword}
                                addedArticles={addedArticles}
                                loggedIn={loggedIn}
                            />)}

                        </div>
                    )}
                {location.pathname === '/' && (<button className='news__show-button' onClick={showMoreNewsButton}>Показать еще</button>)}

                {location.pathname === '/saved-news' &&
                    (
                        <div className={`news__grid-container ${location.pathname === '/saved-news' && 'news__grid-container_auth'}`}>

                            {addedArticles.map(({ ...props }, index) => <NewsCard
                                key={index}
                                title={props.title}
                                description={props.text}
                                keyword={props.keyword}
                                publishedAt={props.date}
                                url={props.link}
                                urlToImage={props.image}
                                source={props.source}
                                location={location}
                                articleAddAndRemove={articleAddAndRemove}
                                addedArticles={addedArticles}
                                loggedIn={loggedIn}
                            />)}

                        </div>
                    )}
            </div>
        </section>
    )
}