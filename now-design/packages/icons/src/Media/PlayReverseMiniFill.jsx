import React from 'react';

const PlayReverseMiniFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.5403 4.53222L4.78393 9.64012C4.58517 9.75604 4.51802 10.0112 4.63397 10.21C4.67019 10.272 4.72185 10.3237 4.78393 10.36L13.5403 15.4679C13.7391 15.5838 13.9942 15.5166 14.1102 15.3179C14.1473 15.2541 14.167 15.1817 14.167 15.108V4.89213C14.167 4.66201 13.9804 4.47546 13.7503 4.47546C13.6765 4.47546 13.6041 4.49505 13.5403 4.53222Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayReverseMiniFill;
