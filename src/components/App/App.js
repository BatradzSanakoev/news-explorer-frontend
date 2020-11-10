import React from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';

function App() {
  console.log(useLocation());

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [username, setUsername] = React.useState('Batradz');

  return (
    <div className='page'>
      <Route exact path='/'>
        <div className='page__upside'>
          <Header loggedIn={loggedIn} username={username} />
          <Main />
        </div>
        <About />
        <Footer />
      </Route>
      <Route path='/saved-news'>

      </Route>
    </div>
  );
}

export default App;
