import React from 'react';

const ShutDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.22058 3.17244L6.17643 4.53794C4.45713 5.74368 3.33317 7.74057 3.33317 9.99996C3.33317 13.6819 6.31794 16.6666 9.99984 16.6666C13.6818 16.6666 16.6665 13.6819 16.6665 9.99996C16.6665 7.74057 15.5425 5.74368 13.8233 4.53794L14.7791 3.17244C16.9283 4.67962 18.3332 7.17572 18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 7.17572 3.07145 4.67962 5.22058 3.17244ZM9.1665 9.99996V1.66663H10.8332V9.99996H9.1665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShutDownLine;
