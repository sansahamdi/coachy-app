import React from 'react'
import './persoInfo.css'
import BackIcon from '../../../assets/icons/BackIcon'
import ArrowrightIcon from '../../../assets/icons/ArrowrightIcon'
import AddPicIcon from '../../../assets/icons/Profile/AddPicIcon'

import useServicePersonalInfo from './useServicePersonalInfo'
function PersonalInfo() {
  const {photo,data,takePhoto,t,navigate} = useServicePersonalInfo()
  return (
    <div className="perso-info-container">
      <div className="container-perso">

        <div className="navigate" >
          <BackIcon/>
          <p className="name-page">{t('personalInfo')}</p>
        </div>

        <div className="img-container">
          <div className="profile-imag" onClick={takePhoto}>
            <img src={photo?photo:data.image_user} className="profile-imag"/>
            <div className='camera-icon'>
            <AddPicIcon/>
            </div>
          </div>
        </div>

        <div className="perso-conatiner">
          <div className="line"></div>
          <p className="attribute-info">{t('fullName')}</p>
          <div className="detail-info" onClick={()=>{navigate('/UpdateName',{state:data})}}>
            <p className="value-info">{data.firstName} {data.lastName}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          <p className="attribute-info">{t('age')}</p>
          <div className="detail-info" onClick={()=>{navigate('/UpdateAge',{state:data})}}>
            <p className="value-info">{data.age} yo </p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
          <p className="attribute-info">{t('phoneNumber')}</p>
          <div className="detail-info">
            <p className="value-info">+41 {data.phoneNumber}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
          
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo