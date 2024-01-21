import React from "react";
import "./privateMessage.css";
function CustomInput({sendMessage,setNewMessage}) {
  return (
    <footer className="customInput-conatiner">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width:"100%"
        }}
      >
        <input
        onChange={(e)=>{setNewMessage(e.target.value)}}
          type="text"
          placeholder="Entrez votre message"
          className="message-input"
        />
        <button className="send-button" onClick={sendMessage}>
          <span role="img" aria-label="Envoyer">
            &#x27A4;
          </span>
        </button>
      </div>
    </footer>
  );
}

export default CustomInput;
