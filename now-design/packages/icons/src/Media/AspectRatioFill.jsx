import React from 'react';

const AspectRatioFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5003 2.5C17.9606 2.5 18.3337 2.8731 18.3337 3.33333V16.6667C18.3337 17.1269 17.9606 17.5 17.5003 17.5H2.50033C2.04009 17.5 1.66699 17.1269 1.66699 16.6667V3.33333C1.66699 2.8731 2.04009 2.5 2.50033 2.5H17.5003ZM15.0003 10H13.3337V12.5H10.8337V14.1667H15.0003V10ZM9.16699 5.83333H5.00032V10H6.66699V7.5H9.16699V5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AspectRatioFill;
