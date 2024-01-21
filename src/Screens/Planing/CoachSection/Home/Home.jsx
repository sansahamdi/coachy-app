import React from "react";
import "./coach.css";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import ArrowTime from "../../../../assets/icons/Planing/ArrowTime";

import useServicePlanings from "./useServicePlanings";
function Home({ setHideTabBar, sethideTabBarforCoachDetail }) {
  const {newData,days,navigate,t}=useServicePlanings()
  return (
    <div>
      <div className="container">
        <div className="welcome-page">
          <p className="look-coach">{t('planing')}</p>
          <CalendarIcon />
        </div>
        {/*  RESERVATION ACCEPTED */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {newData.map((element, index) => {
            if (element.length === 0) {
              return (
                <div key={index} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                  <p className="day">{days[index]}</p>
                  <div className="RestDayContainer">
                    <div className="rest-Day">
                      <p>{t('restday')}</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                  <p className="day">{days[index]}</p>
                  {element.map((booking, i) => {
                    if (booking.reservationState === "noRequest") {
                      return (
                        <div key={i} className="RestDayContainer">
                          <div
                            style={{
                              flex: 1.8,
                              flexDirection: "row",
                              display: "flex",
                              marginLeft: 10,
                              alignItems: "center",
                            }}
                          >
                            <p style={{ fontSize: "60%" }}>
                              {booking.from > 12
                                ? booking.from + ":00 Pm"
                                : booking.from + ":00 Am"}
                            </p>
                            <ArrowTime />
                            <p style={{ fontSize: "60%" }}>
                              {booking.to > 12
                                ? booking.to + ":00 Pm"
                                : booking.to + ":00 Am"}
                            </p>
                          </div>
                          <div className="rest-Day">
                            <p>No Request</p>
                          </div>
                          <div style={{ flex: 0.5, alignSelf: "center" }}>
                            <ArrowrightIcon />
                          </div>
                        </div>
                        // <></>
                      );
                    }
                    else if (booking.reservationState === "accepted") {
                      return (
                        <div
                          key={i}
                          className="reservation"
                          onClick={() => {
                            navigate("/ClientLocation", {
                              state: {
                                dataDomaineCoaching: booking.client,
                                reservationState: "accepted",
                                indexReservation: index,
                                indexsession: i,
                                dataUsers: newData,
                                reservation:newData[index]

                              },
                            });
                            setHideTabBar(true);
                            sethideTabBarforCoachDetail(true);
                          }}
                        >
                          <div className="line-check"></div>

                          <div className="rectangle-content">
                            <div className="time">
                              <p className="text">
                                {booking.from > 12
                                  ? booking.from + ":00 pm"
                                  : booking.from + ":00 am"}
                              </p>
                              <p className="text">
                                {booking.to > 12
                                  ? booking.to + ":00 pm"
                                  : booking.to + ":00 am"}
                              </p>
                            </div>
                            <div className="detail-user">
                              <img
                                className="image-user"
                                src={booking.client.image_user?booking.client.image_user:""}
                              />
                              <div className="style-user-detail">
                                <p className="text-name">
                                  {booking.client.firstName}{" "}
                                  {booking.client.lastName}
                                </p>
                                <p className="text-location">
                                  {booking.client.location.city}
                                </p>
                              </div>
                            </div>
                            <div style={{ alignSelf: "center", flex: 0.4 }}>
                              <ArrowrightIcon />
                            </div>
                          </div>
                          <p className="text-checkReservation">
                            {t('checkReservation')}
                          </p>
                        </div>
                      );
                    }
                    else{
                      return (
                        <div
                        key={i}
                          className="reservation"
                          onClick={() => {
                            navigate("/ClientLocation", {
                              state: {
                                dataDomaineCoaching: booking.client,
                                reservationState: "pending",
                                indexReservation: index,
                                indexsession: i,
                                dataUsers: newData,
                                reservation:newData[index]
                              },
                            });
                            setHideTabBar(true);
                            sethideTabBarforCoachDetail(true);
                          }}
                        >
                          <div className="line-pending"></div>

                          <div className="rectangle-content">
                            <div className="time">
                              <p className="text">
                                {booking.from > 12
                                  ? booking.from + ":00 pm"
                                  : booking.from + ":00 am"}
                              </p>
                              <p className="text">
                                {booking.to > 12
                                  ? booking.to + ":00 pm"
                                  : booking.to + ":00 am"}
                              </p>
                            </div>
                            <div className="detail-user">
                              <img
                                className="image-user"
                                src={booking.client.image_user?booking.client.image_user:""}
                              />
                              <div className="style-user-detail">
                                <p className="text-name">
                                  {booking.client.firstName}{" "}
                                  {booking.client.lastName}
                                </p>
                                <p className="text-location">
                                
                                  {booking.client.location.city}
                                </p>
                              </div>
                            </div>
                            <div style={{ alignSelf: "center", flex: 0.4 }}>
                              <ArrowrightIcon />
                            </div>
                          </div>
                          <p className="text-pendingReservation">
                            {t('pendingReservation')}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
        <div style={{ height: 120 }}></div>
      </div>
    </div>
  );
}

export default Home;
