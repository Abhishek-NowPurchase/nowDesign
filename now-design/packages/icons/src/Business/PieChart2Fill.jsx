import React from 'react';

const PieChart2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16663 1.70781V10.8334H18.2921C17.874 15.0444 14.321 18.3334 9.99996 18.3334C5.39758 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.67887 4.95553 2.12591 9.16663 1.70781ZM10.8333 0.452393C15.4612 0.851028 19.149 4.53877 19.5475 9.16669H10.8333V0.452393Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PieChart2Fill;
