import React from 'react';

const ArrowGoBackLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.85703 5.833L6.96997 7.94595L5.79146 9.12446L1.66667 4.99967L5.79146 0.874878L6.96997 2.05339L4.85703 4.16634H10.8333C14.5153 4.16634 17.5 7.1511 17.5 10.833C17.5 14.5149 14.5153 17.4997 10.8333 17.4997H3.33334V15.833H10.8333C13.5948 15.833 15.8333 13.5945 15.8333 10.833C15.8333 8.07158 13.5948 5.833 10.8333 5.833H4.85703Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowGoBackLine;
