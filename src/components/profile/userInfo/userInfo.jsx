import React, {useEffect, useState} from 'react';
import './userInfoModule.css'
import Avatar from '../avatar/avatar.jsx'
import UserMainInfo from '../userMainInfo/userMainInfo.jsx'
import {UserContext} from '../../../App'
import { AuthContext } from '../../../App';
import axios from 'axios';


export default function UserInfo() {

    const [isAuth, setIsAuth] = React.useContext(AuthContext)
    const [user, setUser] = React.useContext(UserContext)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableUser, setEditableUser] = useState(null);
    const [editedUser, setEditedUser] = useState({
        username: '',
        age: '',
        location: '',
        bio: ''
    });

    const openModal = () => {
        setIsModalOpen(true);
        setEditedUser(user); // Устанавливаем текущую информацию о пользователе в состояние для редактирования
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveChanges = async () => {
        try {
            // Отправляем измененные данные на сервер
            const res = await axios.post(`http://217.151.230.35:545/api/v1/regauth/user/${user.id}/`, editedUser, {
                headers: {
                    Authorization: `Bearer ${isAuth.accessToken}`
                }
            });
            setUser(res.data); // Обновляем информацию о пользователе в контексте
            setIsModalOpen(false); // Закрываем модальное окно
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="user-info-box">
                <div className="header-user-info">
                    Профиль
                    <div className="btn-save" onClick={openModal}>
                        Изменить
                    </div>
                </div>
                <Avatar/>

                <UserMainInfo/>

            </div>
            {isModalOpen && (
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-content">
                            <button onClick={handleSaveChanges}>Сохранить</button>
                            <div className="wrapper-main-info">
                                <div className="nickname-box">
                                    <div className="nickname">Никнейм</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="username"
                                            value={editedUser.username}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">Возраст</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="age"
                                            value={editedUser.age}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">Местоположение</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="location"
                                            value={editedUser.location}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">Биография</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="bio"
                                            value={editedUser.bio}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}        </>
    )
}
