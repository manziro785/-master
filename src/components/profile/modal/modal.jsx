import React, { useState } from 'react';
import axios from 'axios';
import './modal.css'

const Modal = ({ isOpen, onClose }) => {
    const [editedUser, setEditedUser] = useState({
      username: '',
      email: '',
      location: '',
      age: '',
      bio: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedUser(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async () => {
      try {
        // Отправляем запрос на бэкенд для обновления информации о пользователе
        const response = await axios.post('http://example.com/api/user/update', editedUser);
        console.log('Обновление прошло успешно!', response.data);
        onClose(); // Закрываем модальное окно после успешного обновления
      } catch (error) {
        console.error('Ошибка при обновлении информации о пользователе:', error);
      }
    };
  
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Изменение информации о пользователе</h2>
          <form onSubmit={handleSubmit}>
            <label>Имя пользователя:</label>
            <input type="text" name="username" value={editedUser.username} onChange={handleChange} />
            <label>Email:</label>
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
            <label>Местоположение:</label>
            <input type="text" name="location" value={editedUser.location} onChange={handleChange} />
            <label>Возраст:</label>
            <input type="text" name="age" value={editedUser.age} onChange={handleChange} />
            <label>Биография:</label>
            <textarea name="bio" value={editedUser.bio} onChange={handleChange}></textarea>
            <button type="submit">Сохранить изменения</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Modal;