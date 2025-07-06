import React from 'react';

const ChatNewLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 2.5V4.16667H3.33341V15.3209L4.80243 14.1667H16.6667V8.33333H18.3334V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37887L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H11.6667ZM15.8334 2.5V0H17.5001V2.5H20.0001V4.16667H17.5001V6.66667H15.8334V4.16667H13.3334V2.5H15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatNewLine;
