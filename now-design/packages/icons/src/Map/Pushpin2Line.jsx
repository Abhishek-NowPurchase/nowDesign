import React from 'react';

const Pushpin2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.0003 2.5V4.16667H14.167V9.16667L15.8337 11.6667V13.3333H10.8337V19.1667H9.16699V13.3333H4.16699V11.6667L5.83366 9.16667V4.16667H5.00033V2.5H15.0003ZM7.50033 4.16667V9.67133L6.17008 11.6667H13.8306L12.5003 9.67133V4.16667H7.50033Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Pushpin2Line;
