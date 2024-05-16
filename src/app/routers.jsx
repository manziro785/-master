import { createBrowserRouter } from 'react-router-dom';
import  {HomePage}  from '../pages/homePage/homePage.jsx';
import  {NoPage}  from '../pages/nopage/nopage.jsx';
import  RegisterPage  from '../pages/auth/registerPage/registerPage.jsx';
import  {AuthPage}  from '../pages/auth/authPage/authPage.jsx';
import {ProfilePage}  from '../pages/profile/profile.jsx';
import  {TestPage } from '../pages/testPage/testPage.jsx';
import  {MathPage } from '../pages/lessons/math/math.jsx';
import  {SolvingTest } from '../pages/solvingTest/solvingTest.jsx';
import Tests from '../pages/Tests/Tests.jsx';


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
    path: '/lessons',
    element: <TestPage />
  },
  {
    path: '/test/math',
    element: <MathPage />
  },
 
  {
    path: '/lessons/:akbar',
    element: <Tests />
  },
  {
    path: '/lessons/:akbar/solve',
    element: <SolvingTest />
  },
  {
    path: '/*',
    element: <NoPage />
  }
])