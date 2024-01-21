import React from "react";
import "./cardDetail.css";
import BackIcon from "../../../assets/icons/BackIcon";
function CardDetail() {
  return (
    <div className="perso-info-container">
      <div className="container-settings">
        <div className="navigate">
          <BackIcon />

          <p className="name-page">card Detail</p>
        </div>
        <p
          style={{
            textAlign: "left",
            fontSize: 18,
            fontWeight: 600,
            color: "grey",
          }}
        >
          Card
        </p>
          <img  className="card" src={require("../../../assets/images/BankCard.jpg")}/>
      </div>
    </div>
  );
}

export default CardDetail;
