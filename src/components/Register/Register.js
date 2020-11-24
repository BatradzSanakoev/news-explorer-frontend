import React from 'react';
import EscapeOutside from 'react-escape-outside';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Register({ isOpen, onClose, changePopup }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleChange = (evt) => {
        if (evt.target.name === 'email') setEmail(evt.target.value);
        else if (evt.target.name === 'password') setPassword(evt.target.value);
        else setName(evt.target.value);
    };

    const resetFrom = () => {
        setEmail('');
        setPassword('');
        setName('');
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onClose();
        resetFrom();
    };

    React.useEffect(() => {
        !isOpen && resetFrom();
    }, [isOpen]);

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose}>
            {isOpen && <EscapeOutside onEscapeOutside={onClose}>
                <form className={`popup__form`} onSubmit={handleSubmit} noValidate>
                    <h2 className='popup__form-title'>Регистрация</h2>
                    <fieldset className={`popup__form-input`}>
                        <p className='popup__form-label popup__form-label_register'>Email</p>
                        <input type='email' required className='popup__input' placeholder='Введите почту' name='email' value={email || ''} onChange={handleChange} />
                        <span className={`popup__form-error-text ${email && 'popup__form-error-text_visible'}`}>{!email ? 'Неправильный формат email' : ''}</span>
                        <p className='popup__form-label popup__form-label_register'>Password</p>
                        <input type='password' required className='popup__input' placeholder='Введите пароль' name='password' value={password || ''} onChange={handleChange} />
                        <span className={`popup__form-error-text ${password && 'popup__form-error-text_visible'}`}>{!password ? 'Неправильный формат password' : ''}</span>
                        <p className='popup__form-label popup__form-label_register'>Name</p>
                        <input type='text' required className='popup__input' placeholder='Введите имя' name='name' value={name || ''} onChange={handleChange} />
                        <span className={`popup__form-error-text ${name && 'popup__form-error-text_visible'}`}>{!name ? 'Неправильный формат name' : ''}</span>
                        <p className={`popup__form-error-text ${email && 'popup__form-error-text_visible'} popup__form-error-text_register`}>Такой пользователь уже есть</p>
                        <button type='submit' className='popup__button popup__button_register' disabled={!email || !password}>Войти</button>
                    </fieldset>
                    <p className='popup__down-text'>или <span className='popup__span-text' onClick={changePopup}>Войти</span></p>
                </form>
            </EscapeOutside>}
        </PopupWithForm>
    )
}