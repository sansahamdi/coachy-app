import React from "react";
import MessagesIcon from "../../assets/icons/TabBar/MessagesIcon";
import ProfileFocusedIcon from "../../assets/icons/TabBar/ProfileFocusedIcon";
import ProfileIcon from "../../assets/icons/TabBar/ProfileIcon";
import PlaningFocusedIcon from "../../assets/icons/TabBar/PlaningFocusedIcon";
import PlaningIcon from "../../assets/icons/TabBar/PlaningIcon";
import MessageFocusedIcon from "../../assets/icons/TabBar/MessageFocusedIcon";
import "./tabBar.css";
import useServiceTabar from "./useServiceTabar";
function TabBar({ handleTabItem, tabItem }) {
  const { showNotif, t, dataUser, navigate } = useServiceTabar(
    handleTabItem,
    tabItem
  );
  return (
    <footer className="tabBar">
      <div className="tabBar">
        <div className="tabList">
          {/* Tab Messages */}
          <div
            className="tabItem1"
            onClick={() => {
              showNotif("Messages");
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {tabItem !== "Messages" ? (
                <MessagesIcon />
              ) : (
                <MessageFocusedIcon />
              )}
              {dataUser.notificationMessage && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                ></div>
              )}
            </div>
            <p
              className="p-tabBar"
              style={tabItem === "Messages" ? { color: "#5D54A0" } : null}
            >
              {t("messages")}
            </p>
          </div>

          {/* Tab Planing */}

          <div
            className="tabItem2"
            onClick={() => {
              showNotif("Planing");
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {dataUser.notificationPlaning && (
                <div style={{
                  position: "absolute",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  padding: "4px",
                }}></div>
              )}
              {tabItem !== "Planing" ? <PlaningIcon /> : <PlaningFocusedIcon />}
            </div>
            <p
              className="p-tabBar"
              style={tabItem === "Planing" ? { color: "#5D54A0" } : null}
            >
              {t("planing")}
            </p>
          </div>

          {/* Tab Profile */}

          <div
            className="tabItem3"
            onClick={() => {
              handleTabItem("Profile");
              navigate("/");
            }}
          >
            {tabItem !== "Profile" ? <ProfileIcon /> : <ProfileFocusedIcon />}
            <p
              className="p-tabBar"
              style={tabItem === "Profile" ? { color: "#5D54A0" } : null}
            >
              {t("profile")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TabBar;
