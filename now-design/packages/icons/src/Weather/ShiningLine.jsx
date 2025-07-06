import React from 'react';

const ShiningLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M0.833984 9.16671C5.43636 9.16671 9.16732 5.43575 9.16732 0.833374H10.834C10.834 5.43575 14.565 9.16671 19.1673 9.16671V10.8334C14.565 10.8334 10.834 14.5644 10.834 19.1667H9.16732C9.16732 14.5644 5.43636 10.8334 0.833984 10.8334V9.16671ZM4.83683 10C7.14144 11.0078 8.9929 12.8592 10.0007 15.1639C11.0084 12.8592 12.8598 11.0078 15.1645 10C12.8598 8.99229 11.0084 7.14083 10.0007 4.83622C8.9929 7.14083 7.14144 8.99229 4.83683 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShiningLine;
