import './App.css'
import React, { useState, useEffect, useContext } from 'react' 
import {RouterProvider} from 'react-router-dom'
import {routers} from './app/api.jsx'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom';

export const AuthContext = React.createContext(null)

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false)
  useEffect ( () => {
    if (localStorage.getItem('access')) {
      checkAuth(localStorage.getItem('access'))
    }
  }, [])

  async function checkAuth (access) {
    console.log('access')
    axios.defaults.headers.common = {'Authorization': 'Bearer ' + access}
    let res = axios.post('http://217.151.230.35:888/api/v1/regauth/user-info/')
    .then(response => {
      setIsAuth(true)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
  
    } );
  }
 
  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
  <RouterProvider router={routers} />
 </AuthContext.Provider>
  )
}

export default App
