import React from 'react';

const FacesUser3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6673 18.3334H3.33398V16.6667C3.33398 14.3655 5.19947 12.5 7.50065 12.5H12.5007C14.8018 12.5 16.6673 14.3655 16.6673 16.6667V18.3334ZM10.0007 10.8334C7.23923 10.8334 5.00065 8.59479 5.00065 5.83337C5.00065 3.07195 7.23923 0.833374 10.0007 0.833374C12.7621 0.833374 15.0007 3.07195 15.0007 5.83337C15.0007 8.59479 12.7621 10.8334 10.0007 10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesUser3Fill;
