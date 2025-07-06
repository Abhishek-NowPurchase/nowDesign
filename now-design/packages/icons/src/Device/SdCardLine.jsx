import React from 'react';

const SdCardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.00016 6.52365V16.6666H15.0002V3.33329H8.19052L5.00016 6.52365ZM3.57757 5.58922L7.50016 1.66663H15.8335C16.2937 1.66663 16.6668 2.03973 16.6668 2.49996V17.5C16.6668 17.9602 16.2937 18.3333 15.8335 18.3333H4.16683C3.7066 18.3333 3.3335 17.9602 3.3335 17.5V6.17847C3.3335 5.95746 3.4213 5.74549 3.57757 5.58922ZM12.5002 4.16663H14.1668V7.49996H12.5002V4.16663ZM10.0002 4.16663H11.6668V7.49996H10.0002V4.16663ZM7.50016 4.99996H9.16683V7.49996H7.50016V4.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SdCardLine;
