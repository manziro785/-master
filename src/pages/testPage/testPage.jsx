import React, {useContext} from 'react';
import {AuthContext} from '../../App';
import TemplatePage from "../../components/TemplatePage.jsx";
import {useNavigate} from "react-router-dom";
import "./testPageModule.css";

export function TestPage() {
    const navigate = useNavigate();
    const [isAuth] = useContext(AuthContext);

    return (
        <TemplatePage>
            <div className='tests'>
                <h1 style={{justifyContent: 'center', alignItems: 'center', display: "flex"}}>Онлайн тесты</h1>
                {isAuth ? (
                    <div className="buttons-container">
                        <button className='math-btn' onClick={() => navigate('/test/math')}>
                            <span className='topic'>Математика</span>
                            <span className='language'>RU</span>
                            <span className='time'>Время: 30 мин</span>
                            <span className='task'>Количество заданий: 30 </span>
                        </button>
                        <button className='english-btn' onClick={() => navigate('/test/english')}>
                            <span className='topic'>Английский язык</span>
                            <span className='language'>EU</span>
                            <span className='time'>Время: 60 мин</span>
                            <span className='task'>Количество заданий: 50 </span>
                        </button>
                        <button className='chemistry-btn' onClick={() => navigate('/test/chemistry')}>
                            <span className='topic'>Химия</span>
                            <span className='language'>RU</span>
                            <span className='time'>Время: 80 мин</span>
                            <span className='task'>Количество заданий: 40 </span>
                        </button>
                        <button className='russian-btn' onClick={() => navigate('/test/russian')}>
                            <span className='topic'>Русский язык</span>
                            <span className='language'>RU</span>
                            <span className='time'>Время: 30 мин</span>
                            <span className='task'>Количество заданий: 30 </span></button>
                        <button className='physics-btn' onClick={() => navigate('/test/physics')}>
                            <span className='topic'>Физика</span>
                            <span className='language'>RU</span>
                            <span className='time'>Время: 80 мин</span>
                            <span className='task'>Количество заданий: 40 </span>
                        </button>
                        <button className='history-btn' onClick={() => navigate('/test/history')}>
                            <span className='topic'>История</span>
                            <span className='language'>RU</span>
                            <span className='time'>Время: 80 мин</span>
                            <span className='task'>Количество заданий: 40 </span>
                        </button>
                    </div>
                ) : (
                    <div>
                        <p>Вы должны войти для доступа к тестам и сохранения результатов</p>
                        <button className='btn-auth' onClick={() => navigate('/login')}>Авторизация</button>
                    </div>
                )}
            </div>
        </TemplatePage>
    );
}

export default TestPage;
