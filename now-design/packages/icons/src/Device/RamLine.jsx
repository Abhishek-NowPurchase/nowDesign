import React from 'react';

const RamLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50016 5.83329H17.5002V14.1666H15.8335V12.5H14.1668V14.1666H12.5002V12.5H10.8335V14.1666H9.16683V12.5H7.50016V14.1666H5.8335V12.5H4.16683V14.1666H2.50016V5.83329ZM1.66683 4.16663C1.2066 4.16663 0.833496 4.53973 0.833496 4.99996V15C0.833496 15.4602 1.2066 15.8333 1.66683 15.8333H18.3335C18.7937 15.8333 19.1668 15.4602 19.1668 15V4.99996C19.1668 4.53973 18.7937 4.16663 18.3335 4.16663H1.66683ZM9.16683 7.49996H4.16683V9.99996H9.16683V7.49996ZM10.8335 7.49996H15.8335V9.99996H10.8335V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RamLine;
