import '../sass/profile/main.sass'
import ProfileHuman from '../img/profile-human.svg'
function Profile() {
    return (
        <>
            <div className='profile-main'>
                <div className="profile-sidebar">
                    <a href="/" className="profile-sidebar__hamburger" />
                </div>
                <header className="profile-header">
                    <h1 className="profile-header__h1-blur">Подкрепление</h1>
                    <div className='profile-header__h2'>
                        <img className='profile-header__img' src={ProfileHuman}></img>
                        <h2 className='profile-header__p'>ПРОФИЛЬ</h2>
                    </div>
                </header>
                <div className='profile-content'>
                    
                </div>
            </div>
        </>
    );
}

export default Profile;