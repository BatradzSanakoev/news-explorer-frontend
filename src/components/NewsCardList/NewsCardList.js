import React from 'react';

import News from '../../utils/tempCards.json';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList({ location }) {
    return (
        <section className={`news ${location.pathname === '/saved-news' && 'news__auth'}`}>
            <div className='news__container'>
                {location.pathname === '/' && (<h2 className='news__results'>Результаты поиска</h2>)}
                <div className={`news__grid-container ${location.pathname === '/saved-news' && 'news__grid-container_auth'}`}>
                    {News.articles.map(({ id, ...props }) => <NewsCard key={id} id={id} {...props} location={location} />)}
                </div>
                {location.pathname === '/' && (<button className='news__show-button'>Показать еще</button>)}
            </div>
        </section>
    )
}