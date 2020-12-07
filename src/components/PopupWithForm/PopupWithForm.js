import React from 'react';

import Close from '../../images/close.png';

export default function PopupWithForm({ isOpen, onClose, children, popupName }) {
    return (
        <section className={`popup ${isOpen && 'popup-visible'}`}>
            <div className={`popup__container ${popupName === 'info' && 'popup__container_mod'}`}>
                <button className='popup__close-button' onClick={onClose}>
                    <img src={Close} alt='закрыть' className='popup__close-icon' />
                </button>
                {children}
            </div>
        </section>
    )
}