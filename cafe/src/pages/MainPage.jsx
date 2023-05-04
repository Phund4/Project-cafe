import '../sass/mainpage/main.sass'
import BearMainpage from '../img/Bear-mainpage.svg'

function MainPage() {
    return (
      <>
        <div className='main'>
            <header className='header-mainpage'>
                <h1 className='header-mainpage__h1'>
                    Подкрепление
                </h1>
                <h1 className='header-mainpage__h1-blur'>
                    Подкрепление
                </h1>
                <img className='header-mainpage__img' src={BearMainpage} alt='Bear'/>
            </header>
            <div className='content-mainpage'></div>
        </div>
      </>
    )
}
  
export default MainPage;