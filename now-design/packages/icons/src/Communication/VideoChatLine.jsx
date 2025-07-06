import React from 'react';

const VideoChatLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 8.54167L14.1667 6.66667V11.6667L11.6667 9.79167V11.6667H5.83341V6.66667H11.6667V8.54167ZM4.80243 14.1667H16.6667V4.16667H3.33341V15.3209L4.80243 14.1667ZM5.37887 15.8333L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37887Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VideoChatLine;
