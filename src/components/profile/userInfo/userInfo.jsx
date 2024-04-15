import React, { useContext, useState, useEffect } from 'react';
import './userInfoModule.css'
import Avatar from '../avatar/avatar.jsx'
import UserMainInfo from '../userMainInfo/userMainInfo.jsx'
import { UserContext } from '../../../App'
import axios from 'axios';


export default function UserInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = React.useContext(UserContext)
    const [editableUser, setEditableUser] = useState(null);
    const [editedLocation, setEditedLocation] = useState('');
    const [editedAge, setEditedAge] = useState('');
    const [editedBio, setEditedBio] = useState('');



    //   const openModal = () => {
    //     setIsModalOpen(true);
    //     if (user && user.location) {
    //       setEditedLocation(user.location);
    //     }
    //     if (user && user.age) {
    //       setEditedAge(user.age);
    //     }
    //     if (user && user.bio) {
    //         setEditedBio(user.bio);
    //       }
    //     setEditableUser({ ...user });
    //   };

    const openModal = () => {
        setIsModalOpen(true);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setEditableUser(parsedUser);
            setEditedLocation(parsedUser.location || ''); // Установка значения по умолчанию для editedLocation, если оно не определено
            setEditedAge(parsedUser.age || ''); // Установка значения по умолчанию для editedAge, если оно не определено
            setEditedBio(parsedUser.bio || ''); // Установка значения по умолчанию для editedBio, если оно не определено
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'location') {
            setEditedLocation(value);
        }
        else if (name === 'age') {
            setEditedAge(value);
        }
        else if (name === 'bio') {
            setEditedBio(value);
        }
        setEditableUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };




    const handleSaveChanges = async () => {
        if (!editableUser.username || !editableUser.email) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        const access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNDUxMjY0LCJpYXQiOjE3MTI4NDY0NjQsImp0aSI6IjZkOTE4YjQwMTM0YjQ1ZmM5Y2Y1ZmMzMjE0MGM1OWU2IiwidXNlcl9pZCI6MX0.Pym5ktMmb9b4KOx6QsMhGIG65D2on8sTDzKuSBrvw4A'

        try {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access;
            let res = await axios.post('http://217.151.230.35:545/api/v1/regauth/user/<int:pk>/', {
            newUsername: editableUser.username
            });

            setUser(editableUser);
            localStorage.setItem('user', JSON.stringify(editableUser));
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    //   async function checkAuth (access) {
    //     // console.log(access)
    //     axios.defaults.headers.common = {'Authorization': 'Bearer ' + access}
    //     // let res = axios.post('http://217.151.230.35:888/api/v1/regauth/user-list/')
    //     let res = axios.get('http://217.151.230.35:888/api/v1/regauth/user-info/')

    //     .then(response => {
    //       setIsAuth(true)
    //       setUser(response.data)
    //       // console.log(response.data)
    //     })
    //     .catch(error => {
    //       console.log(error)

    //     } );
    //   }

    //     setUser(editableUser);
    //     localStorage.setItem('user', JSON.stringify(editableUser));
    //     setEditedAge(`${editedAge} лет`);
    //     setIsModalOpen(false);    
    //   };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [setUser]);
    return (
        <>
            <div className="user-info-box">
                <div className="header-user-info">
                    Профиль
                    <div className="btn-save" onClick={openModal}>
                        Изменить
                    </div>
                </div>
                <Avatar />

                <UserMainInfo />

            </div>
            {isModalOpen && (
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-content">
                            {/* <div className="wrapper-userinfo"> */}
                            <button onClick={handleSaveChanges}>
                                Сохранить
                            </button>
                            <div className="wrapper-main-info">
                                <div className="nickname-box">
                                    <div className="nickname">
                                        Nickname
                                    </div>
                                    <div className="nickname-info">
                                        {editableUser && (
                                            <input
                                                type="text"
                                                name="username"
                                                value={editableUser.username}
                                                onChange={handleInputChange}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">
                                        Email
                                    </div>
                                    <div className="nickname-info">
                                        {editableUser && (
                                            <input
                                                type="email"
                                                name="email"
                                                value={editableUser.email}
                                                onChange={handleInputChange}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">
                                        Location
                                    </div>
                                    <div className={`nickname-info ${user.location === 'не указано' ? 'red-text' : ''}`}>
                                        {editableUser && (
                                            <input
                                                type="text"
                                                name="location"
                                                value={editedLocation}
                                                onChange={handleInputChange}
                                            />
                                        )}                    </div>
                                </div>
                                <div className="nickname-box">
                                    <div className="nickname">
                                        Birth date

                                    </div>
                                    <div className="nickname-info">
                                        {editableUser && (
                                            <input
                                                type="date"
                                                name="age"
                                                value={editedAge || ''}
                                                onChange={handleInputChange}
                                            />
                                        )}                     
                                    </div>
                                </div>
                                <div className="nickname-box-bio">
                                    <div className="nickname">
                                        Bio
                                    </div>
                                    <div className="nickname-info-bio">
                                        {editableUser && (
                                            <input
                                                type="text"
                                                name="bio"
                                                value={editedBio || ''}
                                                onChange={handleInputChange}
                                            />
                                        )}                                           
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                // </div>
            )}
        </>
    )
}
