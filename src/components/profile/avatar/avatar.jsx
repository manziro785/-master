// import React from 'react'
// import './avatarModule.css'
// import { useState } from 'react'
// import { UserContext } from '../../../App'
// import axios from 'axios'



// export default function Avatar() {
//   const [user, setUser] = React.useContext(UserContext)
//   // const [avatar, setAvatar] = useState('./src/assets/profile/avatar.svg' || `http://217.151.230.35:545/api/v1/regauth/user-profile${user.avatar}` ); // Путь к изображению по умолчанию
//   const [avatar, setAvatar] = useState(user.avatar ? `http://217.151.230.35:545${user.avatar}` : './src/assets/profile/avatar.svg');



//   const handleAvatarChange = async (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
  
//     reader.onload = async () => {
//       setAvatar(reader.result);
  
//       const formData = new FormData();
//       formData.append('avatar', file);
//       formData.append('username', user.username); // Предполагается, что у вас есть доступ к имени пользователя
//       formData.append('email', user.email); // Предполагается, что у вас есть доступ к адресу электронной почты пользователя
//       formData.append('location_country', user.location_country); // Предполагается, что у вас есть доступ к стране пользователя
  
//       try {
//         await axios.put(`http://217.151.230.35:545/api/v1/regauth/user-profile/`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         // После успешной отправки запроса вы можете выполнить какие-то дополнительные действия, если это необходимо
//         // Например, обновить состояние вашего компонента или показать уведомление об успешной загрузке
//       } catch (error) {
//         console.error('Error uploading avatar:', error);
//       }
//     };
  
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
  


//   return (
//     <>

//       <div className="avatar-profile">
//         <label htmlFor="avatarInput" className="img-avatar-profile" style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '43px' }}>
//           <div className="overlayy">
//             <img src="./src/assets/profile/Vector (1).svg" className="pencil-icon" alt="Pencil Icon" />
//           </div>
//         </label>
//         <input
//           type="file"
//           id="avatarInput"
//           accept="image/*"
//           style={{ display: 'none' }}
//           onChange={handleAvatarChange}
//         />
//         <img src={`http://217.151.230.35:545${user.avatar}`} alt="Avatar" className="photo-profile" />
//         <div className="nickname-info1">
//           {user.first_name}
//           <br />
//           {user.last_name}
//           <div className="nickname-avatar">
//             {user.username}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
import React, { useContext, useState } from 'react';
import axios from 'axios';
import './avatarModule.css';
import { UserContext } from '../../../App';

export default function Avatar() {
  const [user, setUser] = React.useContext(UserContext);
  const defaultAvatarUrl = './src/assets/profile/avatar.svg';
  const [avatar, setAvatar] = useState(user.avatar ? `http://217.151.230.35:545${user.avatar}` : defaultAvatarUrl);

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {

      const timestamp = Date.now(); // Генерация текущего времени
  setAvatar(`${reader.result}?t=${timestamp}`); 

      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('username', user.username);
      formData.append('email', user.email);
      formData.append('location_country', user.location_country);

      try {
        await axios.put(`http://217.151.230.35:545/api/v1/regauth/user-profile/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        console.error('Error uploading avatar:', error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="avatar-profile">
      <label htmlFor="avatarInput" className="img-avatar-profile" style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'cover',zIndex:'10', backgroundPosition: 'center', borderRadius: '43px' }}>
        <div className="overlayy">
          <img src="./src/assets/profile/Vector (1).svg" className="pencil-icon" alt="Pencil Icon" />
        </div>
      </label>
      <input
        type="file"
        id="avatarInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleAvatarChange}
      />
      {/* <img src={`http://217.151.230.35:545/media/avatars/akbar_9R6iRR5.jpeg`} alt="sdsf"/> */}

      <div className="nickname-info1">
        {user.first_name}
        <br />
        {user.last_name}
        <div className="nickname-avatar">
          {user.username}
        </div>
      </div>
    </div>
  );
}

