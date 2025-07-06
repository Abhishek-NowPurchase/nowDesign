import React from 'react';

const DeleteBackLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.44575 2.5H17.4997C17.96 2.5 18.3331 2.8731 18.3331 3.33333V16.6667C18.3331 17.1269 17.96 17.5 17.4997 17.5H5.44575C5.16712 17.5 4.90693 17.3608 4.75238 17.1289L0.307927 10.4622C0.121316 10.1823 0.121316 9.81767 0.307927 9.53775L4.75238 2.87108C4.90693 2.63925 5.16712 2.5 5.44575 2.5ZM5.89173 4.16667L2.00284 10L5.89173 15.8333H16.6664V4.16667H5.89173ZM13.3331 9.16667V10.8333H7.49976V9.16667H13.3331Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DeleteBackLine;
