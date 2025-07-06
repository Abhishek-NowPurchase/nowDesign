import React from 'react';

const MapPin5Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.7138 13.0474L9.99967 17.7614L5.28563 13.0474C2.68213 10.4439 2.68213 6.22274 5.28563 3.61925C7.88912 1.01575 12.1103 1.01575 14.7138 3.61925C17.3172 6.22274 17.3172 10.4439 14.7138 13.0474ZM4.16634 18.3333H15.833V20H4.16634V18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPin5Fill;
