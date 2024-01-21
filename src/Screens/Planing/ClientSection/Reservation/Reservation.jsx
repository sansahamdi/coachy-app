import React from "react";
import "./reservation.css";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import BackIcon from "../../../../assets/icons/BackIcon";
import ArrowTime from "../../../../assets/icons/Planing/ArrowTime";

import useServiceReservation from "./useServiceReservation";
function Reservation({setHideTabBar}) {
  const {
    otherUser,
    days,
    seeAvailableDay,
    setSeeAvailableDay,
    location,
    t,
    setShow,
    setPickTime,
    show,
    pickTime,
    reserveSession,
  } = useServiceReservation(setHideTabBar);

  return (
    <div className="reservation-container">
      <div className="page-container">
        <div className="navigate">
          <div style={{ textAlign: "left", marginRight: 30 }}>
            <BackIcon />
          </div>

          <p className="name-page">{t("reservation")}</p>
        </div>

        {otherUser.availability.map((element, index) => {
          return (
            <div key={index}>
              <p className="day">{days[index]}</p>
              <div
                className="bookDay"
                onClick={() => {
                  seeAvailableDay === index
                    ? setSeeAvailableDay(999)
                    : setSeeAvailableDay(index);
                }}
              >
                <div
                 className="container-resrve"
                >
                  <div>
                    <img
                      className="image-user"
                      src={location.state.image_user}
                    />
                  </div>
                  <div>
                    <p
                      className="txt-checkAvail"
                    >
                      {t("checkAvailability")}
                    </p>
                    {element.length > 0 ? (
                      <p
                        className="txt-dispon"
                      >
                        {t("disponible")}
                      </p>
                    ) : (
                      <p
                        className="txt-notDispo"
                      >
                        {t("notDisponible")}
                      </p>
                    )}
                  </div>
                </div>
                <div style={{ marginRight: 10 }}>
                  <ArrowrightIcon />
                </div>
              </div>
              {seeAvailableDay === index ? (
                <div>
                  {element.length > 0 ? (
                    <div>
                      {element.map((elem, i) => {
                        return (
                          <div key={i}>
                            <div
                              className="book-Horaire"
                              onClick={() => {
                                if (show === i) {
                                  setShow(null);
                                  setPickTime(null);
                                } else {
                                  setShow(i);
                                  setPickTime(null);
                                }
                              }}
                            >
                              <div className="time-book">
                                <p className="txt-time">
                                  {elem.from > 12
                                    ? `${elem.from}:00 Pm`
                                    : `${elem.from}:00 Am`}
                                </p>
                                <ArrowTime />
                                <p className="txt-time">
                                  {elem.to > 12
                                    ? `${elem.to}:00 Pm`
                                    : `${elem.to}:00 Am`}
                                </p>
                              </div>
                              <div style={{ marginRight: 10 }}>
                                <ArrowrightIcon />
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                              }}
                            >
                              {show === i &&
                                (() => {
                                  const elements = [];
                                  for (let i = elem.from; i < elem.to; i++) {
                                    elements.push(
                                      <div
                                        onClick={() => {
                                          setPickTime(i);
                                          if (pickTime && pickTime === i) {
                                            setPickTime(null);
                                          } else {
                                            setPickTime(i);
                                          }
                                        }}
                                        style={{
                                          backgroundColor:
                                            pickTime === i
                                              ? "#5D54A0"
                                              : "#DCDCDC",
                                          color:
                                            pickTime === i ? "white" : "black",
                                        }}
                                        key={i}
                                        className="time-style"
                                        color="#5D54A0"
                                      >
                                        <p>
                                          {i > 12 ? `${i}:00 Pm` : `${i}:00 Am`}
                                        </p>
                                      </div>
                                    );
                                  }
                                  return elements;
                                })()}
                            </div>
                            {show === i && (
                              <button
                                onClick={() => {
                                  reserveSession(index);
                                }}
                                style={{
                                  backgroundColor: pickTime
                                    ? "#5D54A0"
                                    : "#DCDCDC",
                                  width: "30%",
                                  height: 30,
                                  borderRadius: 10,
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                {t("save")}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p>{t("restday")}</p>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}

        <div style={{ height: 120 }}></div>
      </div>
    </div>
  );
}

export default Reservation;
