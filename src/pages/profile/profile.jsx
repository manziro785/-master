import React from 'react'
import './profileModule.css'
import UserInfo from '../../components/profile/userInfo/userInfo.jsx'
import {NavLink, useNavigate} from 'react-router-dom'
import Awards from '../../components/profile/awards/awards.jsx'
import Active from '../../components/profile/active/active.jsx'
import {UserContext} from '../../App'
import {AuthContext} from '../../App';
import logomain from '../../assets/header/logo (8).svg'
import usericon from "../../assets/header/userr.svg"



export function ProfilePage() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext)

    const [user, setUser] = React.useContext(UserContext)

    function logout(event) {
        const navigate = useNavigate(); // Используем хук useNavigate для навигации
        setIsAuth(false); // Устанавливаем isAuth в false
        localStorage.removeItem('access'); // Удаляем токен доступа из localStorage
        localStorage.removeItem('refresh'); // Удаляем токен обновления из localStorage
        navigate('/'); // Перенаправляем пользователя на главную страницу
      }
      
    return (
        <>
           <div className="header">
                <NavLink to='/' className="logo">
                    <img src={logomain} alt="" className="logo-main" />
                </NavLink>
                <div className="navbarr">
                    <div className="custom-tooltip">
                        <img src={usericon} alt="Mini Photo" className="mini-photo" id="person" />
                        <div className="tooltiptext">
                            {/* <NavLink to='/profile'>
                                <button className="sign-up">
                                    Профиль
                                </button>
                            </NavLink> */}
                            <NavLink to='/'>
                                <button onClick={logout} className="log-in">
                                    Выйти
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-wrapper-profile">
                <div className="left-wrapper-profile">
                    <UserInfo/>
                    {/* <Awards/> */}
                    {/* <img src="./src/assets/profile/Frame 43.svg" alt="" className='dostizh' /> */}
                </div>
                <div className="right-wrapper-profile">
                    {/* <Active/> */}
                    <img src="./src/assets/common/activity.svg" alt="" className='dostizh1' />

                </div>
            </div>

        </>
    )
}