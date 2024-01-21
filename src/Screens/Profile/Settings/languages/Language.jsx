import React, { useState } from "react";
import BackIcon from "../../../../assets/icons/BackIcon";
import FrIcon from "../../../../assets/logo/FrIcon";
import ArrowDecrementTime from "../../../../assets/icons/Profile/ArrowDecrementTime";
import ArrowIncrementTime from "../../../../assets/icons/Profile/ArrowIncrementTime";
import "./language.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function Language({ setHideTabBar }) {
  // const langugae=['fr',"en","it","all"]
  // const langue=[
  //   {
  //     lang:"Francais",
  //     sign:"fr",
  //     icon:<FrIcon/>
  //   },
  //   {
  //     lang:"Anglais",
  //     sign:"en",
  //     icon:""
  //   },
  //   {
  //     lang:"Italien",
  //     sign:"it",
  //     icon:""
  //   },
  //   {
  //     lang:"Allemand",
  //     sign:"all",
  //     icon:""
  //   },
  // ]
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const lang = localStorage.getItem("language");
  const [language, setLanguage] = useState(lang);

  const changeLang = (lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
    navigate("/");
    setHideTabBar(true);
  };
  return (
    <div className="perso-info-container">
      <div className="container-settings">
        <div className="navigate">
          <BackIcon hide={true} setHideTabBar={setHideTabBar} />
          <p className="name-page">{t("language")}</p>
        </div>
        <div style={{ width: "100%z" }}>
          <img
            src={require("../../../../assets/logo/logo1.png")}
            alt="First Logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="choix-Language">
          <div className="container-choix-language">
            <div>
              {language === "fr" ? (
                <FrIcon />
              ) :language === "en" ? (
                <img
                  className="img-language"
                  src={require("../../../../assets/icons/Profile/englishIcon.png")}
                />
              ):language === "it" ? (
                <img
                  className="img-language"
                  src={require("../../../../assets/icons/Profile/Flag_of_Italy.svg.png")}
                />
              ):(
                <img
                  className="img-language"
                  src={require("../../../../assets/icons/Profile/Germany-logo-9830108515-seeklogo.com.png")}
                />
              )}
            </div>
            {language === "fr" ? (
              <p className="txt-lng">Francais</p>
            ) : language === "en" ? (
              <p className="txt-lng">English</p>
            ) : language === "it" ? (
              <p className="txt-lng">italiana</p>
            ) : (
              <p className="txt-lng">Deutsch</p>
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                onClick={() => {
                  language === "fr" ? setLanguage("en") :language === "en" ? setLanguage("it"): language === "it" ? setLanguage("all"):language === "all" && setLanguage("fr");
                }}
              >
                <ArrowIncrementTime
                  width={"15"}
                  height={"10"}
                  color={"#5D54A0"}
                />
              </div>
              <div
                onClick={() => {
                  language === "fr" ? setLanguage("all") :language === "all" ? setLanguage("it"): language === "it" ? setLanguage("en"):language === "en" && setLanguage("fr");
                }}
              >
                <ArrowDecrementTime
                  width={"15"}
                  height={"10"}
                  color={"#5D54A0"}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn-pay"
          onClick={() => {
            changeLang(language);
          }}
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
}

export default Language;
