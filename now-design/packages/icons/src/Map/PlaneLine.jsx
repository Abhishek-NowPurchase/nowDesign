import React from 'react';

const PlaneLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 7.4561L18.3333 11.6666V13.3333L11.6667 11.228V15.6944L14.1667 17.0833V18.3333L10.4167 17.5L6.66667 18.3333V17.0833L9.16667 15.6944V11.228L2.5 13.3333V11.6666L9.16667 7.4561V2.91663C9.16667 2.22627 9.72633 1.66663 10.4167 1.66663C11.107 1.66663 11.6667 2.22627 11.6667 2.91663V7.4561Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlaneLine;
