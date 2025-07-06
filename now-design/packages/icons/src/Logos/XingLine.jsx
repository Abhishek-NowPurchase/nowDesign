import React from 'react';

const XingLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.0369 2.91675L11.5082 12.4918L14.8811 18.3334H12.9561L9.58508 12.4929L9.58358 12.4921L15.1119 2.91675H17.0369ZM6.92527 5.83341L8.94367 9.33025L8.94208 9.33116L6.39111 13.7501H4.46777L7.01846 9.32933L5.00111 5.83341H6.92527Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default XingLine;
