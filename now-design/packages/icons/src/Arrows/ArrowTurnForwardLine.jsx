import React from 'react';

const ArrowTurnForwardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.167 4.85698V10.8333C14.167 13.5947 11.9284 15.8333 9.16701 15.8333C6.40561 15.8333 4.16703 13.5947 4.16703 10.8333V3.33329H2.50037V10.8333C2.50037 14.5152 5.48513 17.5 9.16701 17.5C12.8489 17.5 15.8337 14.5152 15.8337 10.8333V4.85698L17.9467 6.96993L19.1252 5.79142L15.0003 1.66663L10.8756 5.79142L12.0541 6.96993L14.167 4.85698Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowTurnForwardLine;
