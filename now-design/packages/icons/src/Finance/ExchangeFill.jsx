import React from 'react';

const ExchangeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0042 18.3356C5.40187 18.3356 1.6709 14.6047 1.6709 10.0022C1.6709 5.3999 5.40187 1.66895 10.0042 1.66895C14.6066 1.66895 18.3376 5.3999 18.3376 10.0022C18.3376 14.6047 14.6066 18.3356 10.0042 18.3356ZM10.0042 7.50228H6.6709V9.1689H14.1709L10.0042 5.00228V7.50228ZM5.83757 10.8356L10.0042 15.0022V12.5022H13.3376V10.8356H5.83757Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExchangeFill;
