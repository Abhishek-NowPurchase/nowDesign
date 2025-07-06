import React from 'react';

const SdCardMiniFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.8335 1.66663H15.8335C16.2937 1.66663 16.6668 2.03973 16.6668 2.49996V17.5C16.6668 17.9602 16.2937 18.3333 15.8335 18.3333H4.16683C3.7066 18.3333 3.3335 17.9602 3.3335 17.5V10.3496C3.3335 10.129 3.42094 9.91746 3.57665 9.76121L4.87858 8.45529C4.95645 8.37713 5.00016 8.27137 5.00016 8.16108V2.49996C5.00016 2.03973 5.37326 1.66663 5.8335 1.66663ZM12.5002 3.33329V6.66663H14.1668V3.33329H12.5002ZM10.0002 3.33329V6.66663H11.6668V3.33329H10.0002ZM7.50016 3.33329V6.66663H9.16683V3.33329H7.50016Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SdCardMiniFill;
