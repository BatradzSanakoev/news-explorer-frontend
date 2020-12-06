/* eslint-disable no-unused-expressions */
import React from 'react';

import News from '../../utils/tempCards.json';

export default function SavedNewsHeader({ news, username, addedArticles, location, keywords }) {

    const tagsListToShow = () => {
        let showingTagsObj = {};
        const tagsNum = keywords.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
        const sortedTagsList = Object.keys(tagsNum).sort((a, b) => tagsNum[b] - tagsNum[a]);
        const result = sortedTagsList.length <= 3 ? showingTagsObj = { showingTags: sortedTagsList.join(', '), numOfAnotherTags: 0 }
            : { showingTags: sortedTagsList.slice(0, 2).join(', '), numOfAnotherTags: sortedTagsList.length - 2 };

        return result;
    };

    const tags = tagsListToShow();

    return (
        <section className='news-header'>
            <div className='news-header__container'>
                <p className='news-header__section-name'>Сохранённые статьи</p>
                <h2 className='news-header__saved-news-info'>{username}, у вас {addedArticles.length} сохранённых статей</h2>
                <p className='news-header__saved-news-tags'>
                    По ключевым словам: {tags.showingTags}{tags.numOfAnotherTags ? (' и ' + tags.numOfAnotherTags + ' др.') : '.'}
                </p>
            </div>
        </section>
    )
}