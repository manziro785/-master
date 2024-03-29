import React from 'react'
import './avatarModule.css'

export default function Avatar() {
  return (
    <>
     <div className="avatar-profile">
            <div className="title-avatar-profile">
            Фото
            </div>
            <div className="img-avatar-profile">
              
                <img src="./src/assets/profile/Rectangle 36.svg" alt="" />
           <div className="btns-img-profile">
           <div className="change-img-profile">
           Изменить
           </div>
           <div className="del-img-profile">
           Удалить
           </div>
           </div>

            </div>
        </div>
    </>
  )
}
