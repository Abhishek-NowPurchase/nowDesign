import React from 'react';

const PriceTag3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.087 1.75024L17.3366 2.92875L18.5151 11.1784L10.8547 18.8386C10.5293 19.1641 10.0017 19.1641 9.67625 18.8386L1.4267 10.5891C1.10126 10.2636 1.10126 9.73604 1.4267 9.41054L9.087 1.75024ZM11.4441 8.82129C12.0949 9.4722 13.1502 9.4722 13.8011 8.82129C14.4519 8.17044 14.4519 7.11516 13.8011 6.46429C13.1502 5.81342 12.0949 5.81342 11.4441 6.46429C10.7932 7.11516 10.7932 8.17044 11.4441 8.82129Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PriceTag3Fill;
