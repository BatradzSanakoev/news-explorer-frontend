import React from 'react';
import EscapeOutside from 'react-escape-outside';
import { Formik } from 'formik';
import * as yup from 'yup';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Login({ isOpen, onClose, changePopup, handleLogin, authError }) {

    const validationSchema = yup.object().shape({
        email: yup.string().email('Введен некорретный email!').required('Обязательное поле для заполнения!'),
        password: yup.string().typeError('Введите корректный пароль!').min(8, 'Пароль должен состоять не менее, чем из 8 символов!').required('Обязательное поле для заполнения!')
    });

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose}>
            {isOpen && <EscapeOutside onEscapeOutside={onClose}>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        handleLogin(values.email, values.password);
                        // onClose();
                        values.email = '';
                        values.password = '';
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <form className='popup__form' onSubmit={handleSubmit} noValidate>
                            <h2 className='popup__form-title'>Вход</h2>
                            <fieldset className='popup__form-input'>
                                <p className='popup__form-label popup__form-label_login'>Email</p>
                                <input
                                    type='email'
                                    className='popup__input'
                                    placeholder='Введите почту'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='popup__form-error-text'>{touched.email && errors.email}</span>
                                <p className='popup__form-label popup__form-label_login'>Password</p>
                                <input
                                    type='password'
                                    className='popup__input'
                                    placeholder='Введите пароль'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='popup__form-error-text'>{touched.password && errors.password}</span>
                                <p className='popup__form-error-text popup__form-error-text_register'>{authError && 'Ошибка при авторизации'}</p>
                                <button
                                    type='submit'
                                    className='popup__button'
                                    disabled={!isValid || !dirty}
                                >
                                    Войти
                                </button>
                            </fieldset>
                            <p className='popup__down-text'>или <span className='popup__span-text' onClick={changePopup}>Зарегистрироваться</span></p>
                        </form>
                    )}
                </Formik>
            </EscapeOutside>}
        </PopupWithForm>
    )
}