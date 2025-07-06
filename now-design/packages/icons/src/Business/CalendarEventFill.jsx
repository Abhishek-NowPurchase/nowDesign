import React from 'react';

const CalendarEventFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 2.50004H17.5001C17.9603 2.50004 18.3334 2.87314 18.3334 3.33337V16.6667C18.3334 17.127 17.9603 17.5 17.5001 17.5H2.50008C2.03985 17.5 1.66675 17.127 1.66675 16.6667V3.33337C1.66675 2.87314 2.03985 2.50004 2.50008 2.50004H5.83341V0.833374H7.50008V2.50004H12.5001V0.833374H14.1667V2.50004ZM3.33341 7.50004V15.8334H16.6667V7.50004H3.33341ZM5.00008 10.8334H9.16675V14.1667H5.00008V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CalendarEventFill;
