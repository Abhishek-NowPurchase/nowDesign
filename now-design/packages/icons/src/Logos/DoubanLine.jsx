import React from 'react';

const DoubanLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.7279 12.5H4.16667V5.83333H15.8333V12.5H14.4803L13.3973 15.8333H17.5V17.5H2.5V15.8333H6.34358L5.66667 13.75L7.25176 13.235L8.09602 15.8333H11.6448L12.7279 12.5ZM2.91667 2.5H17.0833V4.16667H2.91667V2.5ZM5.83333 7.5V10.8333H14.1667V7.5H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoubanLine;
