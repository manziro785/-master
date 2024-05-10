import React from 'react'
import './userMainInfoModule.css'
import { UserContext } from '../../../App'
import { AuthContext } from '../../../App'


export default function UserMainInfo() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext)
    const [user, setUser] = React.useContext(UserContext)
    console.log(user)



    return (
        <>
            <div className="wrapper-main-info">
                <div className="nickname-box1">
                    <div className="nickname" style={{ marginLeft: '30px' }}>

                    </div>
                    
                </div>

                <div className="personal-box">
                    <p className='title-userinfo'>Персональные данные</p>

                    <div className="wrapper-box-user">
                        <div className="left-user-info">

                            <div className="nickname-box">
                                <div className="nickname">
                                    Email
                                </div>
                                <div className="nickname-info" >
                                    {user.email}
                                </div>
                            </div>

                            <div className="nickname-box">
                                <div className="nickname" >
                                    Years old
                                </div>
                                <div className="nickname-info">
                                    {user.age || "не указано"}
                                </div>
                            </div>

                        </div>
                        <div className="right-user-info">
                            <div className="nickname-box2">
                                <div className="nickname">
                                    Location
                                </div>
                                <div className="nickname-info" >
                                    {user.location_country || "не указано"}
                                </div>
                            </div>

                            <div className="nickname-box2">
                                <div className="nickname">
                                    School
                                </div>
                                <div className="nickname-info" >
                                    {user.school || "не указано"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
           
        </>
    )
}
