import React from 'react';

const SimCard2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16683 1.66663H12.5002L16.4227 5.58922C16.579 5.74549 16.6668 5.95746 16.6668 6.17847V17.5C16.6668 17.9602 16.2937 18.3333 15.8335 18.3333H4.16683C3.7066 18.3333 3.3335 17.9602 3.3335 17.5V2.49996C3.3335 2.03973 3.7066 1.66663 4.16683 1.66663ZM10.8335 15V8.33329H6.66683V9.99996H9.16683V15H10.8335ZM6.66683 10.8333V12.5H8.3335V10.8333H6.66683ZM11.6668 10.8333V12.5H13.3335V10.8333H11.6668ZM11.6668 8.33329V9.99996H13.3335V8.33329H11.6668ZM6.66683 13.3333V15H8.3335V13.3333H6.66683ZM11.6668 13.3333V15H13.3335V13.3333H11.6668Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SimCard2Fill;
