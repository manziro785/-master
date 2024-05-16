import React from 'react'
import './profileModule.css'
import UserInfo from '../../components/profile/userInfo/userInfo.jsx'
import {NavLink, useNavigate} from 'react-router-dom'
import Awards from '../../components/profile/awards/awards.jsx'
import Active from '../../components/profile/active/active.jsx'
import {UserContext} from '../../App'
import {AuthContext} from '../../App';
import logomain from '../../assets/header/logo (8).svg'
import usericon from "../../assets/header/userr.svg"
import { HeaderGlobal } from '../../components/headerGlobal/headerGlobal'



export function ProfilePage() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext)
    const [user, setUser] = React.useContext(UserContext)


    return (
        <>
          <HeaderGlobal/>

            {/* <div className="main-wrapper-profile"> */}
                    <UserInfo/>
                   
            {/* </div> */}

        </>
    )
}