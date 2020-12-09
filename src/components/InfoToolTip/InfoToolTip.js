import React from 'react';
import EscapeOutside from 'react-escape-outside';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function InfoToolTip({ isOpen, onClose, changePopup, popupName }) {

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} popupName={popupName}>
            {isOpen && <EscapeOutside onEscapeOutside={onClose}>
                <form className='popup__form' noValidate>
                    <h2 className='popup__form-title'>Пользователь успешно зарегистрирован!</h2>
                    <p className='popup__down-text'><span className='popup__span-text' onClick={changePopup}>Войти</span></p>
                </form>
            </EscapeOutside>}
        </PopupWithForm>
    )
}