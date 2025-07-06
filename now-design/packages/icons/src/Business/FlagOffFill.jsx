import React from 'react';

const FlagOffFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.8215 14.9999L17.6604 18.8388L18.839 17.6603L2.33977 1.16113L1.16125 2.33965L2.50003 3.67842V18.3333H4.1667V13.3333H10L10.603 14.5393C10.7442 14.8216 11.0327 14.9999 11.3484 14.9999H13.8215ZM17.5 4.9999V13.9646L6.03531 2.4999H10.3183C10.634 2.4999 10.9225 2.67824 11.0637 2.96056L11.6667 4.16657H16.6667C17.127 4.16657 17.5 4.53967 17.5 4.9999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlagOffFill;
