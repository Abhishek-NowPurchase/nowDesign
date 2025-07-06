import React from 'react';

const PixelfedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0013 1.66663C14.6037 1.66663 18.3347 5.39758 18.3347 9.99996C18.3347 14.6023 14.6037 18.3333 10.0013 18.3333C5.39893 18.3333 1.66797 14.6023 1.66797 9.99996C1.66797 5.39758 5.39893 1.66663 10.0013 1.66663ZM10.8607 6.74883H8.67415C7.85078 6.74883 7.18333 7.39569 7.18333 8.19363V13.817L9.34574 11.7575H10.8607C12.2878 11.7575 13.4447 10.6362 13.4447 9.25312C13.4447 7.87005 12.2878 6.74883 10.8607 6.74883Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PixelfedFill;
