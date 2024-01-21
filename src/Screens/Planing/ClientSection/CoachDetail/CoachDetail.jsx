import React from "react";
import "./coachDetail.css";
import { useLocation } from "react-router-dom";
import BackIcon from "../../../../assets/icons/BackIcon";
import { useTranslation } from "react-i18next";
function CoachDetail({ sethideTabBarforCoachDetail, setHideTabBar }) {
  const location = useLocation();
  const {t}=useTranslation()
  const data = location.state;
  return (
    <div className="container-coachDetail">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "50%",
          width: "100%",
        }}
      >
        <div className="couverture-image">
          <div
            className="container-backIcon"
            onClick={() => {
              sethideTabBarforCoachDetail(true);
              setHideTabBar(true);
            }}
          >
            <BackIcon />
          </div>
        </div>
        <div className="image-container">
          <img className="profile-image" src={data.image_user} />
          <p>
            {data.firstName} {data.lastName}
          </p>
        </div>
      </div>
      <div className="bio-coach">
        <div className="line"></div>
        <p className="attribute-coach">{t('about')} {data.firstName}</p>
        <p className="value-coach">
        
          {`dedicated ${data.domaine} enthusiast and certified personal trainer.passion for helping individuals of all ${data.domaine} levels achieve their health and wellness goals.`}
        </p>
        <div className="line"></div>
        <p className="attribute-coach">{t('experience')}</p>
        <p>{`over ${data.experience} years of experience, ${data.firstName} has successfully trained clients in weight management, strength building, and overall ${data.domaine} improvement. `}</p>
        <div className="line"></div>
        <p className="attribute-coach">{t('t  arification')}</p>
        <p className="value-coach">
          {`${data.firstName} offers his coaching services at a competitive rate of ${data.Tarification} $ per session.`}
          {` pay ${data.firstName} using PayPal or Credit Card for convenience.`}
        </p>
      </div>
    </div>
  );
}

export default CoachDetail;
