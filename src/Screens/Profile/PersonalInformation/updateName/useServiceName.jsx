import  { useState } from "react";
import "./updatName.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function useServiceName() {
    const {t}=useTranslation()
    const Location = useLocation();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const getAllCoachs = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
    const getAllClients = JSON.parse(localStorage.getItem("dataClient"));
    const getDataUser = JSON.parse(localStorage.getItem("currentUser"));
    const data = Location.state;
  
    const updateFullName = () => {
      if(firstName.length!==0 && lastName.length!==0){
        if (data.type === "Client") {
        const UpdateClient = getAllClients.map((client) => {
          if (client.firstName === data.firstName) {
            localStorage.setItem("currentUser",JSON.stringify({ ...client, firstName, lastName }))
  
            return { ...client, firstName, lastName };
          } else {
            return { ...client };
          }
        });
        localStorage.setItem("dataClient",JSON.stringify(UpdateClient))
        navigate('/')
      } else {
  
        const UpdateCoach = getAllCoachs.map((element) => {
          if (element.name === data.domaine) {
           const updateCoachs=element.coachs.map((coach) => {
              if (coach.firstName === data.firstName) {
                localStorage.setItem("currentUser",JSON.stringify({ ...coach, firstName, lastName }))
                return { ...coach, firstName, lastName };
              } else {
                return { ...coach };
              }
            });
            return {...element,coachs:updateCoachs}
          } else {
            return { ...element };
          }
        });
        localStorage.setItem("dataDomaineCoaching",JSON.stringify(UpdateCoach))
        navigate('/')
      }
      }else{
        console.log("remplir tout le champs");
      }
      
    };
  return {
    setFirstName,setLastName,updateFullName,t
  }
}

export default useServiceName