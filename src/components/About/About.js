import React from 'react';

import Avatar from '../../images/avatar.jpg'

export default function About() {
    return (
        <section className='about'>
            <div className='about__container'>
                <img className='about__avatar' src={Avatar} alt='avatar' />
                <div className='about__info'>
                    <h2 className='about__head'>Об авторе</h2>
                    <p className='about__text'>Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                    <p className='about__text'>Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
                </div>
            </div>
        </section>
    )
}