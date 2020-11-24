import React from 'react';
import EscapeOutside from 'react-escape-outside';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Login({ isOpen, onClose, changePopup }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChange = (evt) => {
        evt.target.name === 'email' ? setEmail(evt.target.value) : setPassword(evt.target.value);
    };

    const resetFrom = () => {
        setEmail('');
        setPassword('');
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
                    <h2 className='popup__form-title'>Вход</h2>
                    <fieldset className={`popup__form-input`}>
                        <p className='popup__form-label popup__form-label_login'>Email</p>
                        <input type='email' required className='popup__input' placeholder='Введите почту' name='email' value={email || ''} onChange={handleChange} />
                        <span className={`popup__form-error-text ${email && 'popup__form-error-text_visible'}`}>Неправильный формат email</span>
                        <p className='popup__form-label popup__form-label_login'>Password</p>
                        <input type='password' required className='popup__input' placeholder='Введите пароль' name='password' value={password || ''} onChange={handleChange} />
                        <span className={`popup__form-error-text ${password && 'popup__form-error-text_visible'}`}>Неправильный формат password</span>
                        <button type='submit' className='popup__button' disabled={!email || !password}>Войти</button>
                    </fieldset>
                    <p className='popup__down-text'>или <span className='popup__span-text' onClick={changePopup}>Зарегистрироваться</span></p>
                </form>
            </EscapeOutside>}
        </PopupWithForm>
    )
}