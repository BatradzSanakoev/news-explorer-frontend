import React from 'react';

import Bookmark from '../../images/bookmark.png';
import BlueBookmark from '../../images/blue-bookmark.png';
import Recycle from '../../images/recycle.jpg';

export default function NewsCard({ author, title, description, url, urlToImage, publishedAt, source, location, articleAddAndRemove, keyword, addedArticles, loggedIn }) {

    const article = { title: title, description: description, url: url, urlToImage: urlToImage, publishedAt: publishedAt, source: source, keyword: keyword };
    // const addedArticle = addedArticles.find((item) => item.title === title && item.date === publishedAt);

    const isAdded = addedArticles.some((item) => item.title === title && item.date === publishedAt);

    const handleAddToFavouritesClick = () => {
        articleAddAndRemove(article);
    };

    return (
        <div className='news__card'>
            {/* {location.pathname === '/saved-news' &&
                (<div className={`news__card-auth-tag`}>
                    <p className='news__card-auth-tag-name'>Bitcoin</p>
                </div>)
            } */}
            <div className={`news__card-auth-warning ${!loggedIn && 'news__card-visible'}`}>
                <p className='news__card-auth-warning-name'>
                    {location.pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённыхs'}
                </p>
            </div>
            <img
                src={location.pathname === '/' ? (isAdded ? BlueBookmark : Bookmark) : Recycle}
                alt='Card bookmark icon' className='news__card-bookmark'
                onClick={handleAddToFavouritesClick}
            />
            <div className='news__card-cover'>
                <img src={urlToImage} alt='Card img' className='news__card-img' />
            </div>
            <div className='news__card-info'>
                <p className='news__card-date'>{new Date(publishedAt).toLocaleString('ru', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <h3 className='news__card-title'>{title}</h3>
                <p className='news__card-description'>{description}</p>
                <a href={url} target='_blank' className='news__card-source'>{source.name}</a>
            </div>
        </div>
    )
}