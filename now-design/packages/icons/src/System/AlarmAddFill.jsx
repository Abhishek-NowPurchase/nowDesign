import React from 'react';

const AlarmAddFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50026 10.8334C2.50026 14.9755 5.85813 18.3334 10.0002 18.3334C14.1424 18.3334 17.5002 14.9755 17.5002 10.8334C17.5002 6.69126 14.1424 3.33339 10.0002 3.33339C5.85813 3.33339 2.50026 6.69126 2.50026 10.8334ZM4.40233 2.28918L1.45605 5.23546L2.63456 6.41398L5.58085 3.46769L4.40233 2.28918ZM18.5445 5.23546L15.5982 2.28918L14.4197 3.46769L17.366 6.41398L18.5445 5.23546ZM9.16683 7.49996H10.8335V9.99996H13.3335V11.6666H10.8335V14.1666H9.16683V11.6666H6.66683V9.99996H9.16683V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AlarmAddFill;
