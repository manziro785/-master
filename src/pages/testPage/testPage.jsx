import React, { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../App';
import TemplatePage from "../../components/TemplatePage.jsx";
import "./testPageModule.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import usericon from "../../assets/header/userr.svg"
import logomain from '../../assets/header/logo (8).svg'
import axios from 'axios';



export function TestPage() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext);
    const [lessions, setLessions] = useState([])

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const accessToken = localStorage.getItem('access');
    
            if (!accessToken) {
                throw new Error('Токен доступа не найден');
            }
    
            const headers = {
                'Authorization': `Bearer ${accessToken}`
            };
            const response = await axios.get('http://217.151.230.35:545/api/v1/subjects/', { headers });
            setLessions(response.data)
        } catch (error) {
            console.error('Ошибка при выполнении GET-запроса:', error.message);
        }
    }

    function logout(event) {
        const navigate = useNavigate(); // Используем хук useNavigate для навигации
        setIsAuth(false); // Устанавливаем isAuth в false
        localStorage.removeItem('access'); // Удаляем токен доступа из localStorage
        localStorage.removeItem('refresh'); // Удаляем токен обновления из localStorage
        navigate('/'); // Перенаправляем пользователя на главную страницу
    }

    // const card = lessions.map((card, index) => {
    //     console.log(card)
    //     return (
    //         <NavLink to={`/lessons/${card.id}`}>
    //             <button key={index} className='english-btn'>
    //                 <span className='topic'>{card.name}</span>
    //                 <span className='language'>{card.language}</span>
    //                 <span className='time'>{card.time}</span>
    //                 <span className='task'>{card.data} </span>
    //             </button>
    //         </NavLink>
    //     )
    // })

    const card = lessions.map((card) => {
        console.log(card); 
        return (
        <NavLink key={card.id} to={`/lessons/${card.id}`}>
            <button className='english-btn'>
                <span className='topic'>{card.name}</span>
                <span className='language'>{card.language}</span>
                <span className='time'>{card.time}</span>
                <span className='task'>{card.data} </span>
            </button>
        </NavLink>
        )
});
        //     console.log(card)


    return (
        <>
        <div className="header-wrapper">
            <div className="container">
            <div className="header">
                <NavLink to='/' className="logo">
                    <img src={logomain} alt="" className="logo-main" />
                </NavLink>
                <div className="navbarr">
                    <div className="custom-tooltip">
                        <img src={usericon} alt="Mini Photo" className="mini-photo" id="person" />
                        <div className="tooltiptext">
                            <NavLink to='/profile'>
                                <button className="sign-up">
                                    Профиль
                                </button>
                            </NavLink>
                            <NavLink to='/'>
                                <button onClick={logout} className="log-in">
                                    Выйти
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className='tests'>
                <h1 style={{ justifyContent: 'center', marginTop: '70px', marginBottom: '50px', fontSize: '50px', alignItems: 'center', display: "flex", fontWeight: '900' }}>Онлайн тесты</h1>
                {isAuth ? (
                    <div className="buttons-container" style={{ marginBottom: '70px' }}>
                        {card}
                    </div>
                ) : (
                    <div>
                        <p>Вы должны войти для доступа к тестам и сохранения результатов</p>
                        <button className='btn-auth' onClick={() => navigate('/login')}>Авторизация</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default TestPage;
