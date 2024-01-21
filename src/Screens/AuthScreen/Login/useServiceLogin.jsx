import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function useServiceLogin(setIsLoggedIn,setTypeUser,setHideTabBar) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const dataDomaineCoaching=JSON.parse(localStorage.getItem('dataDomaineCoaching'))
    const dataClient=JSON.parse(localStorage.getItem('dataClient') )
  
    const login = () => {
      dataClient.map((element, index) => {
        if (username === element.phoneNumber && password === element.Password) {
          localStorage.setItem('token', "kqjhdbmkqsjhdmqksjhdmsqkjhd");
          localStorage.setItem('currentUser', JSON.stringify(element));
          localStorage.setItem('typeUser',"Client")
          setTypeUser('Client')
          setIsLoggedIn(true);
          setHideTabBar(true)
          navigate("/");
        }
      });
      dataDomaineCoaching.map((element,index)=>{
        element.coachs.map((coach,place)=>{
          if (username === coach.phoneNumber && password === coach.password) {
            setIsLoggedIn(true);
            navigate("/");
            setTypeUser('Coach')
            setHideTabBar(true)
            localStorage.setItem('currentUser', JSON.stringify(coach));
            localStorage.setItem('token', "kqjhdbmkqsjhdmqksjhdmsqkjhd");
            localStorage.setItem('typeUser',"Coach")
  
          }
        })
      })
      
     
    };
  return {
    setusername,t,setPassword,login,navigate
  }
}

export default useServiceLogin