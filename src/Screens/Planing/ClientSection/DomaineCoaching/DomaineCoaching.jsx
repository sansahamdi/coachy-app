import React from "react";
import "./domaine.css";
import { useNavigate, useLocation } from "react-router-dom";
import BackIcon from "../../../../assets/icons/BackIcon";
import { useTranslation } from "react-i18next";

function DomaineCoaching() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const dataDomaineCoaching = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
  return (
    <div className="Domain-container">
      <div className="navigate-fromDomain">
        <BackIcon />
        <p className="name-page">{t('domaine')}</p>
      </div>
      <div className="line"></div>

      <div className="allDoamin">
        <div className="domain">
          <p>Fitness</p>
        </div>
        <div className="domain">
          <p>Diet</p>
        </div>
        <div className="domain">
          <p>Mental</p>
        </div>
        
      </div>
      <div className="content-domain">
        {dataDomaineCoaching.map((domaine, index) => {
          return (
            <div
              key={index}
              className="img-domain"
              onClick={() => {
                navigate("/AllCoachs", { state: {coachs:domaine.coachs,domaine:domaine.name} });
              }}
            >
              <img className="img-background" src={domaine.picDomaine} />
            </div>
          );
        })}
        <div style={{ height: 150 }}></div>
      </div>
    </div>
  );
}

export default DomaineCoaching;
