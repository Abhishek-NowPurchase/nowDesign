import React from 'react';

const MixtralLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 2.5H6.83335V5.1667L9.50008 5.16677V7.83346L10.5 7.83348L10.5001 5.16675H13.1667V2.5H17.5V17.5H13.1667V12.1667L12.1667 12.1667V14.8333H7.83332V12.1667L6.83335 12.1667V17.5H2.5V2.5ZM4.16667 4.16667V15.8333H5.16668V10.4998L9.5 10.5002V13.1666H10.5V10.4998L14.8333 10.5002V15.8333H15.8333V4.16667H14.8333V6.83342H12.1667L12.1667 9.50017L7.83343 9.50008V6.8334L5.16668 6.83332V4.16667H4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MixtralLine;
