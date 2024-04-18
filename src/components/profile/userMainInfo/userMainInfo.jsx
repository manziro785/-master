import React from 'react'
import './userMainInfoModule.css'
import {UserContext} from '../../../App'


export default function UserMainInfo() {
    const [user, setUser] = React.useContext(UserContext)
    console.log(user)

    

    return (
        <>
            <div className="wrapper-main-info">
                <div className="nickname-box">
                    <div className="nickname">
                        Nickname
                    </div>
                    <div className="nickname-info">
                        {user.username}
                    </div>
                </div>
                <div className="nickname-box">
                    <div className="nickname">
                        Email
                    </div>
                    <div className="nickname-info">
                        {user.email}
                    </div>
                </div>
                <div className="nickname-box">
                    <div className="nickname">
                        Location
                    </div>
                    <div className="nickname-info">
                        {user.location || "не указано"}
                    </div>
                </div>
                <div className="nickname-box">
                    <div className="nickname">
                        Birth date

                    </div>
                    <div className="nickname-info">
                        {user.age || "не указано"}
                    </div>
                </div>
                <div className="nickname-box-bio">
                    <div className="nickname">
                        Bio
                    </div>
                    <div className="nickname-info-bio">
                        {user.bio || "не указано"}
                    </div>
                </div>
            </div>
        </>
    )
}
