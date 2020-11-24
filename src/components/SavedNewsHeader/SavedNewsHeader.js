import React from 'react';

import News from '../../utils/tempCards.json';

export default function SavedNewsHeader() {
    return (
        <section className='news-header'>
            <div className='news-header__container'>
                <p className='news-header__section-name'>Сохранённые статьи</p>
                <h2 className='news-header__saved-news-info'>Грета, у вас {News.articles.length} сохранённых статей</h2>
                <p className='news-header__saved-news-tags'>По ключевым словам: Bitcoin, Финансы и 2-м другим</p>
            </div>
        </section>
    )
}