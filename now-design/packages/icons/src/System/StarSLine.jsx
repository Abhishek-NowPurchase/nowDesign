import React from 'react';

const StarSLine = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.99967 14.1666L5.10148 17.1584L6.43323 11.5754L2.07422 7.84144L7.79549 7.38277L9.99967 2.08325L12.2039 7.38277L17.9252 7.84144L13.5662 11.5754L14.8979 17.1584L9.99967 14.1666ZM9.99967 12.2136L12.3469 13.6473L11.7088 10.9719L13.7977 9.18259L11.0559 8.96275L9.99967 6.42319L8.94342 8.96275L6.20174 9.18259L8.29061 10.9719L7.65243 13.6473L9.99967 12.2136Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StarSLine;
