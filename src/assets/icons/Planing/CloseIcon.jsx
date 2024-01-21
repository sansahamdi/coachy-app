import React from "react";
import { useNavigate } from "react-router-dom";

function CloseIcon() {
  const navigate = useNavigate();

  return (
    <svg
    onClick={()=>{navigate(-1)}}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M8.375 27.5L6.25 25.375L14.75 16.875L6.25 8.375L8.375 6.25L16.875 14.75L25.375 6.25L27.5 8.375L19 16.875L27.5 25.375L25.375 27.5L16.875 19L8.375 27.5Z"
        fill="#3F3C3C"
      />
    </svg>
  );
}

export default CloseIcon;
