import React from "react";
import BackIcon from "../../../assets/icons/BackIcon";
import "./history.css";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import { useTranslation } from "react-i18next";
function SessionHistory() {
  const {t}=useTranslation()
  const data = localStorage.getItem("currentUser");
  const sessionHistory = JSON.parse(data);
  return (
    <div className="container-history">
      <div className="container-session-history">
        <div className="navigate">
          <BackIcon />
          <p className="name-page">{t('sessionHistory')}</p>
        </div>
     
      <div style={{ display: "flex", flexDirection: "column" }}>
        {sessionHistory.sessionHistory.map((elem,index) => {
            
            return (
              <div key={index}>
              <p style={{textAlign:"left",marginLeft:10}}>{elem.day}</p>
            <div className="reservation" style={{width:"100%"}}>
              <div className={`line-${elem.reservation==="accepted"?"check":elem.reservation==="pending"?"pending":"refused"}`}></div>

              <div className="rectangle-content">
                <div className="time">
                  <p className="text">{elem.from}:00 pm</p>
                  <p className="text">{elem.to}:00 pm</p>
                </div>
                <div className="detail-user">
                  <img className="image-user" src={elem.coach.image_user} />
                  <div className="style-user-detail">
                    <p className="text-name">
                      {elem.coach.firstName} {elem.coach.lastName}
                    </p>
                    <p className="text-location">{elem.coach.location.city}</p>
                  </div>
                </div>
                <div style={{ alignSelf: "center", flex: 0.5 }}>
                  <ArrowrightIcon />
                </div>
              </div>
              <p className="text-checkReservation">{elem.reservation==="accepted"?"Reservation Finished":elem.reservation==="pending"?"Reservation pending":"Reservation Refused"}</p>
            </div>
            </div>
          );
          
          
        })}
        <div style={{marginBottom:120}}></div>
      </div>
      </div>
    </div>
  );
}

export default SessionHistory;
