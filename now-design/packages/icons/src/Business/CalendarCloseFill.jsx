import React from 'react';

const CalendarCloseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49996 2.50004V0.833374H5.83329V2.50004H2.49996C2.03973 2.50004 1.66663 2.87314 1.66663 3.33337V16.6667C1.66663 17.127 2.03973 17.5 2.49996 17.5H17.5C17.9602 17.5 18.3333 17.127 18.3333 16.6667V3.33337C18.3333 2.87314 17.9602 2.50004 17.5 2.50004H14.1666V0.833374H12.5V2.50004H7.49996ZM3.33329 6.66671H16.6666V15.8334H3.33329V6.66671ZM8.23206 8.30362L9.99987 10.0715L11.7675 8.30364L12.9461 9.48212L11.1784 11.25L12.946 13.0176L11.7676 14.1962L9.99987 12.4285L8.232 14.1962L7.05356 13.0176L8.82129 11.25L7.05351 9.48212L8.23206 8.30362Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CalendarCloseFill;
