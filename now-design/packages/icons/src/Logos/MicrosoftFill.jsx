import React from 'react';

const MicrosoftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.58433 2.5V9.58333H2.50098V2.5H9.58433ZM9.58433 17.5H2.50098V10.4167H9.58433V17.5ZM10.4177 2.5H17.501V9.58333H10.4177V2.5ZM17.501 10.4167V17.5H10.4177V10.4167H17.501Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MicrosoftFill;
