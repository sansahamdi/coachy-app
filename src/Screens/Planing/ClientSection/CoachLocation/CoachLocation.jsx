import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "./coachLocation.css";
import CallIcon from "../../../../assets/icons/Planing/CallIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Modal from "../../../../Components/modal/Modal";
function CoachLocation({setHideTabBar,openModal,setOpenModal}) {
  const { t } = useTranslation();
  const position = [47.184475, 8.505185];
  const locationForstate = useLocation();
  const navigate = useNavigate();
  const dataDomaineCoaching = locationForstate.state;
  const location =  JSON.parse(localStorage.getItem('position'))
  const customIcon = L.icon({
    iconUrl: require("../../../../assets/images/marker-icon.png"),
    shadowUrl: require("../../../../assets/images/marker-shadow.png"),
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${dataDomaineCoaching.location.longitude},${dataDomaineCoaching.location.latitude}`;
    window.open(googleMapsUrl, "_blank");
    setOpenModal(false)
  };

  return (
    <div className="hole-map">
      <MapContainer
        center={position}
        zoom={6}
        className="map-container"
      >
        <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TNPJ9dvE72iHCMuBVwD7" />
        <Marker
          position={location}
          icon={customIcon}
        >
          <Popup >
            Mylocation 
          </Popup>
        </Marker>
        <Marker
          position={position}
          icon={customIcon}
        >
          <Popup >
            destination 
          </Popup>
        </Marker>
      </MapContainer>
     
      <div className="user-detail-location">
        <div className="header-detail-user">
          <div
           className="conatiner-detail"
          >
            <img className="img-user" src={dataDomaineCoaching.image_user} />
            <div className="train-name-user">
              <p
               className="txt-train"
              >
                {t("trainWith")}
              </p>
              <p style={{ margin: 2 }}>
                {dataDomaineCoaching.firstName} {dataDomaineCoaching.lastName}
              </p>
            </div>
          </div>
          <div className="design-icons">
            <CallIcon />
          </div>
        </div>
        <div className="descirption-coach">
          <p className="bioCoach">
            {`dedicated ${dataDomaineCoaching.domaine} enthusiast and certified personal trainer.passion for helping individuals of all ${dataDomaineCoaching.domaine} levels achieve their health and wellness goals.`}
          </p>
          <button
          onClick={()=>{navigate('/CoachDetail',{state:dataDomaineCoaching});setHideTabBar(false)}}
            className="btn-forMoreDetail"
          >
            {t('moreDeatil')}
          </button>
        </div>
      </div>
      {openModal&&<Modal>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p>
           {t('redirectVersMap')}
          </p>
          <button onClick={openGoogleMaps}className="btn-auth" >OK</button>
          </div>
        </Modal>}
    </div>
  );
}

export default CoachLocation;
