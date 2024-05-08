import React from 'react'
import './avatarModule.css'
import { useState } from 'react'
import { UserContext } from '../../../App'


export default function Avatar() {
  const [user, setUser] = React.useContext(UserContext)

  return (
    <>
     <div className="avatar-profile">
           
            <div className="img-avatar-profile">
                <img src= "./src/assets/profile/avatar.svg" alt=""  className="photo-profile"/>
                <div className="overlayy">
                <img src="./src/assets/profile/Vector (1).svg" className="pencil-icon" alt="Pencil Icon" />
      </div>

            </div>
            <div className="nickname-info1">
                        {user.first_name}
                        <br/>
                        {user.last_name}
                        <div className="nickname-avatar">
                        {user.username}
                        </div>
                    </div>
                    
        </div>
    </>
  )
}
