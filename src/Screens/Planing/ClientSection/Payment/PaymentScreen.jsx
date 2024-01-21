import React, { useState } from "react";
import BackIcon from "../../../../assets/icons/BackIcon";
import ToggleOff from "../../../../assets/icons/Planing/ToggleOff";
import ToggleOn from "../../../../assets/icons/Planing/ToggleOn";
import PayPalIcon from "../../../../assets/icons/Planing/PayPalIcon";
import MasterCardIcon from "../../../../assets/icons/Planing/MasterCardIcon";
import AmexIcon from "../../../../assets/icons/Planing/AmexIcon";
import DinerIcon from "../../../../assets/icons/Planing/DinerIcon";
import VisaIcon from "../../../../assets/icons/Planing/VisaIcon";
import TickIcon from "../../../../assets/icons/Planing/TickIcon";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../../../Components/modal/Modal";
import { useTranslation } from "react-i18next";
import "./payment.css";

function PaymentScreen({setHideTabBar}) {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(true);
  const [methodePayment, setMethodPayment] = useState("");
  const [save, setSave] = useState(false);

  
  return (
    <div className="reservation-container">
      <div className="page-container">
        <div className="navigate">
          <div style={{ textAlign: "left", marginRight: 30 }}>
            <BackIcon />
          </div>

          <p className="name-page">{t('addPayment')}</p>
        </div>
        <div className="container-pay">
          <div className="container-choose-Method">
            <div style={{ position: "relative" }}>
              <div
                className="iconStyle"
                onClick={() => {
                  setMethodPayment("Visa");
                }}
              >
                <VisaIcon />
                {methodePayment === "Visa" && (
                  <div
                    className="tick-place"
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  >
                    <TickIcon />
                  </div>
                )}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                className="iconStyle"
                onClick={() => {
                  setMethodPayment("PayPal");
                }}
              >
                <PayPalIcon />
                {methodePayment === "PayPal" && (
                  <div
                    className="tick-place"
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  >
                    <TickIcon />
                  </div>
                )}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                className="iconStyle"
                onClick={() => {
                  setMethodPayment("Diner");
                }}
              >
                <DinerIcon />
                {methodePayment === "Diner" && (
                  <div
                    className="tick-place"
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  >
                    <TickIcon />
                  </div>
                )}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                className="iconStyle"
                onClick={() => {
                  setMethodPayment("Amex");
                }}
              >
                <AmexIcon />
                {methodePayment === "Amex" && (
                  <div
                    className="tick-place"
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  >
                    <TickIcon />
                  </div>
                )}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                className="iconStyle"
                onClick={() => {
                  setMethodPayment("Master");
                }}
              >
                <MasterCardIcon />
                {methodePayment === "Master" && (
                  <div
                    className="tick-place"
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  >
                    <TickIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
          <input className="input-card" placeholder="Name on Card" />
          <input className="input-card" placeholder="1234 5678 3456 4567" />
          <div className="conatiner-detail-card">
            <input className="input-card" placeholder="Month" />
            <input className="input-card" placeholder="Year" />
          </div>
          <div className="conatiner-detail-card">
            <input className="input-card" placeholder="CVC" />
            <p className="text-payment">
            {t('3or4Digits')}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {save ? (
              <div
                onClick={() => {
                  setSave(false);
                }}
              >
                <ToggleOn />
              </div>
            ) : (
              <div
                onClick={() => {
                  setSave(true);
                }}
              >
                <ToggleOff />
              </div>
            )}
            <p className="text-payment"> {t('saveCard')}</p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/");
            setHideTabBar(true)
          }}
          className="btn-pay"
        >
          Pay
        </button>
      </div>
      {openModal && (
        <Modal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
            {t('bookReservation')}
              <br />
              {t('moneyToPay')} {Number(location.state.cout)+Number((location.state.cout*10)/100)} Chf <br />
              {t('sessionStart')} {location.state.day} <br />{t('from')}
              {location.state.sessionFrom}{t('to')}{" "}
              {location.state.sessionFrom + 1} am
            </p>
            <button
              className="btn-auth"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              OK
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PaymentScreen;
