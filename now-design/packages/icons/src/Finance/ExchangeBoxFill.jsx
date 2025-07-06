import React from 'react';

const ExchangeBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.6689C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.6689V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM10.0042 7.50232H6.6709V9.16894H14.1709L10.0042 5.00232V7.50232ZM5.83757 10.8356L10.0042 15.0023V12.5023H13.3376V10.8356H5.83757Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExchangeBoxFill;
