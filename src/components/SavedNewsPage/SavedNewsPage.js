import Header from '../Header/Header';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';

export default function SavedNewsPage(props) {
    return (
        <>
            <div className='page__upside page__upside_auth'>
                <Header loggedIn={props.loggedIn} username={props.username} location={props.location} openPopup={props.openLogPopup} openBurger={props.openBurgerMenu} isBurgerOpen={props.isBurgerOpen} isLogPopupOpen={props.isLogPopupOpen} isRegPopupOpen={props.isRegPopupOpen} />
                <Main location={props.location} />
            </div>
            <NewsCardList location={props.location} />
            <Footer />
        </>
    )
}