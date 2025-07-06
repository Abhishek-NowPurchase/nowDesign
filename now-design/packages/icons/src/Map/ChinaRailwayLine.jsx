import React from 'react';

const ChinaRailwayLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 16.6667V10.8334H7.5V8.33337H12.5V10.8334H10.8333V16.6667H15V18.3334H5V16.6667H9.16667ZM8.33333 1.85256V0.833374H11.6667V1.85256C15.0067 2.61043 17.5 5.5974 17.5 9.16671C17.5 11.7696 16.174 14.0629 14.1607 15.4077L13.2361 14.0209C14.802 12.9748 15.8333 11.1912 15.8333 9.16671C15.8333 5.94505 13.2217 3.33337 10 3.33337C6.77834 3.33337 4.16667 5.94505 4.16667 9.16671C4.16667 11.1912 5.19798 12.9748 6.76391 14.0209L5.83931 15.4077C3.82598 14.0629 2.5 11.7696 2.5 9.16671C2.5 5.5974 4.99335 2.61043 8.33333 1.85256Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChinaRailwayLine;
