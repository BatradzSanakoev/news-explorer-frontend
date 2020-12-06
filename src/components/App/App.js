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
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';

import MainApi from '../../utils/MainApi';
import NewsApi from '../../utils/NewsApi';

function App() {

  const location = useLocation();
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [news, setNews] = React.useState([]);
  const [isLogPopupOpen, setIsLogPopupOpen] = React.useState(false);
  const [isRegPopupOpen, setIsRegPopupOpen] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const [newsRow, setNewsRow] = React.useState(0);
  const [isSearchComplete, setIsSearchComplete] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isSearchLoading, setIsSearchLoading] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [isSearchZero, setIsSearchZero] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');
  const [keywords, setKeywords] = React.useState({});
  const [addedArticles, setAddedArticles] = React.useState([]);

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

  React.useEffect(() => {
    MainApi.getUser()
      .then((res) => {
        if (!res) return Promise.reject('Unauthorized');
        setLoggedIn(true);
        setCurrentUser(res);
        setUsername(res.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogin = (email, password) => {
    MainApi.authorize(email, password)
      .then(() => {
        MainApi.getUser()
          .then((res) => {
            setCurrentUser(res.data);
            setUsername(res.name);
          })
          .catch((err) => console.log(err));
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (email, password, name) => {
    MainApi.register(email, password, name)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSignout = () => {
    MainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        // setIsSearchComplete(false);
        history.push('/');
      });
  };

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('news'))) {
      setIsSearchComplete(true);
      setNews(JSON.parse(localStorage.getItem('news')));
      setKeyword(JSON.parse(localStorage.getItem('keyword')));
    } else localStorage.removeItem('news');
  }, []);

  const handleSendRequest = (request) => {
    setNews([]);
    setIsSearching(true);
    setIsSearchLoading(true);
    setIsSearchError(false);
    setIsSearchComplete(false);
    setIsSearchZero(false);
    NewsApi.sendRequest(request)
      .then((res) => {
        if (res.articles.length === 0) {
          setIsSearchLoading(false);
          setIsSearchZero(true);
          return;
        }
        localStorage.setItem('news', JSON.stringify(res.articles));
        localStorage.setItem('keyword', JSON.stringify(keywordEdit(request)));
        setKeyword(keywordEdit(request));
        setNews(res.articles);
        setIsSearchLoading(false);
        setIsSearchComplete(true);
        setNewsRow(0);
      })
      .catch((err) => {
        console.log(err);
        setIsSearchLoading(false);
        setIsSearchError(true);
      })
      .finally(() => {
        console.log('Search is completed');
        setIsSearching(false);
      });
  };

  const showMoreNewsButton = () => {
    setNewsRow(newsRow + 1);
  };

  const articleAddAndRemove = (article) => {
    const articleReq = {
      keyword: article.keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source,
      link: article.url,
      image: article.urlToImage
    };

    const savedArticle = addedArticles.find((item) => item.date === articleReq.date && item.link === articleReq.link);

    if (!savedArticle) {
      MainApi.createArticle(articleReq)
        .then((addedArticle) => setAddedArticles([...addedArticles, addedArticle]))
        .catch((err) => console.log(err));
    } else {
      MainApi.deleteArticle(savedArticle._id)
        .then(() => setAddedArticles(addedArticles.filter((articles) => articles._id !== savedArticle._id)))
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    loggedIn && MainApi.getArticles()
      .then((res) => res && setAddedArticles(res));
  }, [currentUser]);

  React.useEffect(() => {
    loggedIn && MainApi.getArticles()
      .then((res) => {
        if (res) {
          const savedKeywords = addedArticles.map((item) => keywordEdit(item.keyword));
          localStorage.setItem('keywords', JSON.stringify(savedKeywords));
          setKeywords(savedKeywords);
        }
      });
  }, [addedArticles]);

  const keywordEdit = (word) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      newWord += (!i || word[i - 1] === ' ') ? word[i].toUpperCase() : word[i];
    }
    return newWord.replace(/ /gi, '');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Login isOpen={isLogPopupOpen} onClose={onClose} changePopup={changePopup} handleLogin={handleLogin} />
      <Register isOpen={isRegPopupOpen} onClose={onClose} changePopup={changePopup} handleRegister={handleRegister} />

      <div className='page'>
        <Switch>

          <Route exact path='/'>

            <div className='page__upside'>
              <Header
                loggedIn={loggedIn}
                username={username}
                location={location}
                openPopup={openLogPopup}
                openBurger={openBurgerMenu}
                isBurgerOpen={isBurgerOpen}
                isLogPopupOpen={isLogPopupOpen}
                isRegPopupOpen={isRegPopupOpen}
                handleSignout={handleSignout}
              />
              <Main
                location={location}
                handleSendRequest={handleSendRequest}
              />
            </div>
            <Preloader
              isSearchError={isSearchError}
              isSearchLoading={isSearchLoading}
              isSearching={isSearching}
              isSearchZero={isSearchZero}
            />
            <NewsCardList
              loggedIn={loggedIn}
              location={location}
              isSearchComplete={isSearchComplete}
              news={news}
              showMoreNewsButton={showMoreNewsButton}
              newsRow={newsRow}
              articleAddAndRemove={articleAddAndRemove}
              keyword={keyword}
              addedArticles={addedArticles}
            />
            <About />
            <Footer />

          </Route>

          <ProtectedRoute
            path='/saved-news'
            component={SavedNewsPage}
            loggedIn={loggedIn}
            username={username}
            location={location}
            openPopup={openLogPopup}
            openBurger={openBurgerMenu}
            isBurgerOpen={isBurgerOpen}
            isLogPopupOpen={isLogPopupOpen}
            isRegPopupOpen={isRegPopupOpen}
            news={news}
            addedArticles={addedArticles}
            keywords={keywords}
            handleSignout={handleSignout}
            articleAddAndRemove={articleAddAndRemove}
          />

          {/* <Route path='/saved-news'>
            <div className='page__upside page__upside_auth'>
              <Header loggedIn={loggedIn} username={username} location={location} openPopup={openLogPopup} openBurger={openBurgerMenu} isBurgerOpen={isBurgerOpen} isLogPopupOpen={isLogPopupOpen} isRegPopupOpen={isRegPopupOpen} />
              <Main location={location} />
            </div>
            <NewsCardList location={location} />
            <Footer />
          </Route> */}

        </Switch>
      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
