import React from 'react';

const FacesUserReceivedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6673 11.8767V18.3334H3.33398C3.33398 14.6515 6.31875 11.6667 10.0007 11.6667C10.5762 11.6667 11.1347 11.7396 11.6673 11.8767ZM10.0007 10.8334C7.23815 10.8334 5.00065 8.59587 5.00065 5.83337C5.00065 3.07087 7.23815 0.833374 10.0007 0.833374C12.7632 0.833374 15.0007 3.07087 15.0007 5.83337C15.0007 8.59587 12.7632 10.8334 10.0007 10.8334ZM16.1827 14.1667H19.1708V15.8334H16.1827L17.7064 17.357L16.5278 18.5355L12.9923 15L16.5278 11.4645L17.7064 12.643L16.1827 14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesUserReceivedFill;
