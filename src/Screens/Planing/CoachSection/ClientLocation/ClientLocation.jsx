import React, { useState, useEffect } from "react";
// import { Geolocation } from "@capacitor/geolocation";
import { useTranslation } from "react-i18next";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "./clientLocation.css";
import CallIcon from "../../../../assets/icons/Planing/CallIcon";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../../../Components/modal/Modal";
import useServiceClientLocation from "./useServiceClientLocation";


function ClientLocation({setHideTabBar,sethideTabBarforCoachDetail,openModal,setOpenModal }) {
  const  {
    location,
    position,
    customIcon,
    getPostion,
    dataDomaineCoaching,
    locationForstate,
    cancelReservation,
    acceptReservation,
    openGoogleMaps,t
  }=useServiceClientLocation(setHideTabBar,sethideTabBarforCoachDetail,setOpenModal)
  
  return (
    <div className="hole-map">
      <MapContainer
        center={location !== null ? location : position}
        zoom={6}
        className="map-container"
      >
        <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TNPJ9dvE72iHCMuBVwD7" />

        <Marker position={position} icon={customIcon} >
          <Popup autoOpen={true} autoPan={false} >
            destination <br />
          </Popup>
        </Marker>

        <Marker
          position={getPostion}
          icon={customIcon}
        >
          <Popup>
            Mylocation <br />
          </Popup>
        </Marker>
      </MapContainer>
      <div className="user-detail-location">
        <div className="header-detail-user">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img className="img-user" src={dataDomaineCoaching.image_user} />
            <div className="train-name-user">
              <p className="txt-train">
                {t('trainWith')}
              </p>
              <p style={{ margin: 2 }}>
                {dataDomaineCoaching.firstName} {dataDomaineCoaching.lastName}
              </p>
            </div>
          </div>
          <div className="design-icons"  onClick={()=>{}}>
            <CallIcon />
          </div>
        </div>
        <div className="descirption-coach">
          <p className="bioCoach">{dataDomaineCoaching.bio}</p>
          {locationForstate.state.reservationState === "pending" ? (
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <button className="btn-location" onClick={() => { cancelReservation()}}>
                {t('cancelReq')}
              </button>
              <button
                className="btn-location" onClick={() => {acceptReservation()}}>
                {t('acceptReq')}
              </button>
            </div>
          ) : (
            <button className="btn-location" onClick={() => { cancelReservation()}}>
                {t('cancelReq')}
            </button>
          )}
        </div>
      </div>
      {openModal&&<Modal>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p>
            Vous allez être redirigé vers l'application Google Maps lors de la
            navigation vers le monument. Une fois sur place,appuyez sur le
            bouton précédent en bas de l'écran de votre téléphone pour revenir à
            l'application Dourbia
          </p>
          <button onClick={openGoogleMaps} className="btn-auth" >OK</button>
          </div>
        </Modal>}
    </div>
  );
}

export default ClientLocation;
