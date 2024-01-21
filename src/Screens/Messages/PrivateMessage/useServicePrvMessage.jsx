import { useState } from "react";
import "./privateMessage.css";
import { useLocation } from "react-router-dom";
function useServicePrvMessage() {
    const location = useLocation();
    const getUser = JSON.parse(localStorage.getItem("currentUser"));
    const getClients = JSON.parse(localStorage.getItem("dataClient"));
    const getCoachs = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
    const [newMessage, setNewMessage] = useState("");
    const [allmessages, setAllMessages] = useState(
      getUser.messages[location.state.index ? location.state.index : 0]
        .allMessages
    );
   
    const user = location.state.index ? location.state.index : 0;
  
    const sendMessage = () => {
      if (newMessage.length !== 0) {
        const newDataUserMessages = getUser.messages.map((element, index) => {
          if (index === user) {
            const updateMessages = element.allMessages;
            updateMessages.push({
              firstName: getUser.firstName,
              type: getUser.type,
              message: newMessage,
            });
            return { ...element, allMessages: updateMessages };
          } else {
            return { ...element };
          }
        });
        const newUser = { ...getUser, messages: newDataUserMessages };
        if (getUser.type === "Client") {
          const updateAllClient = getClients.map((element, index) => {
            if (element.firstName === getUser.firstName) {
              return newUser;
            } else {
              return { ...element };
            }
          });
          const updatAllCoachsbyDomaine = getCoachs.map((element, index) => {
            const updatingCoachs = element.coachs.map((coach) => {
              if (coach.firstName === location.state.user.firstName) {
               const updateMessages= coach.messages.map((message) => {
                  if (message.user.firstName === getUser.firstName) {
                    const addnewMessage = message.allMessages;
                    addnewMessage.push({
                      type: "Client",
                      firstName: getUser.firstName,
                      message: newMessage,
                      phoneNumber: getUser.phoneNumber,
                    });
  
                    return{...message,allMessages:addnewMessage}
                  } else {
                    return { ...message };
                  }
                });
                return{...coach,messages:updateMessages,notificationMessage:true}
              } else {
                return { ...coach };
              }
            });
            return { ...element, coachs: updatingCoachs };
          });
          localStorage.setItem("dataClient", JSON.stringify(updateAllClient));
          localStorage.setItem("dataDomaineCoaching",JSON.stringify(updatAllCoachsbyDomaine));
        } else {
          const updatAllCoachsbyDomaine = getCoachs.map((element, index) => {
            if (element.name === getUser.domaine) {
              const updateAllCoachs = element.coachs.map((coach, ind) => {
                if (coach.firstName === getUser.firstName) {
                  return { ...coach, messages: newDataUserMessages };
                } else {
                  return { ...coach };
                }
              });
              return { ...element, coachs: updateAllCoachs };
            } else {
              return { ...element };
            }
          });
          const updateAllClientFromCoach = getClients.map((element, index) => {
            if (element.firstName === location.state.user.firstName) {
              const updateMessages = element.messages.map((message, indice) => {
                if (message.user.firstName === getUser.firstName) {
                  const addnewMessage = message.allMessages;
                  addnewMessage.push({
                    type: "Coach",
                    firstName: getUser.firstName,
                    message: newMessage,
                    phoneNumber: getUser.phoneNumber,
                  });
                  return { ...message, allMessages: addnewMessage };
                } else {
                  return { ...message };
                }
              });
              return { ...element, messages: updateMessages,notificationMessage:true };
            } else {
              return { ...element };
            }
          });
          localStorage.setItem("dataDomaineCoaching",JSON.stringify(updatAllCoachsbyDomaine));
          localStorage.setItem("dataClient",JSON.stringify(updateAllClientFromCoach));
        }
  
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        setAllMessages(newUser.messages[location.state.index ? location.state.index : 0].allMessages);
      }
    };
  return {
    location,
    allmessages,
    getUser,
    sendMessage,
    setNewMessage
  }
}

export default useServicePrvMessage