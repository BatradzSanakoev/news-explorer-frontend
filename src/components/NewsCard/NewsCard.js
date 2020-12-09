import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Bookmark from '../../images/bookmark.png';
import BookmarkOrigin from '../../images/bookmark-origin.png';
import BlueBookmark from '../../images/blue-bookmark.png';
import Recycle from '../../images/recycle.jpg';

export default function NewsCard({
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
    location,
    articleAddAndRemove,
    keyword,
    addedArticles,
    loggedIn
}) {

    const [authWarningTip, setAuthWarningTip] = React.useState(false);

    const article = { title: title, description: description, url: url, urlToImage: urlToImage, publishedAt: publishedAt, source: source, keyword: keyword };
    const isAdded = loggedIn && addedArticles.some((item) => item.title === title && item.date === publishedAt);

    const handleAddToFavouritesClick = () => {
        articleAddAndRemove(article);
    };

    const handleOnMouse = () => {
        setAuthWarningTip(!authWarningTip);
    };

    return (
        <div className='news__card'>
            {location.pathname === '/saved-news' &&
                (<div className={`news__card-auth-tag`}>
                    <p className='news__card-auth-tag-name'>{keyword}</p>
                </div>)
            }
            <div className={`news__card-auth-warning ${!authWarningTip && 'news__card-visible'}`}>
                <p className='news__card-auth-warning-name'>
                    {location.pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}
                </p>
            </div>
            <img
                src={location.pathname === '/' ? (loggedIn ? (isAdded ? BlueBookmark : BookmarkOrigin) : Bookmark) : Recycle}
                alt='Card bookmark icon'
                className='news__card-bookmark'
                onClick={() => {
                    console.log(loggedIn)
                    loggedIn && handleAddToFavouritesClick();
                }}
                onMouseEnter={() => {
                    !loggedIn && handleOnMouse();
                    (loggedIn && location.pathname === '/saved-news') && handleOnMouse();
                }}
                onMouseLeave={() => {
                    !loggedIn && handleOnMouse();
                    (loggedIn && location.pathname === '/saved-news') && handleOnMouse();
                }}
            />
            <div className='news__card-cover'>
                <img src={urlToImage} alt='Card img' className='news__card-img' />
            </div>
            <div className='news__card-info'>
                <p className='news__card-date'>{new Date(publishedAt).toLocaleString('ru', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <h3 className='news__card-title'>{title}</h3>
                <p className='news__card-description'>{description}</p>
                <a href={url} target='_blank' className='news__card-source'>{location.pathname === '/' ? source.name : source}</a>
            </div>
        </div>
    )
}