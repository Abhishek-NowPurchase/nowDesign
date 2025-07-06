import React from 'react';

const ExpandHorizontalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M0.416656 10L4.54145 5.87529L5.71996 7.0538L3.60701 9.16671H8.33332V10.8334H3.60701L5.71789 12.9443L4.53938 14.1228L0.416656 10ZM11.6667 10.8334H16.3923L14.2798 12.9459L15.4583 14.1245L19.5833 9.99971L15.4586 5.87488L14.28 7.05339L16.3934 9.16671H11.6667V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandHorizontalLine;
