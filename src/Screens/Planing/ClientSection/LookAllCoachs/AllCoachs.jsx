import React, { useState } from "react";
import "./allCoachs.css";
import CloseIcon from "../../../../assets/icons/Planing/CloseIcon";
import Checked from "../../../../assets/icons/Planing/Checked";
import PinIcon from "../../../../assets/icons/Planing/PinIcon";
import Unchecked from "../../../../assets/icons/Planing/Unchecked";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
function AllCoachs({ setHideTabBar, sethideTabBarforCoachDetail }) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [checkedOrNot, setCheckedOrNot] = useState(999);
  const [chooseCoach, setChooseCoach] = useState({});
  const bookCoach = () => {
    if (checkedOrNot !== 999) {
      navigate("/Reservation", { state: chooseCoach });
    } 
  };

  return (
    <div className="container">
      <div className="container-page">
        <div className="icon-X">
          <CloseIcon />
        </div>
        <div className="title-page">
          <p className="txt-sendBook">{t("sendBook")}</p>
          <p className="txt-FirstToAccept">{t("firstToAccept")}</p>
          <div className="line"></div>
        </div>
        <p className="domaine-coaching">{data.domaine}</p>
        <div className="container-coach">
          {/* coach checked */}
          {data.coachs.map((element, index) => {
            return (
              <div key={index} className="detail-coach">
                <div className="header-coach">
                  <div
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      navigate("/CoachLocation", { state: element });
                      setHideTabBar(true);
                      sethideTabBarforCoachDetail(true);
                    }}
                  >
                    <img
                      className={
                        checkedOrNot === index
                          ? "image-user"
                          : "image-user noChecked"
                      }
                      src={element.image_user}
                    />
                  </div>
                  <div
                    style={
                      checkedOrNot !== index ? { margin: 0 } : { margin: 13 }
                    }
                    onClick={() => {
                      checkedOrNot === index
                        ? setCheckedOrNot(999)
                        : setCheckedOrNot(index);
                      setChooseCoach(element);
                    }}
                  >
                    {checkedOrNot == index ? <Checked /> : <Unchecked />}
                  </div>
                </div>
                <div className="info-coach">
                  <p className="txt-fullName">
                    {element.firstName} {element.lastName}
                  </p>
                  <p className="txt-dispo">{t("disponible")}</p>
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <PinIcon />
                    <p className="txt-location">{element.location.city}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer style={{ width: "100%" }}>
        <button
          onClick={bookCoach}
          className="btn-bookCoach"
          style={{ background: checkedOrNot !== 999 ? "#5D54A0" : "#DCDCDC" }}
        >
          {t("bookCoach")}
        </button>
      </footer>
    </div>
  );
}

export default AllCoachs;
