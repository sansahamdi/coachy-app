import "./App.css";
import { Navigate, BrowserRouter as Router } from "react-router-dom";
import RouteAuth from "./Routes/RouteAuth/RouteAuth";
import { useEffect, useState } from "react";
import RoutePlaningClient from "./Routes/RoutesPlaning/ClientSection/RoutePlaningClient";
import RoutePlaningCaoch from "./Routes/RoutesPlaning/CoachSection/RoutePlaningCaoch";
import RouteProfile from "./Routes/RouteProfile/RouteProfile";
import TabBar from "./Screens/TabBar";
import RouteMessages from "./Routes/RouteMessages/RouteMessages";
import BackIconComponent from "./Components/componentBack/BackIconComponent";
import DirectionMap from "./Components/directionMap/DirectionMap";
import { dataClient } from "./DataBase/clientDB/Data";
import { dataDomaineCoaching } from "./DataBase/coachDB/Data";
import { useTranslation } from "react-i18next";

function App() {
  const token = localStorage.getItem("token");
  const typeOfUser = localStorage.getItem("typeUser");
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hideTabBar, setHideTabBar] = useState(false);
  const [hideTabBarforCoachDetail, sethideTabBarforCoachDetail] =
    useState(false);
  const [tabItem, setTabItem] = useState("Planing");
  const [lat, setlat] = useState([]);
  const [long, setlong] = useState([]);
  const [typeUser, setTypeUser] = useState(typeOfUser);
  const [openModal, setOpenModal] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("typeUser");
    localStorage.removeItem("today");

    setIsLoggedIn(false);
  };

  const getAllData = () => {
    const checkdataDomaineCoaching = localStorage.getItem("dataDomaineCoaching");
    const checkDataClient = localStorage.getItem("dataClient");
    if (checkdataDomaineCoaching === null || checkDataClient === null) {
      localStorage.setItem("dataClient", JSON.stringify(dataClient));
      localStorage.setItem("dataDomaineCoaching", JSON.stringify(dataDomaineCoaching));
    }
  };

  const retrieveUserSession = () => {
    if (token) {
      setIsLoggedIn(true);
      setTypeUser(typeOfUser);
      setHideTabBar(true);
    }
  };
 
  const handleTabItem = (name) => {
    setTabItem(name);
  };

  useEffect(() => {
    retrieveUserSession();
    getAllData();
  }, []);

  const changeLang = (lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };
  const getLang = async () => {
    const lang = localStorage.getItem("language");
    if (lang) {
      changeLang(lang);
    } else {
      changeLang("fr");
    }
  };
  useEffect(() => {
    getLang();
  }, []);
  return (
    <div className="App">
      <Router>
        {hideTabBar ? (
          <div>
            {hideTabBarforCoachDetail ? (
              <div style={{ height: 0 }}>
                <DirectionMap
                  setOpenModal={setOpenModal}
                />
                <BackIconComponent
                  setHideTabBar={setHideTabBar}
                  sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        {!isLoggedIn ? (
          <RouteAuth
            setIsLoggedIn={setIsLoggedIn}
            setTypeUser={setTypeUser}
            setHideTabBar={setHideTabBar}
          />
        ) : (
          <div style={{ height: "100%", position: "relative", zIndex: 1 }}>
            {tabItem === "Planing" ? (
              <>
                {typeUser !== "Client" ? (
                  <RoutePlaningCaoch
                   openModal={openModal}
                   setOpenModal={setOpenModal}
                    setHideTabBar={setHideTabBar}
                    sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
                    setlat={setlat}
                    setlong={setlong}
                  />
                ) : (
                  <RoutePlaningClient
                  setOpenModal={setOpenModal}
                    openModal={openModal}
                    setHideTabBar={setHideTabBar}
                    sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
                    setlat={setlat}
                    setlong={setlong}
                  />
                )}
              </>
            ) : tabItem === "Profile" ? (
              <RouteProfile logOut={logOut} setHideTabBar={setHideTabBar} />
            ) : tabItem === "Messages" ? (
              <RouteMessages setHideTabBar={setHideTabBar} />
            ) : null}
            {hideTabBar ? (
              <TabBar tabItem={tabItem} handleTabItem={handleTabItem} />
            ) : null}
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
