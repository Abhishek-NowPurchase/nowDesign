import React from 'react';

const CopperCoinFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0042 18.3356C5.40187 18.3356 1.6709 14.6047 1.6709 10.0022C1.6709 5.3999 5.40187 1.66895 10.0042 1.66895C14.6066 1.66895 18.3376 5.3999 18.3376 10.0022C18.3376 14.6047 14.6066 18.3356 10.0042 18.3356ZM10.0042 6.46674L6.4687 10.0022L10.0042 13.5378L13.5397 10.0022L10.0042 6.46674Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CopperCoinFill;
