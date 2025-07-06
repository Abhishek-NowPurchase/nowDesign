import React from 'react';

const FacesUserFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33398 18.3334C3.33398 14.6515 6.31875 11.6667 10.0007 11.6667C13.6826 11.6667 16.6673 14.6515 16.6673 18.3334H3.33398ZM10.0007 10.8334C7.23815 10.8334 5.00065 8.59587 5.00065 5.83337C5.00065 3.07087 7.23815 0.833374 10.0007 0.833374C12.7632 0.833374 15.0007 3.07087 15.0007 5.83337C15.0007 8.59587 12.7632 10.8334 10.0007 10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesUserFill;
