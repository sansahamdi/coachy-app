import React from "react";
import "./direction.css";
function DirectionMap({setOpenModal}) {
  return (
    <div
      className="DirectionContainer"
      onClick={() => {
        setOpenModal(true)
      }}
    >
      <div className="circle-container">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M8.8 28.875L6.875 26.95L13.5094 20.2813C14.0365 19.7542 14.4375 19.1583 14.7125 18.4938C14.9875 17.8292 15.125 17.1302 15.125 16.3969V9.38438L12.925 11.55L11 9.625L16.5 4.125L22 9.625L20.075 11.55L17.875 9.38438V16.3969C17.875 17.1302 18.0125 17.8292 18.2875 18.4938C18.5625 19.1583 18.9635 19.7542 19.4906 20.2813L26.125 26.95L24.2 28.875L16.5 21.175L8.8 28.875Z"
        fill="#FFFBFB"
      />
    </svg>
      </div>
    </div>
  );
}

export default DirectionMap;
