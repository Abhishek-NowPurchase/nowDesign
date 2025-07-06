import React from 'react';

const SkipBackMiniFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 5C6.29357 5 6.66667 5.3731 6.66667 5.83333V14.1667C6.66667 14.6269 6.29357 15 5.83333 15C5.3731 15 5 14.6269 5 14.1667V5.83333C5 5.3731 5.3731 5 5.83333 5ZM7.56557 10.3404C7.52673 10.313 7.49287 10.2791 7.46545 10.2402C7.33275 10.0522 7.37757 9.79233 7.56557 9.65958L13.5098 5.46373C13.58 5.41411 13.6639 5.38747 13.75 5.38747C13.9801 5.38747 14.1667 5.57402 14.1667 5.80413V14.1958C14.1667 14.2819 14.14 14.3658 14.0904 14.4362C13.9577 14.6242 13.6978 14.669 13.5098 14.5363L7.56557 10.3404Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipBackMiniFill;
