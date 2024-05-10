import React, { useEffect, useState } from 'react';
import './userInfoModule.css';
import Avatar from '../avatar/avatar.jsx';
import UserMainInfo from '../userMainInfo/userMainInfo.jsx';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import { AuthContext } from '../../../App';
import axios from 'axios';

export default function UserInfo() {
    const [user, setUser] = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedUser, setEditedUser] = useState({
        username: user.username,
        age: user.age,
        location_country: user.location_country,
        about_you: user.about_you,
        email: user.email
    });

    const openModal = () => {
        setIsModalOpen(true);
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
            const res = await axios.put(`http://217.151.230.35:545/api/v1/regauth/user-profile/`, editedUser);
            setUser(res.data);
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };    return (
        <>
        <div className="container-profile">
            <div className="user-info-box">
                <div className="header-user-info">
                    Профиль
                    <div className="btn-save" onClick={openModal}>
                        Изменить
                    </div>
                </div>
                <div className="wrapper-container">
                <div className="user-information">
                <Avatar />
                <UserMainInfo />
                </div>
                <div className="wrapper-bio-userinfo">
                    <div className="nickname-box-bio">
                        <div className="nickname-bio">
                            Bio
                        </div>
                        <div className="nickname-info-bio">
                            {user.about_you || "не указано"}
                        </div>
                    </div>
                </div>
                </div>
            </div>
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
                                            name="location_country"
                                            value={editedUser.location_country}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">Биография</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="about_you"
                                            value={editedUser.about_you}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">Имя</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={editedUser.first_name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">Фамилия</div>
                                    <div className="nickname-info">
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={editedUser.last_name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            )}
        </>
    );
}
