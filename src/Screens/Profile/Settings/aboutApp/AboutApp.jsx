import React from 'react'
import BackIcon from '../../../../assets/icons/BackIcon'
import './aboutApp.css'
import { useTranslation } from 'react-i18next'
function AboutApp({setHideTabBar}) {
  const {t}=useTranslation()
  return (
    <div className="perso-info-container">
    <div className="container-settings">
      <div className="navigate">
        <BackIcon setHideTabBar={setHideTabBar}/>
        <p className="name-page">{t("aboutApp")}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start",textAlign:"left" }}>
    <div>
        <h2>{t("ourMission")}</h2>
        <p>{t("missionDescription")}</p>
    </div>
    <div>
        <h2>{t("aboutUs")}</h2>
        <p >{t("aboutDescription")}</p>
    </div>
    <div>
        <h2>{t("ourOffer")}</h2>
        <ul>
            <li><strong>{t("ourOffer1")}</strong>{t("ourOffer1Description")}</li>
            <li><strong>{t("ourOffer2")}</strong>{t("ourOffer2Description")}</li>
            <li><strong>{t("ourOffer3")}</strong>{t("ourOffer3Description")}</li>
        </ul>
    </div>
    <div>
        <h2>{t("engageForChange")}</h2>
        <p >{t("engageForChangeDescription")}</p>
    </div>
</div>

        
       
    </div>
    </div>
  )
}

export default AboutApp