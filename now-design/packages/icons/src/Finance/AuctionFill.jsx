import React from 'react';

const AuctionFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6709 16.669V18.3356H1.6709V16.669H11.6709ZM12.1591 0.574219L18.6408 7.05603L17.4623 8.23454L16.5785 7.93991L14.5161 10.0023L19.2302 14.7164L18.0516 15.8949L13.3376 11.1808L11.3341 13.1843L11.5698 14.1271L10.3912 15.3056L3.90947 8.82381L5.08799 7.64529L6.0308 7.88099L11.2752 2.63661L10.9806 1.75273L12.1591 0.574219Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AuctionFill;
