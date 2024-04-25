import React from 'react'
import './userMainInfoModule.css'
import { UserContext } from '../../../App'


export default function UserMainInfo() {
    const [user, setUser] = React.useContext(UserContext)
    console.log(user)



    return (
        <>
            <div className="wrapper-main-info">
                <div className="nickname-box1">
                    <div className="nickname" style={{marginLeft: '30px'}}>

                    </div>
                    <div className="nickname-info1">
                        Akbar <br />Rysbekov
                        {/* {user.username} */}
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
                        <div className="nickname-info" style={{marginLeft: '82px'}}>
                            {/* {user.email} */}
                            manziro785@gmail.com
                        </div>
                    </div>
                    <div className="nickname-box">
                        <div className="nickname" style={{marginLeft: '80px'}}>
                            Date of birth
                        </div>
                        <div className="nickname-info">
                            {/* {user.age || "не указано"} */}
                            10 ноября 2006
                        </div>
                    </div>
                    </div>
                    <div className="right-user-info">
                    <div className="nickname-box">
                        <div className="nickname">
                        Location

                        </div>
                        <div className="nickname-info" style={{marginLeft: '45px'}}>
                            {/* {user.location || "не указано"} */}
                            Бишкек, Чуйская обл.
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

<div className="wrapper-bio-userinfo">
                <div className="nickname-box-bio">
                    <div className="nickname-bio">
                        Bio
                    </div>
                    <div className="nickname-info-bio">
                        {/* {user.bio || "не указано"} */}
                        Я учусь в колледже Ала-Too,
мне нужно сдать ОРТ для того чтобы поступить в хороший уник
                    </div>
                </div>
                </div>  
            </div>
        </>
    )
}
