import React from 'react';

const ChatDeleteLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.37887 15.8333L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37887ZM3.33341 15.3209L4.80243 14.1667H16.6667V4.16667H3.33341V15.3209ZM11.1786 9.16667L13.241 11.2291L12.0625 12.4076L10.0001 10.3452L7.93769 12.4076L6.75917 11.2291L8.82158 9.16667L6.75917 7.10428L7.93769 5.92576L10.0001 7.98816L12.0625 5.92576L13.241 7.10428L11.1786 9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatDeleteLine;
