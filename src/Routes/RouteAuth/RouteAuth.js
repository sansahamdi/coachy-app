import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import SignUp from '../../Screens/AuthScreen/SignUp/SignUp';
import SplashScreen from '../../Screens/splachScreen/SplachScreen';
import Login from '../../Screens/AuthScreen/Login/Login';
function RouteAuth({setIsLoggedIn,setTypeUser,setHideTabBar}) {
  return (
    <Routes>
    <Route path="/" exact element={<SplashScreen />} />
    <Route path="/SignUp" exact element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
    <Route path="/Login"  element={<Login setIsLoggedIn={setIsLoggedIn}  setTypeUser={setTypeUser} setHideTabBar={setHideTabBar}/>} />
  </Routes>
  )
}

export default RouteAuth