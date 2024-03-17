import React from 'react'
import { AuthContext } from '../../App'

export  function TestPage() {
    const [isAuth, setIsAuth] = React.useContext(AuthContext)
  return (
    <>
    {isAuth && (
        <div className='tests'>
            Test Page
        </div> 
    )}
     {!isAuth && (
         <div className='tests'>
         Еще маленький для этого
     </div> 
    )}
    </>
  )
}
