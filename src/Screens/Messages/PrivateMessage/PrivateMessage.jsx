import React from "react";
import BackIcon from "../../../assets/icons/BackIcon";
import "./privateMessage.css";
import CustomInput from "./CustomInput";
import useServicePrvMessage from "./useServicePrvMessage";
function PrivateMessage({ setHideTabBar }) {
  const {
    location,
    allmessages,
    getUser,
    sendMessage,
    setNewMessage
  }=useServicePrvMessage()

  return (
    <div className="container-private-message">
      <div className="container-class">
        <div className="header-private-message">
          <div
            onClick={() => {
              setHideTabBar(true);
            }}
          >
            <BackIcon />
          </div>
          <img
            className="image-user"
            src={location.state.user.image_user}
            style={{ marginLeft: 30 }}
          />
          <p className="name-user-private-message">{location.state.user.firstName} {location.state.user.lastName}</p>
        </div>
        <div className="container-class"></div>
      </div>
      <div className="allMessagesPrivate-container">
        {allmessages.map((message, index) => {
          if (message.type === getUser.type) {
            return (
              <div className="message-container-me" key={index}>
                <div className="message-content">
                  <p className="message-txt-me">{message.message}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="message-container-destination" key={index}>
                <div className="message-content-destination">
                  <p className="message-txt-destination">{message.message}</p>
                </div>
              </div>
            );
          }
        })}
      </div>

      <CustomInput sendMessage={sendMessage} setNewMessage={setNewMessage} />
    </div>
  );
}

export default PrivateMessage;
