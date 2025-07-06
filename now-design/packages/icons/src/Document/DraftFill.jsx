import React from 'react';

const DraftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 1.66663C17.1269 1.66663 17.5 2.03973 17.5 2.49996V5.63079L10.001 13.1301L9.99583 16.6625L13.5345 16.6676L17.5 12.7016V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667ZM18.1485 7.33963L19.327 8.51812L12.8452 15L11.6649 14.9982L11.6667 13.8215L18.1485 7.33963ZM10 9.99996H5.83333V11.6666H10V9.99996ZM12.5 6.66663H5.83333V8.33329H12.5V6.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DraftFill;
