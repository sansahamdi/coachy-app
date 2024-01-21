import React from "react";
import "./settings.css";
import BackIcon from "../../../assets/icons/BackIcon";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import LogoutIcon from "../../../assets/icons/Profile/LogoutIcon";
import DeleteAccountIcon from "../../../assets/icons/Profile/DeleteAccountIcon";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Settings({ logOut,setHideTabBar }) {
  const navigate = useNavigate();
  const {t}=useTranslation()
  return (
    <div className="perso-info-container">
      <div className="container-settings">
        <div className="navigate">
          <BackIcon />

          <p className="name-page">{t('settings')}</p>
        </div>

        <div className="settings-conatiner">
          <div className="container-value-settings">
          <div className="line-settings"></div>
          <div className="detail-info-settings" onClick={()=>{navigate('/Language');setHideTabBar(false)}}>
            <p className="value-info">{t('language')}</p>
            <ArrowrightIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div className="detail-info-settings" onClick={()=>{navigate('/AboutApp');setHideTabBar(false)}}>
            <p className="value-info">{t('aboutApp')}</p>
            <ArrowrightIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div className="detail-info-settings">
            <p className="value-info">{t('help')}</p>
            <ArrowrightIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div
            className="detail-info-settings"
            onClick={() => {
              logOut();
              navigate("/Login");
            }}
          >
            <p className="value-info">{t('logOut')}</p>
            <LogoutIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div className="detail-info-settings">
            <p className="value-info" style={{ color: "red" }}>
              {t('deleteAccount')}
            </p>
            <DeleteAccountIcon />
          </div>
          <div className="line-settings"></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
