import React from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {

  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [username, setUsername] = React.useState('Batradz');
  const [isLogPopupOpen, setIsLogPopupOpen] = React.useState(false);
  const [isRegPopupOpen, setIsRegPopupOpen] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  const onClose = () => {
    setIsLogPopupOpen(false);
    setIsRegPopupOpen(false);
  };

  const openLogPopup = () => {
    setIsLogPopupOpen(true);
  };

  const openRegPopup = () => {
    setIsRegPopupOpen(true);
  };

  const changePopup = (evt) => {
    onClose();
    evt.target.textContent === 'Зарегистрироваться' ? openRegPopup() : openLogPopup();
  };

  const openBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <Login isOpen={isLogPopupOpen} onClose={onClose} changePopup={changePopup} />
      <Register isOpen={isRegPopupOpen} onClose={onClose} changePopup={changePopup} />
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <div className='page__upside'>
              <Header loggedIn={loggedIn} username={username} location={location} openPopup={openLogPopup} openBurger={openBurgerMenu} isBurgerOpen={isBurgerOpen} isLogPopupOpen={isLogPopupOpen} isRegPopupOpen={isRegPopupOpen} />
              <Main location={location} />
            </div>
            <NewsCardList location={location} />
            <Preloader />
            <About />
            <Footer />
          </Route>
          <Route path='/saved-news'>
            <div className='page__upside page__upside_auth'>
              <Header loggedIn={loggedIn} username={username} location={location} openPopup={openLogPopup} openBurger={openBurgerMenu} isBurgerOpen={isBurgerOpen} isLogPopupOpen={isLogPopupOpen} isRegPopupOpen={isRegPopupOpen} />
              <Main location={location} />
            </div>
            <NewsCardList location={location} />
            <Footer />
          </Route>
        </Switch>
      </div>

    </>
  );
}

export default App;
