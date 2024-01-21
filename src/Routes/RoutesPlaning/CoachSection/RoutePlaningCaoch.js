import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ClientLocation from "../../../Screens/Planing/CoachSection/ClientLocation/ClientLocation";
import Home from "../../../Screens/Planing/CoachSection/Home/Home";

function RoutePlaningCaoch({setOpenModal, openModal,setHideTabBar, setlong, setlat,sethideTabBarforCoachDetail }) {
  return (
    <Routes>
      <Route path="/" exact element={<Home sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
            setHideTabBar={setHideTabBar}/>} />
      <Route
        path="/ClientLocation"
        element={
          <ClientLocation
          sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
            setHideTabBar={setHideTabBar}
            setlat={setlat}
            setlong={setlong}
            openModal={openModal}
            setOpenModal={setOpenModal}

          />
        }
      />
    </Routes>
  );
}

export default RoutePlaningCaoch;
