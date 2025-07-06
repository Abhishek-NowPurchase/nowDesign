import React from 'react';

const CalendarFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66663 9.16671H18.3333V16.6667C18.3333 17.127 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.127 1.66663 16.6667V9.16671ZM14.1666 2.50004H17.5C17.9602 2.50004 18.3333 2.87314 18.3333 3.33337V7.50004H1.66663V3.33337C1.66663 2.87314 2.03973 2.50004 2.49996 2.50004H5.83329V0.833374H7.49996V2.50004H12.5V0.833374H14.1666V2.50004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CalendarFill;
