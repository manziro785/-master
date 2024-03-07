import './App.css'
import React, { useState } from 'react' 
import {RouterProvider} from 'react-router-dom'
import {routers} from './app/api.jsx'


const App = () => {
 
  return <RouterProvider router={routers} />
}

export default App
