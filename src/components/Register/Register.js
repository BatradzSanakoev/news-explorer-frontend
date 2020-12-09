import React from 'react';
import EscapeOutside from 'react-escape-outside';
import { Formik } from 'formik';
import * as yup from 'yup';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Register({ isOpen, onClose, changePopup, handleRegister, regError }) {

    const validationSchema = yup.object().shape({
        email: yup.string().email('Введен некорретный email!').required('Обязательное поле для заполнения!'),
        password: yup.string().typeError('Введите корректный пароль!').min(8, 'Пароль должен состоять не менее, чем из 8 символов!').required('Обязательное поле для заполнения!'),
        name: yup.string().typeError('Введите корректное имя!').min(2, 'Имя должно состоять не менее, чем из 2 символов!').max(30, 'Имя должно состоять не более, чем из 30 символов!').required('Обязательное поле для заполнения!')
    });

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose}>
            {isOpen && <EscapeOutside onEscapeOutside={onClose}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        name: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        handleRegister(values.email, values.password, values.name);
                        values.email = '';
                        values.password = '';
                        values.name = '';
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <form className='popup__form' onSubmit={handleSubmit} noValidate>
                            <h2 className='popup__form-title'>Регистрация</h2>
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
                                <p className='popup__form-label popup__form-label_register'>Имя</p>
                                <input
                                    type='text'
                                    className='popup__input'
                                    placeholder='Введите имя'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='popup__form-error-text'>{touched.name && errors.name}</span>
                                <p className='popup__form-error-text popup__form-error-text_register'>{regError && 'Такой пользователь уже существует'}</p>
                                <button
                                    type='submit'
                                    className='popup__button'
                                    disabled={!isValid || !dirty}
                                >
                                    Зарегистрироваться
                                </button>
                            </fieldset>
                            <p className='popup__down-text'>или <span className='popup__span-text' onClick={changePopup}>Войти</span></p>
                        </form>
                    )}
                </Formik>
            </EscapeOutside>}
        </PopupWithForm>
    )
}

