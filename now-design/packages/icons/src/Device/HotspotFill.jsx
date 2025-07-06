import React from 'react';

const HotspotFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16683 1.66671V9.16671H15.0002V17.5C15.0002 17.9603 14.6271 18.3334 14.1668 18.3334H4.16683C3.7066 18.3334 3.3335 17.9603 3.3335 17.5V2.50004C3.3335 2.03981 3.7066 1.66671 4.16683 1.66671H9.16683ZM10.8335 5.83337C11.754 5.83337 12.5002 6.57957 12.5002 7.50004H10.8335V5.83337ZM10.8335 3.33337C13.1347 3.33337 15.0002 5.19886 15.0002 7.50004H13.3335C13.3335 6.11933 12.2142 5.00004 10.8335 5.00004V3.33337ZM10.8335 0.833374C14.5154 0.833374 17.5002 3.81814 17.5002 7.50004H15.8335C15.8335 4.73862 13.5949 2.50004 10.8335 2.50004V0.833374Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HotspotFill;
