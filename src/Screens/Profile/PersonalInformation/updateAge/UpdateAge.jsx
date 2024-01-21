import React from "react";
import "../updateName/updatName.css";
import BackIcon from "../../../../assets/icons/BackIcon";
import useServiceAge from "./useServiceAge";

function UpdateAge() {
  const { t, setAge, updateAge } = useServiceAge();
  return (
    <div className="perso-info-container">
      <div style={{ display: "flex", width: "90%", flexDirection: "column" }}>
        <div className="navigate">
          <BackIcon />

          <p className="name-page">{t("updateAge")}</p>
        </div>
        <div className="container-input">
          <div className="input-container">
            <input
              onChange={(e) => {
                setAge(e.target.value);
              }}
              type="number"
              id="input1"
              className="bottom-border"
              placeholder="Age"
            />
          </div>

          <button className="btn-update-Profile" onClick={updateAge}>
            {t("save")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAge;
