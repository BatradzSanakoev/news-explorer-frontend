import React from 'react';

export default function SearchForm({ handleSendRequest }) {

    const [request, setRequest] = React.useState('');

    const handleChange = (evt) => {
        evt.target.name === 'request' && setRequest(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSendRequest(request);
        setRequest('');
    };

    return (
        <form className='main__form' onSubmit={handleSubmit} noValidate>
            <fieldset className='main__form-search'>
                <input type='text' name='request' value={request || ''} placeholder='Введите тему новости' required onChange={handleChange} className='main__form-input' />
                <button type='submit' className='main__form-button'>Искать</button>
            </fieldset>
        </form>
    )
}