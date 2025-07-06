import React from 'react';

const Shape2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 13.3333H18.3334V18.3333H13.3334V16.6666H6.66675V18.3333H1.66675V13.3333H3.33341V6.66663H1.66675V1.66663H6.66675V3.33329H13.3334V1.66663H18.3334V6.66663H16.6667V13.3333ZM15.0001 13.3333V6.66663H13.3334V4.99996H6.66675V6.66663H5.00008V13.3333H6.66675V15H13.3334V13.3333H15.0001ZM3.33341 3.33329V4.99996H5.00008V3.33329H3.33341ZM3.33341 15V16.6666H5.00008V15H3.33341ZM15.0001 3.33329V4.99996H16.6667V3.33329H15.0001ZM15.0001 15V16.6666H16.6667V15H15.0001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Shape2Line;
