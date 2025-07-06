import React from 'react';

const CopperDiamondFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0042 18.3356C5.40187 18.3356 1.6709 14.6047 1.6709 10.0022C1.6709 5.3999 5.40187 1.66895 10.0042 1.66895C14.6066 1.66895 18.3376 5.3999 18.3376 10.0022C18.3376 14.6047 14.6066 18.3356 10.0042 18.3356ZM7.9209 7.50228L5.83757 9.58557L10.0036 13.7522L14.1709 9.58557L12.0876 7.50228H7.9209Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CopperDiamondFill;
