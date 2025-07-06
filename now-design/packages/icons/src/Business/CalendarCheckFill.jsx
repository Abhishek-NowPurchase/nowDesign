import React from 'react';

const CalendarCheckFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49996 0.833374V2.50004H12.5V0.833374H14.1666V2.50004H17.5C17.9602 2.50004 18.3333 2.87314 18.3333 3.33337V16.6667C18.3333 17.127 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.127 1.66663 16.6667V3.33337C1.66663 2.87314 2.03973 2.50004 2.49996 2.50004H5.83329V0.833374H7.49996ZM16.6666 6.66671H3.33329V15.8334H16.6666V6.66671ZM12.5295 8.44671L13.708 9.62529L9.58329 13.75L6.63702 10.8038L7.81553 9.62529L9.58329 11.393L12.5295 8.44671Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CalendarCheckFill;
