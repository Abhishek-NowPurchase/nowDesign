import React from 'react';

const ChinaRailwayFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 15.8334V10.8334L7.5 10V7.50004H12.5V10L10.8333 10.8334V15.8334L15 16.6667V18.3334H5V16.6667L9.16667 15.8334ZM8.33333 1.85256V0.833374H11.6667V1.85256C15.0067 2.61043 17.5 5.5974 17.5 9.16671C17.5 11.7696 16.174 14.0629 14.1607 15.4077L13.2361 14.0209C14.802 12.9748 15.8333 11.1912 15.8333 9.16671C15.8333 5.94505 13.2217 3.33337 10 3.33337C6.77834 3.33337 4.16667 5.94505 4.16667 9.16671C4.16667 11.1912 5.19798 12.9748 6.76391 14.0209L5.83931 15.4077C3.82598 14.0629 2.5 11.7696 2.5 9.16671C2.5 5.5974 4.99335 2.61043 8.33333 1.85256Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChinaRailwayFill;
