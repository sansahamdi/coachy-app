import React from "react";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import "./home.css";
import useServicePlaning from "./useServicePlaning";
function Home({ setHideTabBar, sethideTabBarforCoachDetail }) {
  const {
    newData,
    t,
    days,
    navigate
  }=useServicePlaning()
 
  return (
    <div>
      <div className="container-homeClient">
        <div className="welcome-page">
          <p className="look-coach">{t("lookCoach")}</p>
          <CalendarIcon />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          {newData.map((element, index) => {
            return (
              <div key={index} className="container-bookings">
                <p className="day">{days[index]}</p>
                {element.length <= 0 ? (
                  <div className="noReservation">
                    <div style={{ flex: 0.5 }}></div>
                    <div
                      className="available"
                      onClick={() => {
                        navigate("/DomaineCoaching", { state: index });
                      }}
                    >
                      <p className="see-coachs">{t("seeAvailable")}</p>
                    </div>
                    <div className="icon">
                      <ArrowrightIcon />
                    </div>
                  </div>
                ) : (
                  <>
                    {element.map((elem, i) => {
                      if (
                        elem !== null &&
                        elem.reservationState === "accepted"
                      ) {
                        return (
                          <div
                            key={i}
                            className="reservation"
                            onClick={() => {
                              navigate("/CoachLocation", { state: elem.coach });
                              setHideTabBar(true);
                              sethideTabBarforCoachDetail(true);
                            }}
                          >
                            <div className="line-check"></div>

                            <div className="rectangle-content">
                              <div className="time">
                                <p className="text">{elem.from}:00 pm</p>
                                <p className="text">{elem.to}:00 pm</p>
                              </div>
                              <div className="detail-user">
                                <img
                                  className="image-user"
                                  src={
                                    elem.coach.image_user
                                      ? elem.coach.image_user
                                      : ""
                                  }
                                />
                                <div className="style-user-detail">
                                  <p className="text-name">
                                    {elem.coach.firstName} {elem.coach.lastName}
                                  </p>
                                  <p className="text-location">
                                    {elem.coach.location.city}
                                  </p>
                                </div>
                              </div>
                              <div style={{ alignSelf: "center", flex: 0.5 }}>
                                <ArrowrightIcon />
                              </div>
                            </div>
                            <p className="text-checkReservation">
                              {t("checkReservation")}
                            </p>
                          </div>
                        );
                      } else if (elem !== null) {
                        return (
                          <div className="reservation" key={i}>
                            <div className="line-pending"></div>

                            <div
                              className="rectangle-content"
                              onClick={() => {}}
                            >
                              <div className="time">
                                <p className="text">{elem.from}:00 pm</p>
                                <p className="text">{elem.to}:00 pm</p>
                              </div>
                              <div className="detail-user">
                                <img
                                  className="image-user"
                                  src={
                                    elem.coach.image_user
                                      ? elem.coach.image_user
                                      : ""
                                  }
                                />
                                <div className="style-user-detail">
                                  <p className="text-name">
                                    {elem.coach.firstName} {elem.coach.lastName}
                                  </p>
                                  <p className="text-location">
                                    {elem.coach.location.city}
                                  </p>
                                </div>
                              </div>
                              <div style={{ alignSelf: "center", flex: 0.5 }}>
                                <ArrowrightIcon />
                              </div>
                            </div>
                            <p className="text-checkReservation">
                              {t("pendingReservation")}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ height: 8 }}></div>
    </div>
  );
}

export default Home;
