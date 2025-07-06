import React from 'react';

const ArrowTurnBackFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 13.3333H10.8333L15 18.3333L19.1667 13.3333H15.8333V9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667V16.6667H4.16667V9.16667C4.16667 6.40524 6.40524 4.16667 9.16667 4.16667C11.9281 4.16667 14.1667 6.40524 14.1667 9.16667V13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowTurnBackFill;
