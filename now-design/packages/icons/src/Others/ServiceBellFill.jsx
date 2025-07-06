import React from 'react';

const ServiceBellFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.4997 2.5V4.16667H10.833V5.04115C15.0441 5.45925 18.333 9.01225 18.333 13.3333H1.66634C1.66634 9.01225 4.95524 5.45925 9.16634 5.04115V4.16667H7.49968V2.5H12.4997ZM19.1663 16.6667V15H0.833008V16.6667H19.1663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ServiceBellFill;
