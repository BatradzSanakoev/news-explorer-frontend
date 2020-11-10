import React from 'react';

export default function Main() {

    const [request, setRequest] = React.useState('');

    const handleChange = (evt) => {
        evt.target.name === 'request' && setRequest(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setRequest('');
    };

    return (
        <main className='main'>
            <div className='main__container'>
                <h1 className='main__head'>Что творится в мире?</h1>
                <p className='main__paragraph'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form className='main__form' onSubmit={handleSubmit} noValidate>
                    <fieldset className='main__form-search'>
                        <input type='text' name='request' value={request || ''} placeholder='Введите тему новости' required onChange={handleChange} className='main__form-input' />
                        <button type='submit' className='main__form-button'>Искать</button>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}