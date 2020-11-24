import React from 'react';

import Bookmark from '../../images/bookmark.png';
import BlueBookmark from '../../images/blue-bookmark.png';
import Recycle from '../../images/recycle.jpg';

export default function NewsCard({ id, author, title, description, url, urlToImage, publishedAt, location }) {
    return (
        <div className='news__card'>
            {location.pathname === '/saved-news' &&
                (<div className={`news__card-auth-tag`}>
                    <p className='news__card-auth-tag-name'>Bitcoin</p>
                </div>)
            }
            <div className={`news__card-auth-warning ${parseInt(id, 10) === 2 ? '' : 'news__card-visible'}`}>
                <p className='news__card-auth-warning-name'>{location.pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённыхs'}</p>
            </div>
            <img src={location.pathname === '/' ? (parseInt(id, 10) === 3 ? BlueBookmark : Bookmark) : Recycle} alt='Card bookmark icon' className='news__card-bookmark' />
            <div className='news__card-cover'>
                <img src={urlToImage} alt='Card img' className='news__card-img' />
            </div>
            <div className='news__card-info'>
                <p className='news__card-date'>{publishedAt}</p>
                <h3 className='news__card-title'>{title}</h3>
                <p className='news__card-description'>{description}</p>
                <a href={url} target='_blank' className='news__card-source'>newsBTC</a>
            </div>
        </div>
    )
}