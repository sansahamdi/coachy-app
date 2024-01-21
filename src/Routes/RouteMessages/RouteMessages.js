import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';


import AllMessages from '../../Screens/Messages/AllMessages/AllMessages';
import PrivateMessage from '../../Screens/Messages/PrivateMessage/PrivateMessage';
function RouteMessages({setHideTabBar}) {
  return (
    <Routes>
    <Route path="/" exact element={<AllMessages                     setHideTabBar={setHideTabBar}
/>} />
    <Route path="/PrivateMessage"  element={<PrivateMessage setHideTabBar={setHideTabBar}/>} />
    
  </Routes>
  )
}

export default RouteMessages