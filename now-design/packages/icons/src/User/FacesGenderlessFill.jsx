import React from 'react';

const FacesGenderlessFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 5.88845V0.833374H10.8333V5.88845C13.8912 6.29586 16.25 8.91412 16.25 12.0834C16.25 15.5351 13.4517 18.3334 10 18.3334C6.54822 18.3334 3.75 15.5351 3.75 12.0834C3.75 8.91412 6.10887 6.29586 9.16667 5.88845Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesGenderlessFill;
