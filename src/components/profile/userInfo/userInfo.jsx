import React from 'react'
import './userInfoModule.css'
import Avatar from '../avatar/avatar.jsx'
import UserMainInfo from '../userMainInfo/userMainInfo.jsx'
export default function UserInfo() {
  return (
    <>
    <div className="user-info-box">
        <div className="header-user-info">
        Профиль
        <div className="btn-save">
        Изменить
        </div>
        </div>
        <Avatar/>
        
       <UserMainInfo/>
    </div>
    </>
  )
}
