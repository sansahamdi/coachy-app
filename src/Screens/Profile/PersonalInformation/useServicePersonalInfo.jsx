import React, { useState } from 'react'
import './persoInfo.css'
import { useNavigate,useLocation } from "react-router-dom";
import { Camera, CameraResultType } from '@capacitor/camera';
import { useTranslation } from 'react-i18next'
function useServicePersonalInfo() {
    const {t}=useTranslation()
    const navigate = useNavigate();
    const Location = useLocation();
    const [photo, setPhoto] = useState(null);
  
    const getAllCoachs = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
    const getAllClients = JSON.parse(localStorage.getItem("dataClient"));
    const data= Location.state
    const createShortUrl = (dataUrl) => {
      const blob = dataURItoBlob(dataUrl);
      const url = URL.createObjectURL(blob);
      return url;
    };
    const dataURItoBlob = (dataURI) => {
      const byteString = atob(dataURI.split(',')[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
    
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
    
      return new Blob([ab], { type: 'image/png' }); 
    };
  
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      const shortenedUrl = createShortUrl(image.dataUrl);
      if(data.type==="Client"){ 
       const updateAllClients= getAllClients.map((client)=>{
          if(client.firstName===data.firstName){
            localStorage.setItem('currentUser',JSON.stringify({...client,image_user:image.dataUrl}))
            return{...client,image_user:image.dataUrl}
          }else{
            return{...client}
          }
        })
        localStorage.setItem('dataClient',JSON.stringify(updateAllClients))
  
      }else{
        const updateAllCoachs=getAllCoachs.map((element)=>{
          if(element.name===data.domaine){
           const updateCoachs= element.coachs.map((coach)=>{
              if(coach.firstName===data.firstName){
                localStorage.setItem('currentUser',JSON.stringify({...coach,image_user:image.dataUrl}))
                return {...coach,image_user:image.dataUrl}
              }else{
                return {...coach}
              }
            })
            return {...element,coachs:updateCoachs}
          }else{
            return {...element}
          }
        })
        localStorage.setItem('dataDomaineCoaching',JSON.stringify(updateAllCoachs))
      }
      setPhoto(shortenedUrl);
    };
  
  return {photo,data,takePhoto,t,navigate}
}

export default useServicePersonalInfo