import React from "react";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import "./allMessages.css";
import { useNavigate } from "react-router-dom";
function AllMessages({setHideTabBar}) {
  const navigate= useNavigate()
  const getUserMessages = JSON.parse(localStorage.getItem("currentUser"));


  return (
    <div className="allMessages">
      <div className="allMessages-container">
        <p className="text-interface">Messages</p>
        
        <div className="line"></div>
        {getUserMessages.messages.map((element, index) => {
          return (
            <div key={index} className="allMessages" onClick={()=>{
              navigate('/PrivateMessage',{state:{user:element.user,index}});
              setHideTabBar(false)
            }}>
              <div className="message">
                <div className="message-detail">
                  <div>
                    <img
                      className="image-user"
                      src={element.user.image_user}
                    />
                  </div>
                  <div>
                    <p className="name-user">
                      {element.user.firstName} {element.user.lastName}
                    </p>
                    <p className="txt-description">
                      Bonjour, vous - Wednesday,4 October
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: 10 }}>
                  <ArrowrightIcon />
                </div>
              </div>
              <div className="line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllMessages;
