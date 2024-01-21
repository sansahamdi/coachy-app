import { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function useServicePlaning() {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const data = localStorage.getItem("currentUser");
    const dataUser = JSON.parse(data);
    const getLang=localStorage.getItem('language')

    const [newData, setNewData] = useState(dataUser.reservation);
    useEffect(() => {
      reorganizeReservation();
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
      // const data = localStorage.getItem("today");
      // const getToday = JSON.parse(data);
     
        const today = new Date();
        const dayOfWeek = today.getDay();
        const newDataReservation =
          dayOfWeek === 0
            ? getFutureDates(dataUser.reservation, 6)
            : getFutureDates(dataUser.reservation, dayOfWeek - 1);
        setNewData(newDataReservation);
        // localStorage.setItem("currentUser",JSON.stringify({ ...dataUser, reservation: newDataReservation }));
        localStorage.setItem("today", JSON.stringify(days[0]));
      
    };
  return {
    newData,
    t,
    days,
    navigate
  }
}

export default useServicePlaning