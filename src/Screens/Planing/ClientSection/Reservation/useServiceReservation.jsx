import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const useReservationService =(setHideTabBar)=> {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [seeAvailableDay, setSeeAvailableDay] = useState(999);
    const [pickTime, setPickTime] = useState(null);
    const [show, setShow] = useState(false);
    const otherUser = location.state;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const alldataDomaineCoaching = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
    const allDataClient = JSON.parse(localStorage.getItem("dataClient"));
    const days = [
      t('monday'),
      t('tuesday'),
      t('wednesday'),
      t('thursday'),
      t('friday'),
      t('saturday'),
      t('sunday'),
    ];
  
    const reserveSession = (day) => {
      const updatAlldataDomaineCoaching = alldataDomaineCoaching.map((element, index) => {
        if (element.name === otherUser.domaine) {
          const coachUpdate = element.coachs.map((elem, i) => {
            if (elem.firstName === otherUser.firstName) {
              const updateReservation = elem.reservation.map(
                (dayResrvation, place) => {
                  if (day === place) {
                    dayResrvation.push({
                      day: days[day],
                      from: pickTime,
                      to: pickTime + 1,
                      reservationState: "pending",
                      client: {
                        firstName: currentUser.firstName,
                        image_user: currentUser.image_user,
                        lastName: currentUser.firstName,
                        location: {
                          city: currentUser.location.city,
                          latitude: currentUser.location.latitude,
                          longitude: currentUser.location.longitude,
                        },
                      },
                    });
                    return dayResrvation;
                  } else {
                    return [...dayResrvation];
                  }
                }
              );
              let checkIsFound =true
              const updateMessages = elem.messages.map((message) => {
                if (message.user.firstName === currentUser.firstName) {
                  checkIsFound=checkIsFound&&false
                  const addMessage = message.allMessages;
                  addMessage.push({
                    type: "Client",
                    firstName: currentUser.firstName,
                    message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                    phoneNumber: currentUser.phoneNumber,
                  });
                  return { ...message, allMessages: addMessage };
                }
                else{
                  return  {...message}
                 }
              });
              const newMessage = 
              {
                user: {
                  firstName: currentUser.firstName,
                  lastName: currentUser.lastName,
                  image_user: currentUser.image_user,
                },
                allMessages: [
                  {
                    type: "Client",
                    firstName: currentUser.firstName,
                    message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                    phoneNumber: currentUser.phoneNumber,
                  },
                ],
              }
              const addNewMessageFromCoach=updateMessages
              checkIsFound&&addNewMessageFromCoach.push(newMessage)
              const messages=elem.messages.length === 0 ? [newMessage] :!checkIsFound? updateMessages: addNewMessageFromCoach
              const newUserData=bookSession(day,messages);
              localStorage.setItem("currentUser",JSON.stringify(newUserData))
              return {...elem,reservation: updateReservation,messages,notificationPlaning:true,
                notificationMessage:true};
            } else {
              return { ...elem };
            }
          });
          return { ...element, coachs: coachUpdate };
        } else {
          return { ...element };
        }
      });
      const updatClient = allDataClient.map((element, index) => {
        if (element.firstName === currentUser.firstName) {
          const updatedReservation = element.reservation.map((elem, i) => {
            if (i === day) {
              const clientReservationUpdate = elem;
              elem.push({
                day: days[day],
                from: pickTime,
                to: pickTime + 1,
                reservationState: "pending",
                coach: {
                  firstName: otherUser.firstName,
                  lastName: otherUser.lastName,
                  location: {
                    city: otherUser.location.city,
                    latitude: otherUser.location.latitude,
                    longitude: otherUser.location.longitude,
                  },
                  image_user: otherUser.image_user,
                },
              });
              return clientReservationUpdate;
            } else {
              return [...elem];
            }
          });
          let checkIsFound =true
          var updateMessagesClient = element.messages.map((message,i) => {
            if (message.user.firstName === otherUser.firstName && checkIsFound) {
              checkIsFound=checkIsFound&&false
              const addMessage = message.allMessages;
              addMessage.push({
                type: "Client",
                firstName: currentUser.firstName,
                message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                phoneNumber: currentUser.phoneNumber,
              });
              return { ...message, allMessages: addMessage };
            }else{  
             return  {...message}
            }
          });
          const newMessage = 
            {
              user: {
                firstName: otherUser.firstName,
                lastName: otherUser.lastName,
                image_user: otherUser.image_user,
              },
              allMessages: [
                {
                  type: "Client",
                  firstName: currentUser.firstName,
                  message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                  phoneNumber: currentUser.phoneNumber,
                },
              ],
            };
          const addNewMessageFromClient=updateMessagesClient
          checkIsFound&&addNewMessageFromClient.push(newMessage)
          const messages=element.messages.length === 0 ? [newMessage] :checkIsFound?addNewMessageFromClient: updateMessagesClient
          const newUserData=bookSession(day,messages);
          localStorage.setItem("currentUser",JSON.stringify(newUserData))
          return {...element,
            reservation: updatedReservation,
            messages,
            notificationPlaning:true,
            notificationMessage:true
          };
         
        } else {
          const newUserData = bookSession(day, updateMessagesClient);
          localStorage.setItem("currentUser", JSON.stringify(newUserData));
  
          return { ...element };
        }
      });
      localStorage.setItem("dataDomaineCoaching", JSON.stringify(updatAlldataDomaineCoaching));
      localStorage.setItem("dataClient", JSON.stringify(updatClient));
      setHideTabBar(false)
      navigate("/PaymentScreen",{state:{day:days[day],sessionFrom:pickTime,cout:otherUser.Tarification}});

    };
  



    
    const bookSession = (day, messages) => {
      const newReservation = currentUser.reservation.map((element, index) => {
        if (day === index) {
          return [
            ...element,
            {
              day: days[day],
              from: pickTime,
              to: pickTime + 1,
              reservation: "pending",
              coach: {
                firstName: otherUser.firstName,
                lastName: otherUser.lastName,
                location: {
                  city: otherUser.location.city,
                  latitude: otherUser.location.latitude,
                  longitude: otherUser.location.longitude,
                },
                image_user: location.state.image_user,
              },
            },
          ];
        } else {
          return [...element];
        }
      });
      return { ...currentUser, reservation: newReservation, messages,notificationPlaning:true,
        notificationMessage:true };
    };
  return {otherUser,days,seeAvailableDay,setSeeAvailableDay,location,t,setShow,setPickTime,show,pickTime,reserveSession}
}

export default useReservationService 