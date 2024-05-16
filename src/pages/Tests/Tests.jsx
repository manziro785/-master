import React, {useState, useEffect} from 'react'
import { Header } from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import usericon from "../../assets/header/userr.svg"
import logomain from '../../assets/header/logo (8).svg'
import './TestsModule.css'
import { AuthContext } from '../../App'

export default function Tests() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext);
    const [lessons, setLessons] = useState([])


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
            const response = await axios.get('http://217.151.230.35:545/api/v1/subjects/1/tests/', { headers });
            console.log(response)
            setLessons(response.data)
        } catch (error) {
            console.error('Ошибка при выполнении GET-запроса:', error.message);
        }
    }


  const urls = useParams();
  console.log(urls)


  

  function logout(event) {
    const navigate = useNavigate(); // Используем хук useNavigate для навигации
    setIsAuth(false); // Устанавливаем isAuth в false
    localStorage.removeItem('access'); // Удаляем токен доступа из localStorage
    localStorage.removeItem('refresh'); // Удаляем токен обновления из localStorage
    navigate('/'); // Перенаправляем пользователя на главную страницу
}



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
            
               <h1> Тесты:      </h1>

{/* <div className="footer-wrap">
<div className="footer-wrapper"> */}

        <Footer />
        {/* </div>
        </div> */}
    </>
  )
}
