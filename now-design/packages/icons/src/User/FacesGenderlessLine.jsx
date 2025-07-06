import React from 'react';

const FacesGenderlessLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 5.88845C13.8912 6.29586 16.25 8.91412 16.25 12.0834C16.25 15.5351 13.4517 18.3334 10 18.3334C6.54822 18.3334 3.75 15.5351 3.75 12.0834C3.75 8.91412 6.10887 6.29586 9.16667 5.88845V0.833374H10.8333V5.88845ZM10 16.6667C12.5313 16.6667 14.5833 14.6147 14.5833 12.0834C14.5833 9.55204 12.5313 7.50004 10 7.50004C7.46869 7.50004 5.41667 9.55204 5.41667 12.0834C5.41667 14.6147 7.46869 16.6667 10 16.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesGenderlessLine;
