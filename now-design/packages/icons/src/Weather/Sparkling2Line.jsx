import React from 'react';

const Sparkling2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1663 1.00684L15.2653 3.06753L17.3259 4.16656L15.2653 5.26559L14.1663 7.32629L13.0672 5.26559L11.0065 4.16656L13.0672 3.06753L14.1663 1.00684ZM8.88844 7.77767L13.0551 9.99988L8.88844 12.2221L6.66623 16.3888L4.44401 12.2221L0.277344 9.99988L4.44401 7.77767L6.66623 3.611L8.88844 7.77767ZM9.51344 9.99988L7.65657 9.00955L6.66623 7.15267L5.67589 9.00955L3.81901 9.99988L5.67589 10.9902L6.66623 12.8471L7.65657 10.9902L9.51344 9.99988ZM16.3884 13.611L14.9996 11.0069L13.6107 13.611L11.0065 14.9999L13.6107 16.3888L14.9996 18.993L16.3884 16.3888L18.9926 14.9999L16.3884 13.611Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Sparkling2Line;
