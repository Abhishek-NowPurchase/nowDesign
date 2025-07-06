import React from 'react';

const PauseMiniLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.4997 5.83333C12.4997 5.3731 12.8728 5 13.333 5C13.7933 5 14.1663 5.3731 14.1663 5.83333V14.1667C14.1663 14.6269 13.7933 15 13.333 15C12.8728 15 12.4997 14.6269 12.4997 14.1667V5.83333ZM5.83301 5.83333C5.83301 5.3731 6.20611 5 6.66634 5C7.12657 5 7.49967 5.3731 7.49967 5.83333V14.1667C7.49967 14.6269 7.12657 15 6.66634 15C6.20611 15 5.83301 14.6269 5.83301 14.1667V5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PauseMiniLine;
