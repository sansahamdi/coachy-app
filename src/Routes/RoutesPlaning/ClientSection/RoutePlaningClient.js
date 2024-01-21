import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import CoachDetail from '../../../Screens/Planing/ClientSection/CoachDetail/CoachDetail'
import CoachLocation from '../../../Screens/Planing/ClientSection/CoachLocation/CoachLocation'
import DomaineCoaching from '../../../Screens/Planing/ClientSection/DomaineCoaching/DomaineCoaching'
import Home from '../../../Screens/Planing/ClientSection/Home/Home'
import AllCoachs from '../../../Screens/Planing/ClientSection/LookAllCoachs/AllCoachs'
import PaymentScreen from '../../../Screens/Planing/ClientSection/Payment/PaymentScreen'
import Reservation from '../../../Screens/Planing/ClientSection/Reservation/Reservation'
import Availability from '../../../Screens/Profile/Availability/Availability';
import SessionHistory from '../../../Screens/Profile/SessionHistory/SessionHistory';
function RoutePlaningClient({setOpenModal,setHideTabBar,setlong,setlat,sethideTabBarforCoachDetail,openModal}) {
  return (
    <Routes>
        <Route path="/" exact element={<Home setHideTabBar={setHideTabBar} sethideTabBarforCoachDetail={sethideTabBarforCoachDetail} />} />
        <Route path="/Reservation"  element={<Reservation setHideTabBar={setHideTabBar}/>} />
        <Route path="/PaymentScreen" element={<PaymentScreen setHideTabBar={setHideTabBar}/>} />
        <Route path="/AllCoachs" element={<AllCoachs setHideTabBar={setHideTabBar} sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}/>} />
        <Route path="/DomaineCoaching" element={<DomaineCoaching/>} />
        <Route path="/CoachLocation" element={<CoachLocation setOpenModal={setOpenModal}openModal={openModal} setlat={setlat} setlong={setlong} setHideTabBar={setHideTabBar} />} />
        <Route path="/CoachDetail" element={<CoachDetail sethideTabBarforCoachDetail={sethideTabBarforCoachDetail} setHideTabBar={setHideTabBar}/>} />
        <Route path="/Availability" element={<Availability/>} />
        <Route path="/SessionHistory" element={<SessionHistory/>} />
      </Routes>
  )
}

export default RoutePlaningClient