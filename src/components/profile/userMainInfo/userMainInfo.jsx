import React from 'react'
import './userMainInfoModule.css'

export default function UserMainInfo() {
    return (
        <>
            <div className="wrapper-main-info">
                <div className="nickname-box">
                    <div className="nickname">
                        Nickname
                    </div>
                    <div className="nickname-info">
                        Влад Нурмагамедов
                    </div>
                </div>
                <div className="nickname-box">
                    <div className="nickname">
                        Email
                    </div>
                    <div className="nickname-info">
                        manziro785@gmail.com            </div>
                </div>
                <div className="nickname-box">
                    <div className="nickname">
                        Location
                    </div>
                    <div className="nickname-info">
                        Бишкек, Чуйская обл.
                    </div>
                </div>
                <div className="nickname-box">
                    <div className="nickname">
                        Date of Birth
                    </div>
                    <div className="nickname-info">
                        10 ноября 2006                        </div>
                </div>
                <div className="nickname-box-bio">
                    <div className="nickname">
                        Bio
                    </div>
                    <div className="nickname-info-bio">
                        Я учусь в колледже Ала-Too,
                        мне нужно сдать ОРТ для того чтобы поступить в хошоший уник                        </div>
                </div>
            </div>
        </>
    )
}
