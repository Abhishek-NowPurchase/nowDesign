import React from 'react';

const FacesUserUnfollowFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6673 11.8767V18.3334H3.33398C3.33398 14.6515 6.31875 11.6667 10.0007 11.6667C10.5762 11.6667 11.1347 11.7396 11.6673 11.8767ZM10.0007 10.8334C7.23815 10.8334 5.00065 8.59587 5.00065 5.83337C5.00065 3.07087 7.23815 0.833374 10.0007 0.833374C12.7632 0.833374 15.0007 3.07087 15.0007 5.83337C15.0007 8.59587 12.7632 10.8334 10.0007 10.8334ZM15.834 13.8215L17.6017 12.0538L18.7802 13.2323L17.0125 15L18.7802 16.7678L17.6017 17.9463L15.834 16.1785L14.0662 17.9463L12.8877 16.7678L14.6555 15L12.8877 13.2323L14.0662 12.0538L15.834 13.8215Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesUserUnfollowFill;
