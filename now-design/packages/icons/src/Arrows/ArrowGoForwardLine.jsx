import React from 'react';

const ArrowGoForwardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.143 5.833H9.16667C6.40524 5.833 4.16667 8.07158 4.16667 10.833C4.16667 13.5945 6.40524 15.833 9.16667 15.833H16.6667V17.4997H9.16667C5.48477 17.4997 2.5 14.5149 2.5 10.833C2.5 7.1511 5.48477 4.16634 9.16667 4.16634H15.143L13.03 2.05339L14.2086 0.874878L18.3333 4.99967L14.2086 9.12446L13.03 7.94595L15.143 5.833Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowGoForwardLine;
