import { useEffect, useState } from "react";
import "./coach.css";

import { useNavigate } from "react-router-dom";
import { Geolocation } from "@capacitor/geolocation";
import { useTranslation } from "react-i18next";

function useServicePlanings() {
    const data = localStorage.getItem("currentUser");
    const dataUser = JSON.parse(data);
    const navigate = useNavigate();
    const [newData, setNewData] = useState(dataUser.reservation);
    const {t}=useTranslation()
    const getLang=localStorage.getItem('language')
    const getCurrentPosition = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
        });
          localStorage.setItem('position',JSON.stringify([
            coordinates.coords.latitude,
            coordinates.coords.longitude,
          ]))
  
      } catch (error) {
        console.error("Error getting location", error);
      }
    };
  
    useEffect(() => {
      reorganizeReservation();
      getCurrentPosition()
    }, []);
    const getWeekDaysInfo=()=> {
      const today = new Date();
      const daysInfo = [];
      daysInfo.push(
        `${t("today")},${today.getDate()} ${today.toLocaleDateString(getLang==='fr' ?"fr-FR":getLang==='en' ?"en-US":getLang==='it' ?"it-IT":getLang==='all' &&"de-DE", {
          month: "long",
        })}`
      );
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      daysInfo.push(
        `${t("tomorow")}, ${tomorrow.getDate()} ${tomorrow.toLocaleDateString(getLang==='fr' ?"fr-FR":getLang==='en' ?"en-US":getLang==='it' ?"it-IT":getLang==='all' &&"de-DE", {
          month: "long",
        })}`
      );
  
      for (let i = 2; i < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        daysInfo.push(
          `${nextDay.toLocaleDateString(getLang==='fr' ?"fr-FR":getLang==='en' ?"en-US":getLang==='it' ?"it-IT":getLang==='all' &&"de-DE", {
            weekday: "long",
          })}, ${nextDay.getDate()} ${nextDay.toLocaleDateString(getLang==='fr' ?"fr-FR":getLang==='en' ?"en-US":getLang==='it' ?"it-IT":getLang==='all' &&"de-DE", {
            month: "long",
          })}`
        );
      }
  
      return daysInfo;
    }
    const days = getWeekDaysInfo();
    function getFutureDates(array, inputNumber) {
      const result = [];
      for (let i = inputNumber; i < array.length; i++) {
        result.push(array[i]);
      }
  
      for (let i = 0; i < inputNumber; i++) {
        result.push(array[i]);
      }
      return result;
    }
  
    const reorganizeReservation = () => {
      const data = localStorage.getItem("today");
      const getToday = JSON.parse(data);
      if (!getToday) {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const newDataReservation =
          dayOfWeek === 0
            ? getFutureDates(dataUser.reservation, 6)
            : getFutureDates(dataUser.reservation, dayOfWeek - 1);
        setNewData(newDataReservation);
        localStorage.setItem("currentUser",JSON.stringify({ ...dataUser, reservation: newDataReservation }));
        localStorage.setItem("today", JSON.stringify(days[0]));
      }
    };
  
  return {newData,days,navigate,t}
}

export default useServicePlanings