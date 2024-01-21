import React from "react";

function ArrowDecrementTime({width,height,color="#777272"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M1.03956 1.0791L5.07148 4.5791ZM5.07148 4.5791L9.10339 1.0791Z"
        fill={color}
        fillOpacity="0.6"
      />
      <path
        d="M1.03956 1.0791L5.07148 4.5791L9.10339 1.0791"
        stroke={color}
        strokeOpacity="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowDecrementTime;
