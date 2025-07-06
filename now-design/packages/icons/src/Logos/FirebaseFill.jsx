import React from 'react';

const FirebaseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.6301 1.25107L3.33301 15.4165L7.89419 4.01371L6.41205 1.12743C6.22833 0.769661 5.69448 0.854074 5.6301 1.25107ZM9.63617 3.59827L3.33301 15.4165L11.5327 5.79093L10.3673 3.60582C10.2118 3.31425 9.79617 3.31173 9.63617 3.59827ZM9.11634 19.0311L3.33301 15.4165L14.4247 4.72112C14.6694 4.49614 15.0692 4.63561 15.1183 4.9673L16.6663 15.4165L10.883 19.0311C10.3426 19.3688 9.65676 19.3688 9.11634 19.0311Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FirebaseFill;
