import React from 'react';

const PieChartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16663 1.70776V10.8333H18.2921C17.874 15.0444 14.321 18.3333 9.99996 18.3333C5.39758 18.3333 1.66663 14.6024 1.66663 9.99995C1.66663 5.67882 4.95553 2.12586 9.16663 1.70776ZM10.8333 1.70776C14.7703 2.09866 17.9013 5.2296 18.2921 9.16661H10.8333V1.70776Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PieChartFill;
