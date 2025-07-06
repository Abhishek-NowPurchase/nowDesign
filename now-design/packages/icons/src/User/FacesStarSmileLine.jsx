import React from 'react';

const FacesStarSmileLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99885 0.416626L13.5205 5.56948L19.5094 7.32646L15.697 12.268L15.8767 18.5068L9.99885 16.408L4.12099 18.5068L4.30068 12.268L0.488281 7.32646L6.47719 5.56948L9.99885 0.416626ZM9.99885 3.36996L7.5174 7.00122L3.29634 8.23913L5.98379 11.7212L5.85635 16.1166L9.99885 14.6383L14.1405 16.1166L14.0139 11.7212L16.7005 8.23913L12.4803 7.00122L9.99885 3.36996ZM8.33218 9.99996C8.33218 10.9205 9.07835 11.6666 9.99885 11.6666C10.9194 11.6666 11.6655 10.9205 11.6655 9.99996H13.3322C13.3322 11.8409 11.8398 13.3333 9.99885 13.3333C8.1579 13.3333 6.66551 11.8409 6.66551 9.99996H8.33218Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesStarSmileLine;
