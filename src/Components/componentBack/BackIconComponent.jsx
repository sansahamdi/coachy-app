import React from "react";
import { useNavigate } from "react-router-dom";
import "./back.css";
function BackIconComponent({ setHideTabBar,sethideTabBarforCoachDetail }) {
  const navigate = useNavigate();
  return (
    <div
      className="backIconContainer"
      onClick={() => {
        navigate(-1);
        setHideTabBar(true);
        sethideTabBarforCoachDetail(false)
      }}
    >
      <div className="circle-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M5.25938 12.375L12.9594 20.075L11 22L0 11L11 0L12.9594 1.925L5.25938 9.625H22V12.375H5.25938Z"
            fill="#FFFBFB"
          />
        </svg>
      </div>
    </div>
  );
}

export default BackIconComponent;
