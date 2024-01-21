import React from "react";
import { useNavigate } from "react-router-dom";
import "./myProfile.css";
import AvailablityIcon from "../../../assets/icons/Profile/AvailablityIcon";
import HistorySessionIcon from "../../../assets/icons/Profile/HistorySessionIcon";
import ProfileIcon from "../../../assets/icons/Profile/ProfileIcon";
import Wallet from "../../../assets/icons/Profile/Wallet";
import SettingsIcon from "../../../assets/icons/Profile/SettingsIcon";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import { useTranslation } from "react-i18next";
function Myprofile() {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const userData = localStorage.getItem("currentUser");
  const data = JSON.parse(userData);
  const typeUser = localStorage.getItem("typeUser");
  return (
    <div className="container">
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"30%",width:"100%"}}>
        <div className="couverture-image"></div>
        <div className="image-container">
          
          <img className="profile-image" src={data.image_user} />
          <p>
            {data.firstName} {data.lastName}
          </p>
        </div>
      </div>
      <div className="profile-info">
        <p style={{ marginTop: 5 }}>{t('profile')}</p>
        <div
          className="session-history"
          onClick={() => {
            navigate("/SessionHistory");
          }}
        >
          <HistorySessionIcon />
          <p className="info">{t('sessionHistory')} </p>
          <ArrowrightIcon />
        </div>
        {typeUser === "Coach" ? (
          <>
            <div className="line"></div>
            <div
              className="session-history"
              onClick={() => {
                navigate("/Availability");
              }}
            >
              <AvailablityIcon />
              <p className="info">{t('availability')}</p>
              <ArrowrightIcon />
            </div>
          </>
        ) : null}
        <div className="line"></div>
        <p style={{ marginTop: 5 }}>{t('prefernces')}</p>
        <div
          className="session-history"
          onClick={() => {
            navigate("/Settings");
          }}
        >
          <SettingsIcon />
          <p className="info">{t('settings')}</p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div
          className="session-history"
          onClick={() => {
            navigate("/PersonalInformation", { state: data });
          }}
        >
          <ProfileIcon />
          <p className="info">{t('personalInfo')} </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div className="session-history" onClick={()=>{navigate('/CardDetail')}}>
          <Wallet />
          <p className="info">{t('bankCard')}</p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Myprofile;
