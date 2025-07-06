import React from 'react';

const TimerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.6814 4.97334L15.8926 3.76219L17.0711 4.94069L15.8599 6.15184C16.8863 7.43491 17.5 9.06242 17.5 10.8333C17.5 14.9754 14.1422 18.3333 10 18.3333C5.85787 18.3333 2.5 14.9754 2.5 10.8333C2.5 6.69112 5.85787 3.33325 10 3.33325C11.7708 3.33325 13.3983 3.94698 14.6814 4.97334ZM9.16667 6.66658V11.6666H10.8333V6.66658H9.16667ZM6.66667 0.833252H13.3333V2.49992H6.66667V0.833252Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TimerFill;
