import './App.css'
import React, {useEffect} from 'react'
import {RouterProvider} from 'react-router-dom'
import {routers} from './app/api.jsx'
import axios from 'axios'
// import axios from 'axios';

export const AuthContext = React.createContext(null)
export const UserContext = React.createContext(null)

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false)
    const [user, setUser] = React.useState({})

  useEffect ( () => {
    if (localStorage.getItem('access')) {
      checkAuth(localStorage.getItem('access'))
    }
  }, [])

  async function checkAuth (access) {
      // console.log(access)

    axios.defaults.headers.common = {'Authorization': 'Bearer ' + access}
      // let res = axios.post('http://217.151.230.35:888/api/v1/regauth/user-list/')
      let res = axios.get('http://217.151.230.35:888/api/v1/regauth/user-info/')

    .then(response => {
      setIsAuth(true)
        setUser(response.data)
        // console.log(response.data)
    })
    .catch(error => {
      console.log(error)
  
    } );
  }
  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <UserContext.Provider value={[user, setUser]}>
  <RouterProvider router={routers} />
        </UserContext.Provider>
 </AuthContext.Provider>
  )
}

export default App
