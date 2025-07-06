import React from 'react';

const TruckFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1663 6.66663H16.6663L19.1663 10.0464V15H17.4702C17.2679 16.4134 16.0523 17.5 14.583 17.5C13.1137 17.5 11.8981 16.4134 11.6958 15H7.47014C7.26796 16.4134 6.05238 17.5 4.58301 17.5C3.11364 17.5 1.89806 16.4134 1.69587 15H0.833008V4.99996C0.833008 4.53973 1.20611 4.16663 1.66634 4.16663H13.333C13.7933 4.16663 14.1663 4.53973 14.1663 4.99996V6.66663ZM14.1663 8.33329V10.8333H17.4997V10.5958L15.8261 8.33329H14.1663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TruckFill;
