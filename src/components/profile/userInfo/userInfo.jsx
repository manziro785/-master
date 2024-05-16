import React, { useEffect, useState } from 'react';
import './userInfoModule.css';
import Avatar from '../avatar/avatar.jsx';
import UserMainInfo from '../userMainInfo/userMainInfo.jsx';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import { AuthContext } from '../../../App';
import axios from 'axios';
import openEye from '../../../assets/auth/open-eye.svg'
import closedEye from "../../../assets/auth/close-eye.svg"


export default function UserInfo() {
    const [user, setUser] = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPremium, setIsPremium] = useState(false);

    const [editedUser, setEditedUser] = useState({
        username: user.username,
        age: user.age,
        location_country: user.location_country,
        about_you: user.about_you,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        


    });

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


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


    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://217.151.230.35:545/api/v1/regauth/change-password/', {
                old_password: oldPassword,
                new_password: newPassword
            });
            console.log('Пароль успешно изменен:', response.data);
        } catch (error) {
            console.error('Произошла ошибка:', error);
            alert('Ваш старый пароль неверен')
        }
        // } else {
        //     console.log('Старый и новый пароли не совпадают');
        // }
    };

    const [passwordOneVisible, setPasswordOneVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordOneVisibility = () => {
    setPasswordOneVisible(!passwordOneVisible);
  };

  useEffect(() => {
    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}, [openModal]);

useEffect(() => {
    if (closeModal) {
        document.body.style.overflow = '';
    }

}, [closeModal]);



 // если добавить сюда эти штуки закоммиченные то работает изменеие данных но аватар нет

useEffect(() => {
    if (!editedUser.username) {
      setEditedUser(user);
    }
  }, [user, editedUser]);

    return (
        <>
            <div className="container-profile">
                <div className="user-info-box">
                {isPremium && (
 <div className="header-user-info">
                    <div className="header-user-info-premium">
                        Премиум профиль
                        </div>
                        <div className="btn-save" onClick={openModal}>
                            Изменить
                        </div>
                    </div>
                )}
                                {!isPremium && (
                                    <div className="header-user-info">
                                    Профиль
                                    <div className="btn-save" onClick={openModal}>
                                        Изменить
                                    </div>
                                </div> 

)}
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
                <div className="img-box-awards">
                <img src="./src/assets/profile/activity (1).svg" alt="" />
                <img src="./src/assets/profile/activity (2).svg" alt="" />
                </div>

            </div>

            {isModalOpen && (
                <div className="modal-container">
                    <div className="modal">
                        <div className="close-modal-btn" onClick={closeModal}>
                            <img src="./src/assets/common/close.svg" alt="" onClick={closeModal} />
                        </div>
                        <div className="modal-content">

                            <div className="wrapper-main-info">
                                <div className="personal-things">
                                    <div className="title-modal">
                                        Персональные данные
                                    </div>
                                    <div className="container-modal-personal">
                                        <div className="left-side-modal">

                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Никнейм</div>
                                                <div className="nickname-info">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className='input-modal'
                                                        value={editedUser.username}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Фамилия</div>
                                                <div className="nickname-info">
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        className='input-modal'

                                                        value={editedUser.last_name}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Имя</div>
                                                <div className="nickname-info">
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        className='input-modal'

                                                        value={editedUser.first_name}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-side-modal">
                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Местоположение</div>
                                                <div className="nickname-info">
                                                    <input
                                                        type="text"
                                                        name="location_country"
                                                        className='input-modal'

                                                        value={editedUser.location_country}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Возраст</div>
                                                <div className="nickname-info">
                                                    <input
                                                        type="text"
                                                        name="age"
                                                        className='input-modal'

                                                        value={editedUser.age}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">email</div>
                                                <div className="nickname-info">
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        className='input-modal'

                                                        value={editedUser.email}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-things">
                                    <div className="title-change-pass">
                                        Поменять пароль
                                    </div>
                                    <form action="" className='change-pass'>
                                        <div className="change-pass-inputs">
                                        <div className="change-pass-cont">
                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Старый пароль</div>
                                                <div className="nickname-info">
                                                    <input type={passwordVisible ? 'text' : 'password'} className='input-modal-pass' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />

                                                </div>
                                            </div>
                                            <img
                                                src={passwordVisible ? closedEye : openEye}
                                                alt="eye-icon"
                                                onClick={togglePasswordVisibility}
                                                style={{ cursor: 'pointer', width: '30px' }}
                                                className='img-eyee'
                                            />
                                        </div>
                                        <div className="change-pass-cont" style={{marginRight: '20px'}}>

                                            <div className="nickname-box-modal">
                                                <div className="nickname-modal">Новый пароль</div>
                                                <div className="nickname-info">
                                                    <input type={passwordOneVisible ? 'text' : 'password'} className='input-modal-pass' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

                                                </div>
                                            </div>
                                            <img
                                                src={passwordOneVisible ? closedEye : openEye}
                                                alt="eye-icon"
                                                onClick={togglePasswordOneVisibility}
                                                style={{ cursor: 'pointer', width: '30px'  }}
                                                className='img-eyee'
                                            />
                                        </div>
                                        </div>

<div className="btn-submit-pass">
                                        <input type="button" className='btn-pass' value='Отправить' onClick={handleSubmit} />
                                        </div>
                                    </form>

                                </div>

                                <div className="personal-things" style={{marginBottom: '30px'}}>
<div className="title-bio-modal">
    Био
</div>
                                <div className="nickname-box">
                                    <div className="nickname-info11">
                                        <input
                                            type="text"
                                            name="about_you"
                                            className='input-bio'

                                            value={editedUser.about_you}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="btn-save-modal">
                            <button onClick={handleSaveChanges} className='btn-save-changes-modal'>Сохранить</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
