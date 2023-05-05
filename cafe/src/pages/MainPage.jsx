import '../sass/mainpage/main.sass'
import BearMainpage from '../img/Bear-mainpage.svg'
import Pizza from '../img/pizza.svg'
import PizzaHover from '../img/pizza-hover.svg'
import Burger from '../img/burger.svg'
import BurgerHover from '../img/burger-hover.svg'
import Beer from '../img/beer.svg'
import BeerHover from '../img/beer-hover.svg'
function MainPage() {
    return (
      <>
        <div className='main'>
            <div className='mainpage-sidebar'>
                <button className="mainpage-sidebar__hamburger"/>
            </div>
            <header className='mainpage-header'>
                <div className="mainpage-header__hamburger">
                    <button className="mainpage-button-hamburger"/>
                </div>
                <h1 className='mainpage-header__h1'>
                    Подкрепление
                </h1>
                <h1 className='mainpage-header__h1-blur'>
                    Подкрепление
                </h1>
                <img className='mainpage-header__img' src={BearMainpage} alt='Bear'/>
            </header>
            <div className='mainpage-content'>
                <h2 className='mainpage-content__h2 mainpage-content__h2_menu'>
                    МЕНЮ
                </h2>
                <div className='mainpage-content__icons'>
                    <div className='pizza-container mainpage-icon-container'>
                        <img className='mainpage-icon-container__icon' src={Pizza}></img>
                        <img className='mainpage-icon-container__icon-hover' src={PizzaHover}></img>
                    </div>
                    <div className='burger-container mainpage-icon-container'>
                        <img className='mainpage-icon-container__icon' src={Burger}></img>
                        <img className='mainpage-icon-container__icon-hover' src={BurgerHover}></img>
                    </div>
                    <div className='beer-container mainpage-icon-container'>
                        <img className='mainpage-icon-container__icon' src={Beer}></img>
                        <img className='mainpage-icon-container__icon-hover' src={BeerHover}></img>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
  
export default MainPage;