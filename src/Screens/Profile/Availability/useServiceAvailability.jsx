import {useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next';
function useServiceAvailability() {
    const {t}=useTranslation()
    const data = localStorage.getItem("currentUser");
    const dataParsed = JSON.parse(data);
    const getAllCoachs = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
    const [dataUser, setDataUser] = useState(dataParsed);
    const [bookFrom, setBookFrom] = useState({ hour: 0, min: 0 });
    const [bookTo, setBookTo] = useState({ hour: 0, min: 0 });
    const [editAvailability, setEditAvailability] = useState(null);
    const days = [
      t('monday'),
      t('tuesday'),
      t('wednesday'),
      t('thursday'),
      t('friday'),
      t('saturday'),
      t('sunday'),
    ];
  
    const editTime = (day, session) => {
      const newDataAvailibility = dataUser.availability.map((element, index) => {
        if (day === index) {
          if (element.length === 0) {
            return [{ from: bookFrom.hour, to: bookTo.hour }];
          } else {
            return element.map((elem, i) => {
              if (session === i) {
                return { from: bookFrom.hour, to: bookTo.hour };
              }
              return { ...elem };
            });
          }
        }
        return [...element];
      });
      const updatAllCoachsbyDomaine = getAllCoachs.map((element) => {
        if (element.name === dataParsed.domaine) {
          const UpdateAllCoachs = element.coachs.map((coach) => {
            if (coach.firstName === dataParsed.firstName) {
              return { ...coach, availability: newDataAvailibility };
            } else {
              return { ...coach };
            }
          });
          return { ...element, coachs: UpdateAllCoachs };
        } else {
          return { ...element };
        }
      });
      setEditAvailability(null);
      localStorage.setItem("dataDomaineCoaching", JSON.stringify(updatAllCoachsbyDomaine));
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...dataUser, availability: newDataAvailibility })
      );
      setDataUser({ ...dataUser, availability: newDataAvailibility });
    };
  
  return {
    t,dataUser,days,setEditAvailability,setBookFrom,setBookTo,bookFrom,bookTo,editAvailability,editTime
  }
}

export default useServiceAvailability