import React from "react";

function ArrowIncrementTime({width,height,color="#777272"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 5"
      fill="none"
    >
      <path
        d="M9.10338 4.0791L5.07147 0.579102ZM5.07147 0.579102L1.03955 4.0791Z"
        fill={color}
        fillOpacity="0.6"
      />
      <path
        d="M9.10338 4.0791L5.07147 0.579102L1.03955 4.0791"
        stroke={color}
        strokeOpacity="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIncrementTime;
