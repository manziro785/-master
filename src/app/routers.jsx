import { createBrowserRouter } from 'react-router-dom';
import  {HomePage}  from '../pages/homePage/homePage.jsx';
import  {NoPage}  from '../pages/nopage/nopage.jsx';
import  RegisterPage  from '../pages/auth/registerPage/registerPage.jsx';
import  {AuthPage}  from '../pages/auth/authPage/authPage.jsx';
import  {ProfilePage}  from '../pages/profile/profile.jsx';


export const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <AuthPage />
    
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/*',
    element: <NoPage />
  }
])