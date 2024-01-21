import React, { useState } from "react";
import "./updatName.css";
import { useNavigate, useLocation } from "react-router-dom";
import BackIcon from "../../../../assets/icons/BackIcon";
import { useTranslation } from "react-i18next";
import useServiceName from "./useServiceName";
function UpdateName() {
  const { setFirstName, setLastName, updateFullName, t } = useServiceName();
  return (
    <div className="perso-info-container">
      <div style={{ display: "flex", width: "90%", flexDirection: "column" }}>
        <div className="navigate">
          <BackIcon />

          <p className="name-page">{t("updateName")}</p>
        </div>
        <div className="container-input">
          <div className="input-container">
            <label htmlFor="firstName"></label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              id="input1"
              className="bottom-border"
              placeholder={t("firstName")}
            />
          </div>

          <div className="input-container">
            <label htmlFor="input2"></label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              id="input2"
              className="bottom-border"
              placeholder={t("lastName")}
            />
          </div>
          <button className="btn-update-Profile" onClick={updateFullName}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateName;
